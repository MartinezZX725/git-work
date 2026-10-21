import React from 'react'
import { createRoot } from 'react-dom/client'

function SpecialButton({text}){
  return(
    <button>{text}</button>
  )
}

function specialtxt({text}){
  return(
      <p>{text}</p>
    
  )

}function specialImage({url: link}){
  return(
    <img src={link} />
      
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div>
      <specialImg link="https://i.pinimg.com/736x/d7/e8/d2/d7e8d26fccdd8c55b4b9f8734eaa8554.jpg"></specialImg>
      <specialtxt text="Plata"></specialtxt>
      <SpecialButton text={"Money"}></SpecialButton>
      <hr />
    </div>

    <div>
      <specialImg link="https://i.pinimg.com/1200x/52/28/7d/52287d2cb0546f080d3ec16b4ad922bc.jpg"></specialImg>
      <specialtxt text="NKD"></specialtxt>
     <SpecialButton text={"Comprar"}></SpecialButton>
     <hr />
    </div>

    <div>
      <specialImg link="https://i.pinimg.com/736x/ed/12/b4/ed12b480f60be1fabf9916a6ab68c5d6.jpg"></specialImg>
      <specialtxt text="Yager"></specialtxt>
      <SpecialButton text={"szs"}></SpecialButton>
     </div>

  </React.StrictMode>,
)