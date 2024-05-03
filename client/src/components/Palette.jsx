import { useState } from "react"
import { sendColor } from "../socketApi"

function Palette({activeColor}) {
    const [color, setColor] = useState("#000000")
    
    return (
        <div className='palette'>
            <h1>{activeColor}</h1>
            <input type="color" name="color" value={activeColor} onChange={(e) => setColor(e.target.value)} className="paletteInput" />
            <button type="button" onClick={() => sendColor(color)}>Change Color</button>
               
           
        </div>
    )
}

export default Palette