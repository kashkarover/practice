import '../projects/Calc.scss';

export default function Calculator() {
  return (
    <div className='calculator'>
      <input type='text' />
      <div className='buttons'>
        <div className='row-4'>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
        </div>
        <div className='row-3'>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
        </div>
        <div className='row-2'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>*</button>
        </div>
        <div className='row-1'>
          <button>=</button>
          <button>0</button>
          <button>/</button>
        </div>
      </div>
    </div>
  );
}
