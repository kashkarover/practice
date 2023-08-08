import { useState } from 'react';
import '../projects/Projects.scss';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <h1>Счетчик</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>- Минус</button>
      <button onClick={() => setCount(count + 1)}>Плюс +</button>
    </div>
  );
}
