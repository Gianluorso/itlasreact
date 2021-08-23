import React, {Component} from 'react';
import Post from './post.js';
import Slide1 from './img/slide/1.jpg';
import Slide2 from './img/slide/2.jpg';
import Slide3 from './img/slide/3.jpg';
import Slide4 from './img/slide/4.jpg';
import Immagine1 from './img/pavimenti.jpg';
import Immagine2 from './img/progetto-bagno.jpg';
import Immagine3 from './img/igrandiclassici.jpg';
import Immagine4 from './img/azienda.jpg';
import Immagine5 from './img/sostenibilita.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
// import Frase from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './altro.css';

class App extends Component {
  state = {
    post: [
      { id: 0, titolo:"PAVIMENTI E RIVESTIMENTI IN LEGNO 100% MADE IN ITALY",testo:"La storia dei nostri pavimenti e rivestimenti parte da lontano, da una famiglia con radici profonde nella tradizione della lavorazione artigianale.Prodotti che sono sinonimo di bellezza: un’eccellenza fatta ricerca,progettazione,manualità e profonda conoscenza della materia prima.Un’arte che solo in Italia può avere la sua culla.",immagine:Immagine1},
      {
        id: 1, titolo: "PROGETTO BAGNO E COMPLEMENTI D'ARREDO", testo: "Nel corso degli anni abbiamo sviluppato una preziosa e costante collaborazione con un network di architetti di fama internazionale che ci ha consentito di ampliare gli orizzonti e di entrare nel mondo dell’arredamento.Progetto Bagno e la Collezione i Massivi sono parte integrante di un percorso che propone la nostra idea di casa pensata a partire dal legno.", immagine: Immagine2 },
      { id: 2, titolo: "PROGETTO I GRANDI CLASSICI", testo: "Oltre trent’anni di artigianalità e manualità hanno dato vita al Progetto i Grandi Classici.Pezzi unici di rara bellezza, pavimenti che costituiscono vere e proprie opere d’arte dei maestri del legno, materiale nobile impareggiabile in grado di abbinare elevate prestazioni a una notevole eleganza decorativa in modo naturale ed ecologico.", immagine: Immagine3 },
      { id: 3, titolo: "CHI SIAMO E DOVE SIAMO", testo: "Itlas ha la propria sede nella zona industriale di Cordignano, in provincia di Treviso. Qui, dove arrivano tronchi e tavolame, nasce da sempre il nostro prodotto e giorno dopo giorno vengono create le nostre collezioni. Qui, in un territorio compreso fra il Veneto e il Friuli Venezia Giulia e a soli quaranta chilometri da Venezia, abbiamo le nostre radici.", immagine: Immagine4 },
      { id: 4, titolo: "SOSTENIBILITÀ E VISIONE", testo: "Tutto il nostro percorso nasce dall’amore e dalla passione per la materia prima. Il legno è parte integrante del nostro stile di vita. Dire legno significa dire natura e rispetto per l’ambiente. La storia di Itlas è un costante fondersi e  confondersi con la natura: facciamo della sostenibilità un punto fermo attorno al quale ruota e si costruisce ogni  progetto.", immagine: Immagine5 },
    ]
  }
  render() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Itlas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Other</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 brightness"
            src={Slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>TAVOLE DEL PIAVE</h1>
            <h5>Speciale formato MAXI DIMENSIONI</h5>
            <a href="#ciao" className="button">Scopri la nostra promo</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 brightness"
            src={Slide2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>CONSULENZA GUIDATA</h1>
            <div className="verde">
              <h5>Arreda la tua casa con l'aiuto dei nostri Interior Designer</h5>
            </div>
            <div>
              <a href="#ciao" className="button">Prenota ora</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 brightness"
            src={Slide3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>LE RIGHE</h1>
            <h5>Boiserie</h5>

            <a href="#ciao" className="button">Scopri di piu'</a>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 brightness"
            src={Slide4}
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h1>PROGETTO BAGNO</h1>
            <h5>Collezione Linea</h5>
            <a href="#ciao" className="button">Scopri di piu'</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      <Container>
        <h1 className="dash-before frase">
          Il legno. La tua casa.
        </h1>
      </Container>    
    
        {this.state.post.map(post =>(
      <Post
        immagine={post.immagine}
        titolo={post.titolo}
        testo={post.testo}
        key={post.id}
         />
        ))}
    </>
    
  );
  }
}

export default App;
