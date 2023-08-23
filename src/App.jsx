

import React, {useState} from "react";
import "./App.css"

function App () {
  const [color1, setColor1] = useState("red")
    const [color2, setColor2] = useState("blue")
    function swapColors () {
      setColor1(color2)
      setColor2(color1)
   }
    return (
        <>
            <div onClick={swapColors} className="square1" style={{
                backgroundColor: color1
            }}>

            </div>
            <div onClick={swapColors} className="square2" style={{
                backgroundColor:color2
            }}>

            </div>
        </>

    )
}

export default App
// Хранилище состояние
