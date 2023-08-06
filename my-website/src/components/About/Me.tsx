import './About.scss';
import Info from './Info';

function Me() {
  return (
    <div className='Me'>
      <div className='ava'>
        <img
          src='https://w.forfun.com/fetch/3c/3c61d7eb9c8504c75f478302453cf1d2.jpeg'
          alt='Ravil Kashkarov'
        />
      </div>
      <Info />
    </div>
  );
}

export default Me;
