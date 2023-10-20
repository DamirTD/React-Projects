import { useState } from 'react';
import './App.css';

function App() {
  const numbers = [
    '%', 'CE', 'C', "X",
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    '+-', '0', ',', '=',
  ];

  const chunkedNumbers = [];
  for (let i = 0; i < numbers.length; i += 4) {
    const chunk = numbers.slice(i, i + 4);
    chunkedNumbers.push(chunk);
  }

  const [inputValue, setInputValue] = useState('');

  // Функция для обработки кликов на кнопках
  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const result = eval(inputValue);
        setInputValue(result.toString());
      } catch (error) {
        setInputValue('Error');
      }
    } else if (value === 'C') {
      setInputValue('');
    } else if (value === 'CE') {
      setInputValue(inputValue.slice(0, -1));
    } else {
      setInputValue((prevValue) => prevValue + value);
    }
  };

  return (
    <>
      <div className='calc-container'>
        <div className="textarea">
          <textarea value={inputValue} readOnly />
        </div>
        <div className="numbers">
          {chunkedNumbers.map((chunk, index) => (
            <div key={index} className="row">
              {chunk.map((number, numberIndex) => (
                <span
                  key={numberIndex}
                  className="number"
                  onClick={() => handleButtonClick(number)}
                >
                  {number}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
