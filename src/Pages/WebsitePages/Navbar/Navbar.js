import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import CompanyLogo from "../../../Assets/images/RX.png";
import { Button } from "react-bootstrap/lib";

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

class ButtonAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPositionY: 0
    };
  }

  componentDidMount() {
    return window.addEventListener("scroll", debounce(this.handleScroll, 5));
  }

  componentWillUnmount() {
    return window.removeEventListener("scroll", debounce(this.handleScroll, 5));
  }

  handleScroll = () => {
    const scrollPositionY = +window.scrollY;
    return this.setState({ scrollPositionY });
  };

  render() {
    const isScrolling = !!this.state.scrollPositionY;

    return (
      <div>
        <Navbar
          fixedTop={true}
          // className={isScrolling ? "TopHeadWhite" : "TopHead"}
          className="TopHeadWhite"
          collapseOnSelect
        >
          <div align="right" className="UpperContactBanner">
            <h6 />
          </div>
          <Navbar.Header>
            <Navbar.Brand className="BrandName">
              <a href="#/Website/HomePage">
                <img src={CompanyLogo} alt="Z2P" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {/* <NavItem eventKey={1} href="#/Website/AboutUs">
                About Us
              </NavItem> */}
              <NavItem eventKey={2} href="#">
                About Us
              </NavItem>
              <NavItem eventKey={3} href="#">
                Products
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={4} href="#">
                FAQs
              </NavItem>
              <NavItem eventKey={4} href="#">
                Careers
              </NavItem>
              <NavItem eventKey={5} href="#">
                Contact Us
              </NavItem>
              <NavItem eventKey={6} href="#/Website/ProfileForm">
                <Button bsStyle="danger">Register Now</Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default ButtonAppBar;
