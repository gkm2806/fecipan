import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './ui/NavBar';
import Footer from './ui/Footer';
import Fire from './data/firebase'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{},
      projetos: [
        {
          id: 1,
          nome: 'Estudo sobre macacos espaciais jogadores de lolzinho',
          pontos: 0,
          area: "Exatas",
          local: "A8",
          nivel: "Médio"
        },
        {
          id: 2,
          nome: 'Coisas chatas de humanas',
          pontos: 0,
          area: "Humanas",
          local: "?",
          nivel: "simples"
        },
        {
          id: 3,
          nome: 'Ensaio Metalurgico sobre como fazer portões',
          pontos: 0,
          area: "Sla",
          local: "M1",
          nivel: "Médio"
        },
        {
          id: 4,
          nome: 'Tutorial de como fazer uma intro pra video minecrafti ',
          pontos: 0,
          area: "cancer",
          local: "C1",
          nivel: "Médio"
        },
        {
          id: 5,
          nome: 'Desenvolvimento de uma rede de Pi-Beacons e um aplicativo móvel andrcansei de escrever',
          pontos: 0,
          area: "informatica 10/10",
          local: "A2",
          nivel: "Médio"
        },
        {
          id: 5,
          nome: 'Software de monitoramento de batatas',
          pontos: 0,
          area: "informatica 10/10",
          local: "A3",
          nivel: "Médio"
        },
        {
          id: 5,
          nome: 'Desenvolvimento de software de cores para cegos',
          pontos: 0,
          area: "informatica 10/10",
          local: "A4",
          nivel: "Médio"
        },
        {
          id: 5,
          nome: 'Como não chorar quando descobrir que informatica é melhor que metalurgia',
          pontos: 0,
          area: "Sla",
          local: "Canto do Choro",
          nivel: "Médio"
        },
        {
          id: 6,
          nome: 'Experiencia do Manual do Mundo 1',
          pontos: 0,
          area: "Ciência(?)",
          local: "F1",
          nivel: "Fundamental"
        }
      ]
    }
  }
  componentDidMount(){
    this.authListener();

  }

  authListener() {
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
