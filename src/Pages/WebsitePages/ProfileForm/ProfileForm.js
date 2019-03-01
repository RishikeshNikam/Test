import React, { Component } from "react";
import { Col, Row, Grid, Form } from "react-bootstrap";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Button } from "react-bootstrap/lib";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      sectorArray: [
        { id: 1, value: "Spouce" },
        { id: 2, value: "Mother" },
        { id: 3, value: "Father" },
        { id: 4, value: "Friend" },
        { id: 5, value: "Son" },
        { id: 6, value: "Daughter" },
        { id: 7, value: "Relative" },
        { id: 8, value: "Self" }
      ],
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

  RegistrationFormData = name => event => {
    this.setState({
      [name]: event.target.value
    });
    localStorage.setItem([name], event.target.value);
  };

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
                  <div className="Form-Main-Paper">
                    <h1 align="center">Register with RxForce today !</h1>
                    <h4 align="center">
                      Please fill the following form to avail all the offers.
                    </h4>
                    <br />
                    <MuiThemeProvider theme={this.getMuiTheme()}>
                      <Form className="Profile-Form">
                        <Row className="show-grid">
                          <Col xs={6} md={4}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="RXID"
                                name="RXID"
                                label="RXID"
                                type="text"
                                value={this.state.RXID}
                                helperText={this.state.dobError}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("RXID")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={4}>
                            <FormControl required fullWidth>
                              <TextField
                                id="RXSID"
                                name="RXSID"
                                label="RXSID"
                                type="text"
                                fullWidth
                                value={this.state.RXSID}
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("RXSID")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={4}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="RegDate"
                                name="RegDate"
                                label="Registration Date"
                                type="date"
                                value={this.state.RegDate}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("RegDate")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={12} md={12}>
                            <br />
                            <h5>Personal Details</h5>
                          </Col>
                          <Col xs={6} md={4}>
                            <FormControl required fullWidth>
                              <TextField
                                id="Fname"
                                name="Fname"
                                label="First Name"
                                type="text"
                                fullWidth
                                value={this.state.Fname}
                                onChange={this.RegistrationFormData("Fname")}
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={4}>
                            <FormControl required fullWidth>
                              <TextField
                                id="Mname"
                                name="Mname"
                                label="Middle Name"
                                type="text"
                                fullWidth
                                value={this.state.Mname}
                                onChange={this.RegistrationFormData("Mname")}
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={4}>
                            <FormControl required fullWidth>
                              <TextField
                                id="Lname"
                                name="Lname"
                                label="Last Name"
                                type="text"
                                fullWidth
                                value={this.state.Lname}
                                onChange={this.RegistrationFormData("Lname")}
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={4}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="dob"
                                name="dob"
                                label="Date of Birth"
                                type="date"
                                value={this.state.dob}
                                helperText={this.state.dobError}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("dob")}
                              />
                            </FormControl>
                          </Col>

                          <Col xs={6} md={4}>
                            <FormControl margin="normal" required fullWidth>
                              <div style={{ display: "inline-flex" }}>
                                <div>
                                  <Typography
                                    variant="h6"
                                    style={{
                                      fontSize: "13px",
                                      color: "#828282",
                                      fontWeight: "bold",
                                      letterSpacing: "1px"
                                    }}
                                  >
                                    Gender
                                  </Typography>
                                </div>
                                <div>
                                  <RadioGroup
                                    style={{
                                      display: "block",
                                      marginTop: "-14px",
                                      marginLeft: "20px"
                                    }}
                                    aria-label="Gender"
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={this.RegistrationFormData(
                                      "gender"
                                    )}
                                  >
                                    <FormControlLabel
                                      value="M"
                                      control={<Radio />}
                                      label="Male"
                                    />
                                    <FormControlLabel
                                      value="F"
                                      control={<Radio />}
                                      label="Female"
                                    />
                                  </RadioGroup>
                                </div>
                              </div>
                            </FormControl>
                          </Col>
                          <Col xs={12} md={12}>
                            <br />
                            <h5>Contact Details</h5>
                          </Col>
                          <Col xs={6} md={12}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="Address"
                                name="Address"
                                label="Address"
                                type="text"
                                value={this.state.Address}
                                helperText={this.state.dobError}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("Address")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={4}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="City"
                                name="City"
                                label="City"
                                type="text"
                                value={this.state.City}
                                helperText={this.state.dobError}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("City")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={4}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="State"
                                name="State"
                                label="State"
                                type="text"
                                value={this.state.State}
                                helperText={this.state.dobError}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("State")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={4}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="Pin"
                                name="Pin"
                                label="Pin Code"
                                type="text"
                                value={this.state.Pin}
                                helperText={this.state.dobError}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("Pin")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={6}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="Mobile"
                                name="Mobile"
                                label="Mobile Number"
                                type="text"
                                value={this.state.Mobile}
                                helperText={this.state.dobError}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("Mobile")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={6}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="Email"
                                name="Email"
                                label="Email Address"
                                type="text"
                                value={this.state.Email}
                                helperText={this.state.dobError}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("Email")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={12} md={12}>
                            <br />
                            <h5>Other Details</h5>
                          </Col>
                          <Col xs={6} md={6}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="Amount"
                                name="Amount"
                                label="Amount"
                                type="text"
                                value={this.state.Amount}
                                helperText={this.state.dobError}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("Amount")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={6}>
                            <FormControl required fullWidth>
                              <TextField
                                id="Relation"
                                name="Relation"
                                select
                                label="Relation With Client"
                                value={this.state.Relation}
                                margin="normal"
                                onChange={this.RegistrationFormData("Relation")}
                                InputLabelProps={{
                                  shrink: true
                                }}
                                helperText={this.state.cityError}
                                variant="outlined"
                              >
                                {sectorArray.map(option => (
                                  <MenuItem
                                    key={option.id}
                                    value={option.value}
                                  >
                                    {option.value}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </FormControl>
                          </Col>
                          <Col xs={6} md={6}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="Pan"
                                name="Pan"
                                label="Pan Number"
                                type="text"
                                value={this.state.Pan}
                                helperText={this.state.dobError}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("Pan")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={6}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="GSTN"
                                name="GSTN"
                                label="GSTN"
                                type="text"
                                value={this.state.GSTN}
                                helperText={this.state.dobError}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("GSTN")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={12} md={12}>
                            <br />
                            <h5>Banking Details</h5>
                          </Col>
                          <Col xs={6} md={6}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="BAName"
                                name="BAName"
                                label="Bank Account Name"
                                type="text"
                                value={this.state.BAName}
                                helperText={this.state.dobError}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("BAName")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={6}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="BANum"
                                name="BANum"
                                label="Bank Account Number"
                                type="text"
                                value={this.state.BANum}
                                helperText={this.state.dobError}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("BANum")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={6}>
                            <FormControl required fullWidth>
                              <TextField
                                error={false}
                                id="UTR"
                                name="UTR"
                                label="UTR Number"
                                type="text"
                                value={this.state.UTR}
                                helperText={this.state.dobError}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                  shrink: true
                                }}
                                onChange={this.RegistrationFormData("UTR")}
                              />
                            </FormControl>
                          </Col>
                          <Col xs={6} md={12}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  id="disclaimer"
                                  name="disclaimer"
                                  checked={this.state.disclaimer}
                                  // onChange={this.RegistrationFormData("disclaimer")}
                                  value="disclaimer"
                                  color="primary"
                                />
                              }
                              label={
                                <Typography variant="caption">
                                  By accepting this, you agree to receive call
                                  and sms from us .
                                </Typography>
                              }
                            />
                            {this.state.disclaimerErrorText}
                          </Col>

                          <Col align="center" xs={6} md={12}>
                            <a href="#/Website/PrintForm">
                              <Button width="100%" bsStyle="primary">
                                Register
                              </Button>
                            </a>
                          </Col>
                        </Row>
                      </Form>
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
