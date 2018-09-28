import React, { Component } from 'react';
import './App.css';
import NavBar from './ui/NavBar';
import Footer from './ui/Footer';
import fire from './data/firebase'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:{},
      user:{},
      projetos: [      ]
    }
  }
  componentDidMount(){
    const projetos = this.state.projetos
    this.authListener();
    var t = this.state.data;
    var vaca = fire.database().ref('/projetos/').limitToLast(100);
    console.log(vaca);
    fire.database().ref('/projetos/').on("child_added", snap =>{
      projetos.push({
        id: snap.key,
        nome: snap.val().nome,
        nivel: snap.val().nivel,
        local: snap.val().local,
        area: snap.val().area
      })
    })


  }

  authListener() {
  }

  handleClick = () => {
    console.log(this.state.projeto);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <main>

          {React.cloneElement(this.props.children, {projetos : this.state.projetos})}
        </main>
      <Footer />
      </div>
    );
  }
}

export default App;
