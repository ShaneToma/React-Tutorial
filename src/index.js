//2022-08-15
//Shane Toma
//Starter code taken from https://reactjs.org/tutorial/tutorial.html#overview
//Tutorial followed from https://reactjs.org/tutorial/tutorial.html
// react devTools for chrome/firefox are a good idea
class Square extends React.Component {
  render() {
    // This passes a function as a prop, the syntax is often a sore spot be sure to do it this way.
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()} // setState automatically updates states of children too
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  // React components are not the same as elements, elements are made of components.
  constructor(props) {
    // constructor should always be passed props
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({ squares: squares });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]} // value={i} is a prop, props are properties, properties are passed to children
        onClick={() => this.handleClick(i)}
      />
    );
  } // information trickles down in react from parents to children.

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
