import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Table from './pages/Table'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Table/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

// function Square() {
//   let [value,setValue]=useState(null);
//   let [value2,setValue2]=useState(null);
//   function click(){
//    setValue("X") 
    
//   }
  
//   return <button className="square" onClick={click}>{value}</button>;
// }

// export default function Board() {

//   return (
//     <>
//       <div className="board-row">
//         <Square />
//         <Square  />
//         <Square  />
//       </div>
//       <div className="board-row">
//         <Square  />
//         <Square  />
//         <Square  />
//       </div>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//     </>
//   );
// }


