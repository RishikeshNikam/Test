import React, { Component } from "react";
import { Col, Row, Grid, Form } from "react-bootstrap";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";
import { Button } from "react-bootstrap/lib";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      email: "",
      mobile: "",
      password: "",
      cpassword: ""
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
  };

  render() {
    var Subject = this.state.Subject;

    return (
      <div>
        <div className="Contact-Main">
          <div className="Top-Banner-White" />
          <div className="Top-Banner-Gradient" />
          <div>
            <Grid>
              <Row className="show-grid">
                <Col xs={0} md={1} />
                <Col xs={12} md={10}>
                  <div className="Form-Main-Paper">
                    <h1 align="center">SignUp Now !</h1>
                    <h4 align="center">
                      Get in touch and let us know how we can help
                    </h4>
                    <br />
                    <MuiThemeProvider theme={this.getMuiTheme()}>
                      <Form className="Contact-Form">
                        <FormControl required fullWidth>
                          <TextField
                            id="fname"
                            name="fname"
                            label="Full Name"
                            type="text"
                            fullWidth
                            value={this.state.fname}
                            onChange={this.RegistrationFormData("fname")}
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                        </FormControl>

                        <FormControl required fullWidth>
                          <TextField
                            id="email"
                            name="email"
                            label="Email Id"
                            type="text"
                            fullWidth
                            value={this.state.email}
                            onChange={this.RegistrationFormData("email")}
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                        </FormControl>

                        <FormControl required fullWidth>
                          <TextField
                            id="mobile"
                            name="mobile"
                            label="Mobile"
                            type="text"
                            fullWidth
                            value={this.state.mobile}
                            onChange={this.RegistrationFormData("mobile")}
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                        </FormControl>

                        <FormControl required fullWidth>
                          <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type="text"
                            fullWidth
                            value={this.state.password}
                            onChange={this.RegistrationFormData("password")}
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                        </FormControl>

                        <FormControl required fullWidth>
                          <TextField
                            id="cpassword"
                            name="cpassword"
                            label="Confirm Password"
                            type="text"
                            fullWidth
                            value={this.state.cpassword}
                            onChange={this.RegistrationFormData("cpassword")}
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                        </FormControl>

                        <br />
                        <br />
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
                              By creating this account, you agree to our{" "}
                              <a
                                style={{ color: "#3f51b5" }}
                                target="_blank"
                                href="#"
                                rel="noopener noreferrer"
                              >
                                Terms & Conditions
                              </a>
                              &{" "}
                              <a
                                style={{ color: "#3f51b5" }}
                                target="_blank"
                                href="#"
                                rel="noopener noreferrer"
                              >
                                Privacy Policy
                              </a>
                              .
                            </Typography>
                          }
                        />
                        {this.state.disclaimerErrorText}

                        <br />
                        <br />
                        <br />
                        <br />
                        <div align="center">
                          <a href="#/Website/ProfileForm">
                            <Button width="100%" bsStyle="primary">
                              Proceed
                            </Button>
                          </a>
                        </div>
                      </Form>
                    </MuiThemeProvider>
                  </div>
                </Col>
                <Col xs={0} md={1} />
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
