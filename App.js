import { useState, useRef }  from "react";




function App() {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!running) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 10);
      }, 10);
      setRunning(true);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    if (running) {
      const newLaps = [...laps, timer];
      setLaps(newLaps);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
    setRunning(false);
    
  };

  
  return (
    <div className="app">
      
    <div className="app">
      <p>{(timer / 1000).toFixed(2)} секунды</p>
      <div className="buttons">
        <button onClick={startTimer} >
          Старт
        </button>
        <button onClick={stopTimer}>
          Стоп
        </button>
        <button onClick={resetTimer}>
          Сбросить
        </button>
        
      </div>
      <div>
        <h2>Последние показатели:</h2>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>{(lap / 1000)} секунды</li>
          ))}
        </ul>
      </div>
    </div>
  

    </div>
  );
}

export default App;
