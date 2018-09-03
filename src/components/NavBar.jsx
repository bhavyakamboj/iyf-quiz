import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,Button } from 'reactstrap';

  import {NUMBER_OF_QUESTIONS} from '../constants';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="fixed-top">
          <NavbarBrand>
                    {/* <div className="inline-block"><img src="../iyf_logo.jpg" id="logo"></img></div> */}
                    <div className="inline-block"><span style={{fontSize:"1.2em",verticalAlign: "center",textAlign: "center"}}><strong>ISKCON Youth Forum, Dwarka</strong></span></div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink hidden={this.props.timeLeft<=0}>
                  <span style={{fontSize:"1.5em",verticalAlign: "center"}}>
                        <strong>Time Left:</strong> {parseInt(this.props.timeLeft/60)} min {parseInt(this.props.timeLeft%60)} sec
                  </span>
              </NavLink>
              </NavItem>
              <NavItem>
              <NavLink hidden={this.props.timeLeft>0}>
                <span style={{fontSize:"1.5em",verticalAlign: "center"}}>
                  <strong>Score : </strong>{this.props.score}/{NUMBER_OF_QUESTIONS}
                </span>
              </NavLink>
              </NavItem>
              <NavItem>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}