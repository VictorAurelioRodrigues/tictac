import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = player;

        setBoard(newBoard);
        setPlayer(player === "X" ? "O" : "X");
        setWinner(checkWinner(newBoard));
    };

    const checkWinner = (board) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        return null;
    };

    const renderCell = (index) => (
        <div className="cell" onClick={() => handleClick(index)}>
            {board[index]}
        </div>
    );

    const renderBoard = () => (
        <div className="board">
            <div className="row">
                {renderCell(0)}
                {renderCell(1)}
                {renderCell(2)}
            </div>
            <div className="row">
                {renderCell(3)}
                {renderCell(4)}
                {renderCell(5)}
            </div>
            <div className="row">
                {renderCell(6)}
                {renderCell(7)}
                {renderCell(8)}
            </div>
        </div>
    );

    const renderStatus = () => {
        if (winner) {
            return <div>O jogador {winner} ganhou!</div>;
        } else if (board.every((cell) => cell)) {
            return <div>O jogo terminou em empate!</div>;
        } else {
            return <div>É a vez do jogador {player}</div>;
        }
    };

    return (
        <div className="container">
            <h1>Jogo da Velha</h1>
            {renderBoard()}
            {renderStatus()}
        </div>
    );
};

export default TicTacToe;