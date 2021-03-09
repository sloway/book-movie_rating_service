import React from 'react';
import './Stage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Streaming extends React.Component {    
  render() {       
    return (            
      // Muted가 아니면 autoplay가 안되는 Chrome 제약이 있습니다. TV 는 다를지도....
      // 그리고 여기서는 Local mp4를 사용하게 해놨는데, 
      // 나중에는(TV에서 Multi decoder가 지원되면), 이것도 Streaming 으로 바꿔야하는데,
      // Streaming format에 따라서 단순 video tag 대신 다른 tag를 사용해야 할 수도 있습니다.
      // 혹은 TV WebAPI 중에 Player가 따로 제공 될 수도 있습니다.      
      <video autoPlay={true} muted="muted" className="streaming">
        <source src="/big-buck-bunny-360p.mp4"/>
        Your browser does not support the video tag.
      </video>                 
    );
  }
}

class VideoChat extends React.Component {  
  componentDidMount() {    
    if (navigator.mediaDevices.getUserMedia) {      
      navigator.mediaDevices.getUserMedia({ video: true })      
        .then(function (stream) {          
          let video = document.querySelector(".videoChat");
          video.srcObject = stream;
        })
        .catch(function (error) {
          console.log("Something went wrong! : " + error );
        });
    }  
  }
  render() {       
    return (        
      <video className="videoChat" autoPlay={true} ref={(ref) => {this.video = ref}}></video>        
    );
  }
}

class FanTalk extends React.Component {  
  render() {       
    return (  
      <section className="fanTalk">        
        <h3>Text chat here</h3>
      </section>              
    );
  }
}


class Stage extends React.Component {  
  constructor(props) {
    super(props);     
    // Lobby 에서 선택한 Concert의 정보입니다.
    this.concertInfo = props.location.state;
    console.log(this.concertInfo)
    this.handleKey = this.handleKey.bind(this)
  }  
  handleKey(event) {  
    switch(event.key) {
      case "ArrowLeft":        
        break;
      case "ArrowRight":        
        break;
      case "Enter":           
        break;
      case "Backspace":
        this.props.history.push({
          pathname: "/lobby"          
        });  
        break;
      default:
        console.log("Undefined key : " + event.key)        
    }
  };
  componentDidMount() {        
    document.addEventListener("keydown", this.handleKey); 
  };
  componentWillUnmount() {    
    document.removeEventListener("keydown", this.handleKey);
  };  
  render() {         
    return (
      <section className="stage">        
          <section className="title">Stage!!!</section>          
          <Streaming/>
          <VideoChat/>   
          <FanTalk/> 
      </section>
    );
  }
}

export default Stage;
