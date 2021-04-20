import React from 'react';
import './App.css';
import Game from './components/Game'
import './components/Body'
import './components/Square'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.basic = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ]
    this.state = {
      tourJoueurJaune: true,
      endGame: 0,
      board: this.basic,
      hoverIndex: null
    }
  }
  componentDidUpdate() {
    if (this.state.endGame === 1) {
      this.resetBoard()
      alert('Victoire des rouges');
    } else if (this.state.endGame === 2) {
      this.resetBoard()
      alert('Victoire des jaunes');
    }
  }

  resetBoard = () => {
    const newBoard = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ];
    this.setState({ board: newBoard, endGame: 0 });
  }
  handleHover = (x) => {
    this.setState({ hoverIndex: x })
  }
  handleMouseLeave = () => {
    this.setState({ hoverIndex: null })
  }

  handleClick = x => {
    console.log("x", x);
    const joueur = this.state.tourJoueurJaune;
    let myNewBoard = [...this.state.board];
    const myCol = myNewBoard[x];
  
  }
  render() {
    return(
      <div>Bonjour</div>
    )
  }
}


export default App;