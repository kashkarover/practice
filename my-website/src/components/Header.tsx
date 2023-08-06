// import { useState } from 'react';
import './Header.scss';

function Header() {
  //   const [count, setCount] = useState(0);

  return (
    <div className='header'>
      {/* <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Плюс</button>
      <button onClick={() => setCount(count - 1)}>Минус</button> */}
      <div className='logo'>
        <a href='/'>kashkarover</a>
      </div>
      <ul>
        <li>
          <a href='/about'>Обо мне</a>
        </li>
        <li>Мои работы</li>
        <li>Блог</li>
      </ul>
    </div>
  );
}

export default Header;
