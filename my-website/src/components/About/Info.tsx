import './About.scss';

function Info() {
  return (
    <div className='info'>
      <h1>Ravil Kashkarov</h1>
      <p id='status'>Status</p>
      <hr className='hr-line' />

      <div className='info-block'>
        <h2 className='info-title'>Личная информация</h2>
        <p>Возраст: 26</p>
        <p>Город: Нагаево</p>
        <hr className='hr-line' />
      </div>
      <div className='info-block'>
        <h2 className='info-title'>Образование</h2>
        <p>Место учебы: КНИТУ-КАИ</p>
        <p>Специальность: Наноинженерия</p>
        <p>Степень: Бакалавр</p>
        <hr className='hr-line' />
      </div>
      <div className='info-block'>
        <h2 className='info-title'>Контактная информация</h2>

        <hr className='hr-line' />
      </div>
    </div>
  );
}

export default Info;
