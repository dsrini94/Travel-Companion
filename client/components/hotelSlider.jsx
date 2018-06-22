import React from 'react';
import Slider from 'react-slick';
import {Card, Image,Grid} from 'semantic-ui-react';
export default class HotelSlider extends React.Component
{

  constructor() {
  super();
  this.state={
    selectedValue:'',
    var:''
  };
}
  cardClick(p){
    this.setState({var:p});
    this.props.cardClick(p);
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
    <Card style={{width:'85%',boxShadow:'none',border:'none'}} onClick={this.cardClick.bind(this,"Starwood Hotel")}>
      <Image src=' http://www.travelweekly.com/uploadedImages/All_TW_Art/2015/090715/T0907GREATNORTHERN.jpg' />
      <Card.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column>
        <span className="subheaders" style={{color:"black",fontSize:"15px",fontWeight:'bold'}}>
          Starwood Hotel
          </span>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column style={{marginTop:'-20px'}}>
          <span className="subheaders" style={{color:"black",fontSize:"13px"}}>
            0.2 miles from City Center
            </span>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column style={{marginTop:'-25px'}}>
              <span className="subheaders" style={{color:"black",fontSize:"13px"}}>
                $95/night
                </span>
              </Grid.Column>
            </Grid.Row>
            </Grid>
      </Card.Content>
    </Card>
    </div>

    <div>
    <Card style={{width:'85%',boxShadow:'none',border:'none'}} onClick={this.cardClick.bind(this,"Hilton Hotel")}>
      <Image src='https://www.telegraph.co.uk/content/dam/business/2017/08/10/TELEMMGLPICT000136723018_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwYDpM1iOj7her_R_5PUySDU.jpeg?imwidth=450' />
      <Card.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
          <span className="subheaders" style={{color:"black",fontSize:"15px",fontWeight:'bold'}}>
            Hilton Hotel
            </span>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column style={{marginTop:'-20px'}}>
            <span className="subheaders" style={{color:"black",fontSize:"13px"}}>
              1.1 miles from City Center
              </span>
              </Grid.Column>
              </Grid.Row>
              <Grid.Row>
              <Grid.Column style={{marginTop:'-25px'}}>
                <span className="subheaders" style={{color:"black",fontSize:"13px"}}>
                  $115/night
                  </span>
                </Grid.Column>
              </Grid.Row>
              </Grid>
      </Card.Content>
    </Card>
    </div>

    <div>
    <Card style={{width:'85%',boxShadow:'none',border:'none'}} onClick={this.cardClick.bind(this,"Marriott Hotel")}>
      <Image src='../../client/assets/images/hotel3.jpeg' />
      <Card.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
          <span className="subheaders" style={{color:"black",fontSize:"15px",fontWeight:'bold'}}>
            Marriott Hotel
            </span>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column style={{marginTop:'-20px'}}>
            <span className="subheaders" style={{color:"black",fontSize:"13px"}}>
              2.5 miles from City Center
              </span>
              </Grid.Column>
              </Grid.Row>
              <Grid.Row>
              <Grid.Column style={{marginTop:'-25px'}}>
                <span className="subheaders" style={{color:"black",fontSize:"13px"}}>
                  $80/night
                  </span>
                </Grid.Column>
              </Grid.Row>
              </Grid>
      </Card.Content>
    </Card>
    </div>

    <div>
    <Card style={{width:'85%',boxShadow:'none',border:'none'}} onClick={this.cardClick.bind(this,"InterContinental Hotel")}>
      <Image src='http://www.placementoffice.nl/_images_upload/hotels_U5Bwwy3IOECUwVp9_IHG.jpg' />
      <Card.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
          <span className="subheaders" style={{color:"black",fontSize:"15px",fontWeight:'bold'}}>
            InterContinental Hotel
            </span>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column style={{marginTop:'-20px'}}>
            <span className="subheaders" style={{color:"black",fontSize:"13px"}}>
              3.0 miles from City Center
              </span>
              </Grid.Column>
              </Grid.Row>
              <Grid.Row>
              <Grid.Column style={{marginTop:'-25px'}}>
                <span className="subheaders" style={{color:"black",fontSize:"13px"}}>
                  $120/night
                  </span>
                </Grid.Column>
              </Grid.Row>
              </Grid>
      </Card.Content>
    </Card>
    </div>

    </Slider>
    </div>
  );
}

}
