import React from 'react'
import Slider from 'react-slick';
import {
  Card,Image,Header
} from 'semantic-ui-react';
export default class CarSlider extends React.Component
{

  constructor(props) {
  super(props);
}

  handleCabSelect(value)
  {
    this.props.handleCabSelect(value);
  }
  render() {
  var settings = {
    infinite:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <div>
    <Slider {...settings}>
      <div>
      <Card style={{width:'85%',boxShadow:'none',border:'none'}}  onClick={this.handleCabSelect.bind(this,"Hertz Cars")}>
        <Image   src='https://pbs.twimg.com/media/C4E_9uYXUAQ43Sd.jpg'/>
        <Card.Content>
            <span className="subheaders" style={{color:"black",fontSize:"15px"}}>Hertz Cars</span>
        </Card.Content>
      </Card>
      </div>

      <div>
      <Card style={{width:'85%',boxShadow:'none',border:'none'}} >
        <Image  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaRUo9py1J-1SPv7FBf5sKAWD2zbNNI4Mpk1nNqSkccp5bXCm' onClick={this.handleCabSelect.bind(this,"Sixt Rent a Car")}/>
        <Card.Content>
            <span className="subheaders" style={{color:"black",fontSize:"15px"}}>Sixt Rent a Car</span>
        </Card.Content>
      </Card>
      </div>
      <div>
      <Card style={{width:'85%',boxShadow:'none',border:'none'}} >
        <Image  style={{margin:'3px'}} src='https://res.cloudinary.com/simpleview/image/upload/crm/reddirt/avis-images-a4d82bac5056b3a_a4d82fc5-5056-b3a8-49aa9076c347ecef.jpg' onClick={this.handleCabSelect.bind(this,"Avis")}/>
        <Card.Content>
            <span className="subheaders" style={{color:"black",fontSize:"15px"}}>Avis</span>
        </Card.Content>
      </Card>
      </div>
      <div>
        <Card style={{width:'85%',boxShadow:'none',border:'none'}} >
          <Image  src='https://cdn-static.boursier.com/illustrations/logos/l_europcarlogo.jpg' onClick={this.handleCabSelect.bind(this,"Europcar")}/>
          <Card.Content>
              <span className="subheaders" style={{color:"black",fontSize:"15px"}}>Europcar</span>
          </Card.Content>
        </Card>
      </div>
    </Slider>
    </div>
  );
}

}
