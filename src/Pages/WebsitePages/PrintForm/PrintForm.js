import React, { Component } from "react";
import { Col, Row, Grid, Form, Table } from "react-bootstrap";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import RXLogo from "../../../Assets/images/RX.png";
import { Button } from "react-bootstrap/lib";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      RXID: "",
      RXSID: "",
      RegDate: "",
      Fname: "",
      Mname: "",
      Lname: "",
      dob: "",
      gender: "",
      Address: "",
      City: "",
      State: "",
      Pin: "",
      Mobile: "",
      Email: "",
      Amount: "",
      Relation: "",
      Pan: "",
      GSTN: "",
      BAName: "",
      BANum: "",
      UTR: ""
    };
    this.PrintForm = this.PrintForm.bind(this);
  }

  componentDidMount() {
    this.setState({
      RXID: localStorage.getItem("RXID"),
      RXSID: localStorage.getItem("RXSID"),
      RegDate: localStorage.getItem("RegDate"),
      Fname: localStorage.getItem("Fname"),
      Mname: localStorage.getItem("Mname"),
      Lname: localStorage.getItem("Lname"),
      dob: localStorage.getItem("dob"),
      gender: localStorage.getItem("gender"),
      Address: localStorage.getItem("Address"),
      City: localStorage.getItem("City"),
      State: localStorage.getItem("State"),
      Pin: localStorage.getItem("Pin"),
      Mobile: localStorage.getItem("Mobile"),
      Email: localStorage.getItem("Email"),
      Amount: localStorage.getItem("Amount"),
      Relation: localStorage.getItem("Relation"),
      Pan: localStorage.getItem("Pan"),
      GSTN: localStorage.getItem("GSTN"),
      BAName: localStorage.getItem("BAName"),
      BANum: localStorage.getItem("BANum"),
      UTR: localStorage.getItem("UTR")
    });
  }

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiOutlinedInput: {
          root: { fontSize: "15px" },
          focused: {
            notchedOutline: {
              borderColor: "#F46523 !important"
            }
          }
        },
        MuiMenuItem: {
          root: { fontSize: "15px" }
        },
        MuiInputLabel: {
          outlined: {
            transform: "translate(14px, 14px) scale(1)"
          }
        },
        MuiTypography: {
          body2: { color: "#828282", fontWeight: "bold" }
        },
        MuiSvgIcon: {
          root: {
            width: "15px"
          }
        }
      }
    });

  PrintForm() {
    var divElements = document.getElementById("PrintFormDiv").innerHTML;
    var oldPage = document.body.innerHTML;

    document.body.innerHTML =
      "<html><head><title></title></head><body>" + divElements + "</body>";

    window.print();

    document.body.innerHTML = oldPage;
  }

  render() {
    var sectorArray = this.state.sectorArray;
    return (
      <div>
        <div className="Profile-Main">
          <div className="Top-Banner-White" />
          <div>
            <Grid>
              <Row className="show-grid">
                <Col xs={12} md={12}>
                  <div align="right">
                    <Button
                      onClick={this.PrintForm}
                      width="100%"
                      bsStyle="primary"
                    >
                      <FontAwesomeIcon icon={faPrint} /> Print Form
                    </Button>
                  </div>
                  <div
                    id="PrintFormDiv"
                    align="center"
                    className="Form-Main-Paper"
                  >
                    <img width="150px" src={RXLogo} />
                    <h1 align="center">RxForce Customer Registration Form</h1>
                    <h4 align="center" />
                    <br />
                    <MuiThemeProvider theme={this.getMuiTheme()}>
                      <div>
                        <Table striped bordered hover>
                          <tr>
                            <td>
                              <h4>RXID</h4>
                            </td>
                            <td>
                              <h4>{this.state.RXID}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>RXSID</h4>
                            </td>
                            <td>
                              <h4>{this.state.RXSID}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Registration Date</h4>
                            </td>
                            <td>
                              <h4>{this.state.RegDate}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Full Name</h4>
                            </td>
                            <td>
                              <h4>
                                {this.state.Fname} {this.state.Mname}{" "}
                                {this.state.Lname}
                              </h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Date of Birth</h4>
                            </td>
                            <td>
                              <h4>{this.state.dob}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Gender</h4>
                            </td>
                            <td>
                              <h4>{this.state.gender}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Address</h4>
                            </td>
                            <td>
                              <h4>{this.state.Address}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>City</h4>
                            </td>
                            <td>
                              <h4>{this.state.City}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>State</h4>
                            </td>
                            <td>
                              <h4>{this.state.State}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Pin Code</h4>
                            </td>
                            <td>
                              <h4>{this.state.Pin}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Mobile Number</h4>
                            </td>
                            <td>
                              <h4>{this.state.Mobile}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Email Address</h4>
                            </td>
                            <td>
                              <h4>{this.state.Email}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Amount Paid</h4>
                            </td>
                            <td>
                              <h4>Rs. {this.state.Amount} /-</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Relation With Client</h4>
                            </td>
                            <td>
                              <h4>{this.state.Relation}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Pan Card Number</h4>
                            </td>
                            <td>
                              <h4>{this.state.Pan}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>GSTN</h4>
                            </td>
                            <td>
                              <h4>{this.state.GSTN}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Bank Account Name</h4>
                            </td>
                            <td>
                              <h4>{this.state.BAName}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Bank Account Number</h4>
                            </td>
                            <td>
                              <h4>{this.state.BANum}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>UTR Number</h4>
                            </td>
                            <td>
                              <h4>{this.state.UTR}</h4>
                            </td>
                          </tr>
                        </Table>
                      </div>
                    </MuiThemeProvider>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
