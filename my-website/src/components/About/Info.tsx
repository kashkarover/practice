import './About.scss';
import InfoBlock from './InfoBlock';

function Info() {
  const infoCategories = [
    { title: 'Личная информация', age: 26, city: 'Уфа' },
    {
      title: 'Образование',
      univer: 'КНИТУ-КАИ',
      univer_spec: 'Наноинженерия',
      univer_degree: 'Бакалавр',
    },
    { title: 'Контакты' },
  ];

  // let userInfo: {
  //   age: number;
  //   city: string;
  //   univer: string;
  //   univer_spec: string;
  // } = {
  //   age: 26,
  //   city: 'Уфа',
  //   univer: 'КНИТУ-КАИ',
  //   univer_spec: 'Наноинженерия',
  // };

  return (
    <div className='info'>
      <h1>Ravil Kashkarov</h1>
      <p id='status'>Status</p>
      <hr className='hr-line' />
      {infoCategories.map((value) => {
        return (
          <div className='info-title'>
            <h2 key='value'>{value.title}</h2>
            <hr className='hr-line' />
          </div>
        );
      })}
    </div>
  );
}

export default Info;
