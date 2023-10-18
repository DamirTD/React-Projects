import { useState, ChangeEvent } from 'react';
import './App.css';

function App() {
  // Используем useState для хранения состояния компонента
  const [decimalNumber, setDecimalNumber] = useState<string>('0');
  const [binaryNumber, setBinaryNumber] = useState<string>('');

  const handleConvert = () => {
    const decimal = parseInt(decimalNumber, 10);

    if (!isNaN(decimal)) {
      let binary = '';
      let n = decimal;

      while (n > 0) {
        const remainder = n % 2;
        binary = remainder + binary;
        n = Math.floor(n / 2);
      }

      setBinaryNumber(binary.toString()); 
      
    } else {
      setBinaryNumber('Invalid input');
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDecimalNumber(e.target.value); 
  }

  return (
    <>
      <div className='container'>
        <input
          type="text"
          value={decimalNumber}
          onChange={handleInputChange} 
        />
        <button onClick={handleConvert}>Convert</button>
        <p>Decimal: {decimalNumber}</p>
        <p>Binary: {binaryNumber}</p>
      </div>
    </>
  )
}

export default App;
