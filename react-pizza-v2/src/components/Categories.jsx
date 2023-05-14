import { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className='categories'>
      <ul>
        {categories.map((value, i) => {
          return (
            <li
              onClick={() => setActiveIndex(i)}
              className={activeIndex === i ? 'active' : ''}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
