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
    setOp(document.querySelector('#sum')!.innerHTML);
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function Subtraction() {
    setOp(document.querySelector('#minus')!.innerHTML);
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function Division() {
    setOp(document.querySelector('#div')!.innerHTML);
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function Multiply() {
    setOp(document.querySelector('#multi')!.innerHTML);
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function Pow_Square() {
    setOp(document.querySelector('#pow_square')!.innerHTML);
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function Pow() {
    setOp(document.querySelector('#pow')!.innerHTML);
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function Root_Square() {
    setOp(document.querySelector('#root_square')!.innerHTML);
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function Root() {
    setOp(document.querySelector('#root')!.innerHTML);
    console.log(op);
    setTemp(res);
    setRes('');
  }

  function equal() {
    setTemp('');
    switch (op) {
      case '+':
        result = String(Number(temp) + Number(res));
        break;
      case '-':
        result = String(Number(temp) - Number(res));
        break;
      case '*':
        result = String(Number(temp) * Number(res));
        break;
      case '/':
        result = String(Number(temp) / Number(res));
        break;
      case 'x<sup>2</sup>':
        result = String(Math.pow(+res, 2));
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
          <button>
            x<sup>n</sup>
          </button>
          <button>r(2)</button>
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
