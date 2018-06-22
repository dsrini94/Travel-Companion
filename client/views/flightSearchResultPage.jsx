import React from 'react';
import Appbar from './../components/appbar.jsx';
import FlightSearchResultCards from './../components/flightSearchResultCards.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import HeaderComponent from './../components/header.jsx';

import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Icon,
  Header,
  Dropdown,
  Card,
  Grid,
  Divider
} from 'semantic-ui-react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class FlightSearchResultPage extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content'
    }
  }

  handleSiderbarVisiblity() {
    if (this.state.sidebarVisiblity) {
      this.setState({
        sidebarVisiblity: !this.state.sidebarVisiblity
      });
      this.setState({toggleIcon: 'content'});
    } else {
      this.setState({
        sidebarVisiblity: !this.state.sidebarVisiblity
      });
      this.setState({toggleIcon: 'remove'});
    }
  }
  render() {
    // console.log(new Date(this.props.match.params.onwardDate).toDateString());
    return (<div >
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} vertical icon='labeled' style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
          <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher >
            <div className="imgHeight vhsidebar" style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
              <Appbar toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
              <center>
              <span className="subheaders" style={{fontSize:"20px"}}>Onward Flights</span>
              </center>
              <br/>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={1}></Grid.Column>
                  <Grid.Column width={14}>
                    <FlightSearchResultCards from='LHR' to ='CDG' fromDetail='London Heathrow Airport' toDetail='Paris Charles de Gaulle Airport' value='1' seatNo="15F" time1={"Mon Jul 09 2018 17:50"} time2={"12:55 PM "+new Date(parseInt(this.props.match.params.onwardDate2)).toDateString()} time1v={this.props.match.params.onwardDate1} time2v={this.props.match.params.onwardDate2} flightNo='XX301'/>
                    <FlightSearchResultCards from='LHR' to ='CDG' fromDetail='London Heathrow Airport' toDetail='Paris Charles de Gaulle Airport' value='1' seatNo="15F" time1={"Mon Jul 09 2018 17:50"} time2={"12:55 PM "+new Date(parseInt(this.props.match.params.onwardDate2)).toDateString()} time1v={this.props.match.params.onwardDate1} time2v={this.props.match.params.onwardDate2} flightNo='XX301'/>
                    <FlightSearchResultCards from='LHR' to ='CDG' fromDetail='London Heathrow Airport' toDetail='Paris Charles de Gaulle Airport' value='1' seatNo="15F" time1={"Mon Jul 09 2018 17:50"} time2={"12:55 PM "+new Date(parseInt(this.props.match.params.onwardDate2)).toDateString()} time1v={this.props.match.params.onwardDate1} time2v={this.props.match.params.onwardDate2} flightNo='XX301'/>
                    <FlightSearchResultCards from='LHR' to ='CDG' fromDetail='London Heathrow Airport' toDetail='Paris Charles de Gaulle Airport' value='1' seatNo="15F" time1={"Mon Jul 09 2018 17:50"} time2={"12:55 PM "+new Date(parseInt(this.props.match.params.onwardDate2)).toDateString()} time1v={this.props.match.params.onwardDate1} time2v={this.props.match.params.onwardDate2} flightNo='XX301'/>
                    <FlightSearchResultCards from='LHR' to ='CDG' fromDetail='London Heathrow Airport' toDetail='Paris Charles de Gaulle Airport' value='1' seatNo="15F" time1={"Mon Jul 09 2018 17:50"} time2={"12:55 PM "+new Date(parseInt(this.props.match.params.onwardDate2)).toDateString()} time1v={this.props.match.params.onwardDate1} time2v={this.props.match.params.onwardDate2} flightNo='XX301'/>
                  </Grid.Column>
                  <Grid.Column width={1}></Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>);
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}


export default connect(mapStateToProps, null)(FlightSearchResultPage);
