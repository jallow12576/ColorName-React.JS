import Square from "./Square";
import Input from "./Input";
import { useState} from 'react'


function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <main className="App">
      <Square
      colorValue={colorValue}
      setColorValue={setColorValue}
      hexValue={hexValue}
      isDarkText={isDarkText}
      />
      <Input 
      setColorValue={setColorValue}
      setHexValue={setHexValue}
      isDarkText={isDarkText}
      setIsDarkText={setIsDarkText}
      />
    </main>
  );
}

export default App;
