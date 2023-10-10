import React from 'react';
import Card from 'react-bootstrap/Card';


// style online
const Player = (props) => {
    console.log(props);
    const cardStyle = {
      width: "17rem",
      margin: "1px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      marginBottom : "10px",
     
    
    };
    const imageStyle = {
      width:'270px' ,
      // height:'200px'
    };
    
    return (
        <div className='opp'>

<Card style={cardStyle}>
      <Card.Img variant="top" src={props.joueurs.image}  style={imageStyle}/>
      <Card.Body>
        <Card.Title>{props.joueurs.name}</Card.Title>
        <Card.Text>
        <p><strong>Team:</strong> {props.joueurs.team}</p>
        <p><strong>Nationality:</strong> {props.joueurs.nationality}</p>
        <p><strong>Number:</strong> {props.joueurs.jerseyNumber}</p>
        <p><strong>Age:</strong> {props.joueurs.age}</p>

        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

        
    
        </div>
        
    );
};
// defaultProps
Player.defaultProps = {
  joueurs: {
      image: 'https://i.pinimg.com/474x/74/55/40/745540e98d5f177c147e0e7ca8be4334.jpg',
      name: 'no',
      team: 'no',
      nationality: 'neant',
      jerseyNumber: 'neant',
      age: 'neant',
  }
};

export default Player;
