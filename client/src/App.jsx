import { useEffect ,useState} from "react"
import Palette from "./components/Palette"
import {initSocket ,subscribeSocket} from'./socketApi'


function App() {
  const [activeColor, setActiveColor] =useState("#282c34");

  useEffect(() => {
    initSocket();
    subscribeSocket((color) => {
      setActiveColor(color)
    });
  },[])

  return (
    <div className="app" style={{backgroundColor:activeColor}}>
      
      <Palette activeColor={activeColor}/>    
    </div>
  )
}

export default App
