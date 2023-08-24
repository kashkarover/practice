import { useState } from 'react';
import '../projects/Calc.scss';

export default function Calculator() {
  const [res, setRes] = useState('');
  const [temp, setTemp] = useState('');
  const [op, setOp] = useState('');

  let result = '';

  function ClearField() {
    setTemp('');
    setRes('');
    setOp('');
  }

  function Sum() {
    setOp('plus');
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function Subtraction() {
    setOp('minus');
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function Division() {
    setOp('division');
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function Multiply() {
    setOp('multiply');
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function Pow_Square() {
    setOp('pow_2');
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function Pow() {
    setOp('pow_n');
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function Root_Square() {
    setOp('root_2');
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function Root() {
    setOp('root_n');
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function equal() {
    setTemp('');
    switch (op) {
      case 'plus':
        result = String(Number(temp) + Number(res));
        break;
      case 'minus':
        result = String(Number(temp) - Number(res));
        break;
      case 'multiply':
        result = String(Number(temp) * Number(res));
        break;
      case 'division':
        result = String(Number(temp) / Number(res));
        break;
      case 'pow_2':
        result = String(Math.pow(+temp, 2));
        break;
      case 'pow_n':
        result = String(Math.pow(+temp, +res));
        break;
      case 'root_2':
        result = String(Math.sqrt(+temp));
        break;
      default:
        console.log(':)');
    }
    setRes(result === '' ? '' : result);
  }

  return (
    <div className='calculator'>
      <p>показывать временные данные</p>
      <p>исправить баги с делением</p>
      <input type='text' value={res} placeholder='0' />
      <p className='test'>sssssssss</p>
      <div className='buttons'>
        <div className='row-5'>
          <button id='pow_square' onClick={() => Pow_Square()}>
            x<sup>2</sup>
          </button>
          <button onClick={() => Pow()}>
            x<sup>n</sup>
          </button>
          <button onClick={() => Root_Square()}>r(2)</button>
          <button>r(n)</button>
        </div>
        <div className='row-4'>
          <button onClick={() => setRes(res + '7')}>7</button>
          <button onClick={() => setRes(res + '8')}>8</button>
          <button onClick={() => setRes(res + '9')}>9</button>
          <button id='minus' onClick={() => Subtraction()}>
            -
          </button>
        </div>
        <div className='row-3'>
          <button onClick={() => setRes(res + '4')}>4</button>
          <button onClick={() => setRes(res + '5')}>5</button>
          <button onClick={() => setRes(res + '6')}>6</button>
          <button id='sum' onClick={() => Sum()}>
            +
          </button>
        </div>
        <div className='row-2'>
          <button onClick={() => setRes(res + '1')}>1</button>
          <button onClick={() => setRes(res + '2')}>2</button>
          <button onClick={() => setRes(res + '3')}>3</button>
          <button id='multi' onClick={() => Multiply()}>
            *
          </button>
        </div>
        <div className='row-1'>
          <button onClick={ClearField}>C</button>
          <button onClick={equal}>=</button>
          <button onClick={() => setRes(res + '0')}>0</button>
          <button id='div' onClick={() => Division()}>
            /
          </button>
        </div>
      </div>
    </div>
  );
}
