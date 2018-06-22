import React from 'react';
import {
  Form,
  TextArea,
  Button,
  Segment,
  List,
  Image,
  Card,
  Grid,
  Modal,
  Header,
  Input,
  Icon
} from 'semantic-ui-react'

import {HashRouter, Route, Link} from 'react-router-dom';

export default class ChatComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      listComponent: '',
      resultComponent: '',
      modalOpen:false,
      bookModal:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSend(e) {
    console.log(typeof this.state.text);
    var list = (<List.Item>
      <Image avatar="avatar" src='https://semantic-ui.com/images/avatar/large/helen.jpg'/>
      <List.Content>
        <List.Header as='a'>Claire</List.Header>
        <List.Description>{this.state.text}</List.Description>
      </List.Content>
    </List.Item>);
    if(this.state.text.includes('mexican')||this.state.text.includes('Mexican')){
      console.log("inside res");
    var card = (<Grid>
      <Grid.Row>
        <Grid.Column>
          <center style={{marginTop:"10px",marginBottom:'10px'}}><span as='h4' className="subheaders">Your results are here</span></center>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={14}>
          <Card.Group>
            <Card style= {{backgroundColor: '#A19FA4'}} fluid>
              <Card.Content>
                <Image floated='right' size='mini' src='https://lh4.googleusercontent.com/-NSRYEqt87dY/VJSPYU3peQI/AAAAAAAAACE/wEoWI3QZZYUgqxaPy_-rFHyfZhzAS62jACLIBGAYYCw/w99-h99-n-k-no/'/>
                <Card.Header>
                  Riviera Maya Mexican Restaurant
                </Card.Header>
                <Card.Meta>
                  Mexican favorites & margaritas served in an upbeat atmosphere with vibrant decor & mariachi music.
                </Card.Meta>
                <Card.Description>
                  4041 E Thomas Rd #124, Phoenix, AZ 85018, USA
                </Card.Description>
              </Card.Content>
              <Card.Content extra="extra">
                {/* <div className='ui two buttons'> */}
                  <Button as={Link} to={'/carBooking'} basic="basic" color='black'><Icon name="taxi" />Book a cab</Button>
                  <Button basic="basic" style={{float:'right'}} color='black' onClick={()=>{this.setState({modalOpen:true})}}><Icon name="spoon" />Book a table</Button>
                {/* </div> */}
              </Card.Content>
            </Card>


            <Card style={{backgroundColor: '#A19FA4'}} fluid>
              <Card.Content>
                <Image floated='right' size='mini' src='https://lh6.googleusercontent.com/-Dduik98e3t8/WaWbAcSbZ4I/AAAAAAABxOg/gBZWrWoggsoAyptjDPMJztMrKMfs2cW-wCLIBGAYYCw/w99-h99-n-k-no/'/>
                <Card.Header>
                  Lupe Tortilla
                </Card.Header>
                <Card.Meta>
                Regional Tex-Mex chain known for its homemade tortillas & variety of margaritas.
                </Card.Meta>
                <Card.Description>
                  6035 N 7th St, Phoenix, AZ 85014, USA
                </Card.Description>
              </Card.Content>
              <Card.Content extra="extra">
                {/* <div className='ui two buttons'> */}
                  <Button as={Link} to={'/carBooking'} basic="basic" color='black'><Icon name="taxi" />Book a cab</Button>
                  <Button basic="basic"  style={{float:'right'}} color='black' onClick={()=>{this.setState({modalOpen:true})}}><Icon name="spoon" />Book a table</Button>
                {/* </div> */}
              </Card.Content>
            </Card>


            <Card style={{backgroundColor: '#A19FA4'}} fluid>
              <Card.Content>
                <Image floated='right' size='mini' src='https://lh3.googleusercontent.com/-Q4_3fy5BEcw/WaxRtP8MerI/AAAAAAAJGtc/JQJ_MDDvNywJuNjON-ldpeu3sDFgsRXlACLIBGAYYCw/w99-h99-n-k-no/'/>
                <Card.Header>
                  Perlita's Authentic Mexican
                </Card.Header>
                <Card.Meta>
                  Tortas, burritos & other traditional specialties served in a no-nonsense diner with simple decor.
                </Card.Meta>
                <Card.Description>
                  1919 N 16th St, Phoenix, AZ 85006, USA
                </Card.Description>
              </Card.Content>
              <Card.Content extra="extra">
                {/* <div className='ui two buttons'> */}
                <Button as={Link} to={'/carBooking'} basic="basic" color='black'><Icon name="taxi" />Book a cab</Button>
                <Button basic="basic"  style={{float:'right'}} color='black' onClick={()=>{this.setState({modalOpen:true})}}><Icon name="spoon" />Book a table</Button>
                {/* </div> */}
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
        </Grid.Row>
        </Grid>
        )}
        else{
          console.log("inside else");
          var card = (<Grid>
            <Grid.Row>
              <Grid.Column>
                <center style={{marginTop:"10px",marginBottom:'10px'}}><span as='h4' className="subheaders">Events happening around you</span></center>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={1}></Grid.Column>
              <Grid.Column width={14}>
                <Card.Group>
                  <Card style= {{backgroundColor: '#A19FA4'}} fluid>
                    <Card.Content>
                      <Image floated='right' size='mini' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Live_Tyler.jpg/220px-Live_Tyler.jpg'/>
                      <Card.Header>
                        Dieudonné ‑ L'émancipation
                      </Card.Header>
                      <Card.Meta>
                          From Montenotte to Montmartre in PARIS, stylist and jazz singer, LIV MONAGHAN’s weekend revolves around her passion for vintage fashion and music
                      </Card.Meta>
                      <Card.Description>
                       172 boulevard Saint Germain, 75006 Paris, France (Saint-Germain-des-Prés)
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra="extra">
                      {/* <div className='ui two buttons'> */}
                      <center>
                        <Button as={Link} to={'/carBooking'} basic="basic" color='black'><Icon name="taxi" />Book a cab</Button>
                        </center>
                      {/* </div> */}
                    </Card.Content>
                  </Card>


                  <Card style={{backgroundColor: '#A19FA4'}} fluid>
                    <Card.Content>
                      <Image floated='right' size='mini' src='data:image/jpeg;base64,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'/>
                      <Card.Header>
                        Solo Tango
                      </Card.Header>
                      <Card.Meta>
                        In 1996 Natalia and Alberto created their tango school 'Solo Tango', and since then have entertained, inspired and shared their love of Tango with people
                      </Card.Meta>
                      <Card.Description>
                        13 rue des Beaux Arts, 75006 Paris, France
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra="extra">
                      {/* <div className='ui two buttons'> */}
                      <center>
                        <Button as={Link} to={'/carBooking'} basic="basic" color='black'><Icon name="taxi" />Book a cab</Button>
                        </center>
                      {/* </div> */}
                    </Card.Content>
                  </Card>


                  <Card style={{backgroundColor: '#A19FA4'}} fluid>
                    <Card.Content>
                      <Image floated='right' size='mini' src='data:image/jpeg;base64,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'/>
                      <Card.Header>
                        Liv monaghan
                      </Card.Header>
                      <Card.Meta>
                        From Montenotte to Montmartre in PARIS, stylist and jazz singer, LIV MONAGHAN’s weekend revolves around her passion for vintage fashion and music
                      </Card.Meta>
                      <Card.Description>
                        24 rue de la Tour D Auvergne, 75009 Paris, France
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra="extra">
                      {/* <div className='ui two buttons'> */}
                      <center>
                      <Button as={Link} to={'/carBooking'} basic="basic" color='black'><Icon name="taxi" />Book a cab</Button>
                      </center>
                      {/* </div> */}
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Grid.Column>
              <Grid.Column width={1}></Grid.Column>
              </Grid.Row>
              </Grid>
              )
        }
         this.setState({
          listComponent: list,
          resultComponent: card
        }); }


      render() {
          return (

            <div>

            <Grid>
              <Grid.Row>
              <Grid.Column width={1}>
              </Grid.Column>

              <Grid.Column width={14}>
                <Form>
                  <TextArea placeholder='Ask me anything about restaurant or places around' style={{
                      minHeight: 100,
                      marginBottom: '10px',
                      borderColor:'#800000',
                      opacity:'0.6'
                    }} onChange={this.handleChange}/>
                </Form>
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={1}/>
                <Grid.Column width={14}>
                  <Button inverted="inverted" style={{
                    float:'right'
                    }} floated='right' onClick={this.handleSend}>
                    Send
                  </Button>
                </Grid.Column>
                <Grid.Column width={1}/>
              </Grid.Row>
              <Grid.Row>
              {/* <Grid.Column width={1}> */}
              {/* </Grid.Column> */}

              <Grid.Column width={16}>
                {/* <Segment style={{
                    minHeight: 200,
                    borderColor:'#800000',
                    opacity:'1.0'
                  }}> */}
                  {this.state.resultComponent}
                {/* </Segment> */}

              </Grid.Column>
            </Grid.Row>
          </Grid>

              {/* <Grid.Column width={1}> */}
              {/* </Grid.Column> */}
              <Modal open={this.state.modalOpen} basic size='small'>
    <Header icon='spoon' content='Book a table' />
    <Modal.Content>
      <span className="subheaders">Enter No of Seaters</span><br/><br/>
      <Input fluid placeholder='Seaters' style={{opacity:0.6}}/>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted onClick={()=>{this.setState({modalOpen:false})}}>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted onClick={()=>{this.setState({modalOpen:false,bookModal:true})}}>
        <Icon name='checkmark' /> Book
      </Button>
    </Modal.Actions>
  </Modal>
  <Modal open={this.state.bookModal} basic size='small'>
<Header icon='spoon' content='Book a table' />
<Modal.Content>
<span className="subheaders">Booking Confirmed</span><br/><br/>
</Modal.Content>
<Modal.Actions>
<Button color='green' inverted onClick={()=>{this.setState({bookModal:false})}}>
<Icon name='checkmark' /> Done
</Button>
</Modal.Actions>
</Modal>
          </div>);
        }
        }
