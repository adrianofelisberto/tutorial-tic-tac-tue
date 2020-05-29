import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  renderSquare(i, col, row) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i, col, row)}  
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0, 0, 0)}
          {this.renderSquare(1, 1, 0)}
          {this.renderSquare(2, 2, 0)}
        </div>
        <div className="board-row">
          {this.renderSquare(3, 0, 1)}
          {this.renderSquare(4, 1, 1)}
          {this.renderSquare(5, 2, 1)}
        </div>
        <div className="board-row">
          {this.renderSquare(6, 0, 2)}
          {this.renderSquare(7, 1, 2)}
          {this.renderSquare(8, 2, 2)}
        </div>
      </div>
    );
  }
}
