import React, { useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './App.css';

const cx = classNames.bind(styles);

const data = [...new Set(`Officia adipisicing officia eu nostrud elit duis laborum ex adipisicing minim reprehenderit consequat ut. Ut laboris irure amet ad dolore laboris magna quis.`.split(' '))];

function App() {
  const [isAbove, setIsAbove] = useState(false);
  const onClick = useCallback(() => {
    setIsAbove(s => !s);
  }, []);

  const dropdownClasses = cx('dropdown', { 'column-reverse': isAbove });

  return (
    <div className="App">
      <button type="button" onClick={onClick}>Set list to: {isAbove ? 'below' : 'above'}</button>
      <div className={dropdownClasses}>
          <input type="text" className={cx('dropdown-input')} />
          <div className={cx('dropdown-list')}>
            <ul>
              {data.map(d => <li key={d} tabIndex="0">{d}</li>)}
            </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
