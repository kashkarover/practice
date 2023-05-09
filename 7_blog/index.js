import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import {
  registerValidaton,
  loginValidaton,
  postCreateValidaton,
} from './validations/validations.js';
import { checkAuth, handleValidationErrors } from './utils/index.js';
import { UserController, PostController } from './controllers/index.js';

mongoose
  .connect(
    'mongodb+srv://@cluster0.kgi1sft.mongodb.net/blog'
  )
  .then(() => {
    console.log('Database OK');
  })
  .catch((err) => console.log('Database Error', err));

const app = express();
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post(
  '/auth/login',
  loginValidaton,
  handleValidationErrors,
  UserController.login
);
app.post(
  '/auth/register',
  registerValidaton,
  handleValidationErrors,
  UserController.register
);
app.get('/auth/me', checkAuth, UserController.getMe);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.post(
  '/posts',
  checkAuth,
  postCreateValidaton,
  handleValidationErrors,
  PostController.create
);
app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.delete('/posts/:id', checkAuth, PostController.remove);
app.patch(
  '/posts/:id',
  checkAuth,
  postCreateValidaton,
  handleValidationErrors,
  PostController.update
);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server OK');
});
