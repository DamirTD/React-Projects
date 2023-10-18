import { useState } from 'react'
import './App.css'

function App() {
  
  const [topLeftNumber, setTopLeftNumber] = useState<number>(0);
  const [topRightNumber, setTopRightNumber] = useState<number>(0);
  const [bottomLeftNumber, setBottomLeftNumber] = useState<number>(0);
  const [bottomRightNumber, setBottomRightNumber] = useState<number>(0);

  // const inputValues = [topLeftNumber, topRightNumber, bottomLeftNumber, bottomRightNumber]

  // проверка если значения стейта не number
  // const isNumber = (value: unknown): boolean => {
  //   return typeof value === 'number'
  // }

  // TODO : em,rem,calc

  const handleSubmit = () => {
    const topLeftBorderRadiusValue = `${topLeftNumber}px`;
    const topRightBorderRadiusValue = `${topRightNumber}px`;
    const bottomLeftBorderRadiusValue = `${bottomLeftNumber}px`;
    const bottomRightBorderRadiusValue = `${bottomRightNumber}px`;

    const textAreaElement = document.querySelector('.text_area') as HTMLElement;

    if (textAreaElement) {
      textAreaElement.style.borderRadius = `${topLeftBorderRadiusValue} ${topRightBorderRadiusValue} ${bottomRightBorderRadiusValue} ${bottomLeftBorderRadiusValue}`;
    }
  }

  return (
    <>
      <div className='container'>
        <div className="top-inputs">
          <input
          type="text"
          className="top-left-input"
          value={topLeftNumber}
          onChange={(e) => setTopLeftNumber(Number(e.target.value))}
        />
        <input
          type="text"
          className="top-right-input"
          value={topRightNumber}
          onChange={(e) => setTopRightNumber(Number(e.target.value))}
        />
        </div>
        
        <div className="text_area"></div>
        <div className="bottom-inputs">
          <input
          type="text"
          className="bottom-left-input"
          value={bottomLeftNumber}
          onChange={(e) => setBottomLeftNumber(Number(e.target.value))}
        />
        <input
          type="text"
          className="bottom-right-input"
          value={bottomRightNumber}
          onChange={(e) => setBottomRightNumber(Number(e.target.value))}
        />
        </div>
        
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default App
