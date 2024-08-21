import { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.webApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };
  return (
    <div className="App">
      live
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
