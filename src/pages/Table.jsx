// import React, { useState } from 'react';

// const Table = () => {
//   const [turn, setTurn] = useState('x');

//   function click(e) {
//     if (e.target.innerHTML === "") {
//       e.target.innerHTML = 'x';
//       setTurn('o');
//     }
//   }

//   function dblclick(e) {
//     if (e.target.innerHTML === "") {
//       e.target.innerHTML = 'o';
//       setTurn('x');
//     }
//   }

//   return (
//     <div>
//       <h1>Player {turn} turn</h1>
//       <table border={3} cellSpacing={"20px"} cellPadding={"20px"}>
//         <tbody>
//           <tr>
//             <td className='td'  onDoubleClick={dblclick} onClick={click}></td>
//             <td className='td' onClick={click} onDoubleClick={dblclick}></td>
//             <td className='td' onClick={click} onDoubleClick={dblclick}></td>
//           </tr>
//           <tr>
//             <td className='td' onDoubleClick={dblclick}></td>
//             <td className='td' onClick={click} onDoubleClick={dblclick}></td>
//             <td className='td' onClick={click} onDoubleClick={dblclick}></td>
//           </tr>
//           <tr>
//             <td className='td' onClick={click} onDoubleClick={dblclick}></td>
//             <td className='td' onClick={click} onDoubleClick={dblclick}></td>
//             <td className='td' onClick={click} onDoubleClick={dblclick}></td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

import React, { useState } from 'react';
import "./style.css"

const Table = () => {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleCellClick = (row, col) => {
    if (board[row][col] === '') {
      const newBoard = [...board];
      newBoard[row][col] = turn;
      setBoard(newBoard);
      setTurn(turn === 'X' ? 'O' : 'X');
      checkWinner();
    }
  };

  const checkWinner = () => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
        setWinner(board[i][0]);
        return;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
        setWinner(board[0][i]);
        return;
      }
    }

    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
      setWinner(board[0][0]);
      return;
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
      setWinner(board[0][2]);
      return;
    }
  };

  return (
    <div>
      {winner ? (
        <h1>Player {winner} wins!</h1>
      ) : (
        <h1>Player {turn}'s turn</h1>
      )}
      <table border={3} cellPadding='20px' cellSpacing='20px'>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} onClick={() => handleCellClick(rowIndex, colIndex)}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
