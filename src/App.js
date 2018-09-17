import React, { Component } from 'react';
import './App.css';
import NavBar from './ui/NavBar';
import Footer from './ui/Footer';

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
          nivel: "Médio",
            nota: 0
        },
        {
          id: 2,
          nome: 'Coisas chatas de humanas',
          pontos: 0,
          area: "Humanas",
          local: "?",
          nivel: "simples",
            nota: 0
        },
        {
          id: 3,
          nome: 'Ensaio Metalurgico sobre como fazer portões',
          pontos: 0,
          area: "Sla",
          local: "M1",
          nivel: "Médio",
            nota: 0
        },
        {
          id: 4,
          nome: 'Tutorial de como fazer uma intro pra video minecrafti ',
          pontos: 0,
          area: "cancer",
          local: "C1",
          nivel: "Médio",
            nota: 0
        },
        {
          id: 5,
          nome: 'Desenvolvimento de uma rede de Pi-Beacons e um aplicativo móvel andrcansei de escrever',
          pontos: 0,
          area: "info",
          local: "A2",
          nivel: "Médio",
            nota: 0
        },
        {
          id: 5,
          nome: 'Software de monitoramento de batatas',
          pontos: 0,
          area: "info",
          local: "A3",
          nivel: "Médio",
            nota: 0
        },
        {
          id: 5,
          nome: 'Desenvolvimento de software de cores para cegos',
          pontos: 0,
          area: "info",
          local: "A4",
          nivel: "Médio",
            nota: 0
        },
        {
          id: 5,
          nome: 'Como não chorar quando descobrir que informatica é melhor que metalurgia',
          pontos: 0,
          area: "Sla",
          local: "Canto",
          nivel: "Médio",
            nota: 0
        },
        {
          id: 6,
          nome: 'Experiencia do Manual do Mundo 1',
          pontos: 0,
          area: "exatas",
          local: "F1",
          nivel: "Fund",
            nota: 0
        }
      ]
    }
  }
  componentDidMount(){
    this.authListener();
    console.log(this.props.projetos);

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
