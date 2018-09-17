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
          nome: 'Desenvolvimento de uma rede de Pi-Beacons e um apcansei de escrever',
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
