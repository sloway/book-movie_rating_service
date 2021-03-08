import React from 'react';
import './Lobby.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

class ConcertBanner extends React.Component {  
  render() {   
    const { concert } = this.props         
    return (  
      <section className="concertListItem" >        
        <img src={concert.poster} alt={concert.title}/>        
        <section className="caption">
          <h2>{concert.title}</h2><h3>by</h3><h2>{concert.artist}</h2>
        </section>        
      </section>              
    );
  }
}

class Lobby extends React.Component {  
  constructor(props) {
    console.log("const")
    super(props);
    this.state = {
      isLoading: true,
      concertList: []            
    };
    this.currentIndex = 0;        
    this.handleKey = this.handleKey.bind(this)
  }  
  getConcerts() {   
    let concertList = [
      { id: "cct1001", title: "Map Of The Soul Tour", artist:"BTS", poster: '/concert/bts.jpeg' },
      { id: "cct1002", title: "In Your Area World Tour", artist:"BLACKPINK", poster: '/concert/blackpink.jpeg' },
      { id: "cct1003", title: "Sweetener World Tour", artist:"Ariana Grander", poster: '/concert/ariana_grande.jpeg'}      
    ]    
    /*
     TODO : Get concert list from server and assign to conertList
     Http request modules are XMLHttpRequest, Fetch, Axios, Jquery.get or post, ...
    */
    this.setState({ concertList, isLoading: false });
  };
  handleKey(event) {  
    switch(event.key) {
      case "ArrowLeft":
        this.carousel.prev();        
        break;
      case "ArrowRight":
        this.carousel.next();        
        break;
      case "Enter":   
        // I could not find method of carousel that returns current index
        // So I saved current index at every onSelect event and use here         
        console.log(this.currentIndex)
        this.props.history.push({
          pathname: "/about"          
        });        
        break;
      default:
        console.log("Undefined key : " + event.key)        
    }
  };
  componentDidMount() {    
    this.getConcerts();    
    document.addEventListener("keydown", this.handleKey); 
  };
  componentWillUnmount() {    
    document.removeEventListener("keydown", this.handleKey);
  };  
  onSelect(selectedIndex, e) {
    this.currentIndex = selectedIndex;
  };
  render() {         
    const { isLoading, concertList} = this.state;    

    return (      
      <section className="container-fluid">
        <section className="title">Enjoy your favorite artist at Home!!!</section>        
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="concertList">
            <Carousel ref={(ref) => {this.carousel = ref}} id="concertList" onSelect={this.onSelect.bind(this)}>            
            {concertList.map((concert) => {                          
              return (                  
                <Carousel.Item key={concert.id}>
                  <ConcertBanner concert={concert}/>                  
                </Carousel.Item>
              );
            })}
            </Carousel>
          </div>
       )}       
      </section>
    );
  }
}

export default Lobby;
