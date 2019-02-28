import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import FreshChat from "react-freshchat";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import OtpInput from "react-otp-input";
import FormHelperText from "@material-ui/core/FormHelperText";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Auth from "../../../Auth/auth";
import "./Login.css";
import { VerifyMobileNumber } from "../../../API/CommonApi";
import { GetOTP } from "../../../API/CommonApi";
import { GetOTPNewUser } from "../../../API/CommonApi";
import { RegisterUser } from "../../../API/CommonApi";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import deburr from "lodash/deburr";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import { cities } from "./city";

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      label="City"
      InputLabelProps={{
        shrink: true
      }}
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : cities.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

const styles = theme => ({
  checking: {
    "&:focus": {
      color: "red"
    }
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    width: "50%"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1000,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  }
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      MobileNumber: "0",
      otp: "",
      otpError: "",
      color: "",
      MobileNumberErr: "",
      isError: false,
      isNewUser: false,
      shown1: true,
      shown2: false,
      shown3: false,
      loggedIn: false,
      isLoading: false,
      btnDisabled: true,
      currencies: [],
      fname: "",
      fnameErrorText: "",
      fnameValid: false,
      fnameError: false,
      lname: "",
      lnameErrorText: "",
      lnameValid: false,
      lnameError: false,
      email: "",
      emailErrorText: "",
      emailValid: false,
      emailError: false,
      gender: "",
      genderErrorText: "",
      genderValid: false,
      genderError: false,
      city: "",
      cityErrorText: "",
      cityValid: false,
      cityError: false,
      dob: "",
      dobErrorText: "",
      dobValid: false,
      dobError: false,
      disclaimer: false,
      disclaimerErrorText: "",
      disclaimerValid: false,
      disclaimerError: false,
      single: "",
      suggestions: []
    };
    this.Form1 = this.Form1.bind(this);
    this.Form2 = this.Form2.bind(this);
    this.Form3 = this.Form3.bind(this);
  }

  Form1(event) {
    event.preventDefault();
    this.SendOTP();
  }

  Form2(event) {
    event.preventDefault();
    this.validateOTP();
  }

  Form3(event) {
    event.preventDefault();
    this.SubmitRegistrationForm();
  }

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiOutlinedInput: {
          input: {
            padding: "12.5px 14px"
          },
          focused: {
            notchedOutline: {
              borderColor: "#F46523 !important"
            }
          }
        },
        MuiInputLabel: {
          outlined: {
            transform: "translate(14px, 14px) scale(1)"
          }
        },
        MuiTypography: {
          body2: { color: "#828282", fontWeight: "bold" }
        },
        MuiFormLabel: {
          root: {
            color: "#828282",
            fontWeight: "bold",
            letterSpacing: "1px"
          }
        },
        MuiSvgIcon: {
          root: {
            width: "15px"
          }
        }
      }
    });

  //Handle Registration form below
  RegistrationFormData = name => event => {
    this.setState({
      disclaimerErrorText: ""
    });
    //First name validation start
    if (name === "fname") {
      if (/^[A-Za-z\s]+$/.test(event.target.value)) {
        this.setState({
          [name]: event.target.value,
          fnameErrorText: "",
          fnameValid: true,
          fnameError: false
        });
      } else if (event.target.value === "") {
        this.setState({
          [name]: event.target.value,
          fnameErrorText: (
            <span className="ErrorText">First name cannot be empty</span>
          ),
          fnameValid: false,
          fnameError: true
        });
      } else {
        this.setState({
          [name]: event.target.value,
          fnameErrorText: (
            <span className="ErrorText">
              First name should only have characters
            </span>
          ),
          fnameValid: false,
          fnameError: true
        });
      }
    }
    //First name validation end

    //Last name validation start
    if (name === "lname") {
      if (/^[A-Za-z\s]+$/.test(event.target.value)) {
        this.setState({
          [name]: event.target.value,
          lnameErrorText: "",
          lnameValid: true,
          lnameError: false
        });
      } else if (event.target.value === "") {
        this.setState({
          [name]: event.target.value,
          lnameErrorText: (
            <span className="ErrorText">Last name cannot be empty</span>
          ),
          lnameValid: false,
          lnameError: true
        });
      } else {
        this.setState({
          [name]: event.target.value,
          lnameErrorText: (
            <span className="ErrorText">
              Last name should only have characters
            </span>
          ),
          lnameValid: false,
          lnameError: true
        });
      }
    }
    //Last name validation end

    //Email validation start
    if (name === "email") {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/.test(
          event.target.value
        )
      ) {
        this.setState({
          [name]: event.target.value,
          emailErrorText: "",
          emailValid: true,
          emailError: false
        });
      } else if (event.target.value === "") {
        this.setState({
          [name]: event.target.value,
          emailErrorText: (
            <span className="ErrorText">Email cannot be empty</span>
          ),
          emailValid: false,
          emailError: true
        });
      } else {
        this.setState({
          [name]: event.target.value,
          emailErrorText: (
            <span className="ErrorText">
              You have entered an invalid email address
            </span>
          ),
          emailValid: false,
          emailError: true
        });
      }
    }
    //Email validation end

    //Gender validation start
    if (name === "gender") {
      this.setState({
        [name]: event.target.value,
        genderErrorText: "",
        genderValid: true,
        genderError: false
      });
    }
    //Gender validation start

    //City validation start
    if (name === "city") {
      this.setState({
        [name]: event.target.value,
        cityErrorText: "",
        cityValid: true,
        cityError: false
      });
    }
    //City validation start

    //DOB validation start
    if (name === "dob") {
      this.setState({
        [name]: event.target.value,
        dobErrorText: "",
        dobValid: true,
        dobError: false
      });
    }
    //DOB validation start

    //Discliamer validation start
    if (name === "disclaimer") {
      if (event.target.checked) {
        this.setState({
          [name]: event.target.checked,
          disclaimerErrorText: "",
          disclaimerValid: true,
          disclaimerError: false
        });
      } else if (!event.target.checked) {
        this.setState({
          [name]: event.target.checked,
          disclaimerErrorText: (
            <p className="ErrorText" style={{ fontWeight: "0.75rem" }}>
              Please accept the Terms & Conditions and Privacy Policy
            </p>
          ),
          disclaimerValid: false,
          disclaimerError: true
        });
      }
    }
    //Discliamer validation start
  };
  //End

  SubmitRegistrationForm() {
    if (!this.state.fnameValid) {
      this.setState({
        fnameErrorText: (
          <span className="ErrorText">Please check your first name</span>
        ),
        fnameValid: false,
        fnameError: true
      });
    } else if (!this.state.lnameValid) {
      this.setState({
        lnameErrorText: (
          <span className="ErrorText">Please check your last name</span>
        ),
        lnameValid: false,
        lnameError: true
      });
    } else if (!this.state.emailValid) {
      this.setState({
        emailErrorText: (
          <span className="ErrorText">Please check your email</span>
        ),
        emailValid: false,
        emailError: true
      });
    } else if (!this.state.genderValid) {
      this.setState({
        genderErrorText: (
          <span className="ErrorText">Please select gender</span>
        ),
        genderValid: false,
        genderError: true
      });
    } else if (!this.state.cityValid) {
      this.setState({
        cityErrorText: <span className="ErrorText">Please select city</span>,
        cityValid: false,
        cityError: true
      });
    } else if (!this.state.dobValid) {
      this.setState({
        dobErrorText: (
          <span className="ErrorText">Please select your date of birth</span>
        ),
        dobValid: false,
        dobError: true
      });
    } else if (!this.state.disclaimerValid) {
      this.setState({
        disclaimerErrorText: (
          <p className="ErrorText" style={{ fontWeight: "0.75rem" }}>
            Please accept the Terms & Conditions and Privacy Policy
          </p>
        )
      });
    } else {
      this.setState({
        disclaimerError: "",
        fnameErrorText: "",
        lnameErrorText: "",
        emailErrorText: "",
        genderErrorText: "",
        cityErrorText: "",
        dobErrorText: ""
      });
      this.CallSubmitApi();
    }
  }

  async CallSubmitApi() {
    let result = await RegisterUser(
      this.state.MobileNumber,
      this.state.fname,
      this.state.lname,
      this.state.email,
      this.state.city,
      this.state.dob,
      this.state.gender
    );
    if (result.success) {
      this.setState({
        MobileNumberErr: "",
        isError: false,
        shown1: false,
        shown2: true,
        shown3: false
      });
    } else {
      this.setState({
        disclaimerError: (
          <p className="ErrorText" style={{ fontWeight: "0.75rem" }}>
            {result.error}
          </p>
        )
      });
    }
  }

  handleOtpChange = otp => {
    this.setState({ otp });
  };

  validate() {
    let checkError = false;
    const errors = {
      MobileNumberErr: "",
      isError: false
    };
    if (!this.state.MobileNumber.match(/^[789]\d{9}$/)) {
      checkError = true;
      errors.MobileNumberErr = "Please enter a valid 10 digit phone number.";
      errors.isError = true;
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return checkError;
  }

  Back() {
    this.setState({
      otp: "",
      otpError: "",
      color: "",
      MobileNumberErr: "",
      isError: false,
      isNewUser: false,
      shown1: true,
      shown2: false,
      shown3: false,
      loggedIn: false,
      isLoading: false,
      currencies: [],
      fname: "",
      fnameErrorText: "",
      fnameValid: false,
      fnameError: false,
      lname: "",
      lnameErrorText: "",
      lnameValid: false,
      lnameError: false,
      email: "",
      emailErrorText: "",
      emailValid: false,
      emailError: false,
      gender: "",
      genderErrorText: "",
      genderValid: false,
      genderError: false,
      city: "",
      cityErrorText: "",
      cityValid: false,
      cityError: false,
      dob: "",
      dobErrorText: "",
      dobValid: false,
      dobError: false,
      disclaimer: false,
      disclaimerErrorText: "",
      disclaimerValid: true,
      disclaimerError: true,
      single: "",
      suggestions: []
    });
  }

  async SendOTP() {
    this.setState({
      isLoading: true,
      btnDisabled: true
    });
    if (!this.state.isError) {
      let result = await VerifyMobileNumber(this.state.MobileNumber);
      if (result.success) {
        setTimeout(
          function() {
            this.setState({
              MobileNumberErr: "",
              isError: false,
              shown1: false,
              shown2: true
            });
          }.bind(this),
          3000
        );
      } else {
        setTimeout(
          function() {
            this.setState({
              MobileNumberErr:
                "The mobile number you entered is not registered.",
              isError: true,
              isLoading: false,
              btnDisabled: false,
              shown1: false,
              shown2: false,
              shown3: true,
              isNewUser: true
            });
          }.bind(this),
          3000
        );
      }
    }
  }

  async validateOTP() {
    if (this.state.isNewUser) {
      let result = await GetOTPNewUser(this.state.MobileNumber, this.state.otp);
      if (result.success) {
        Auth.authenticateUser(result);
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          otpError: "Invalid OTP entered",
          color: "red"
        });
      }
    } else {
      let result = await GetOTP(this.state.MobileNumber, this.state.otp);
      if (result.success) {
        Auth.authenticateUser(result);
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          otpError: "Invalid OTP entered",
          color: "red"
        });
      }
    }
  }

  componentWillMount() {
    if (localStorage.getItem("auth")) {
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("restoreId");
      localStorage.removeItem("Lender_Name");
      localStorage.removeItem("curentRunningAmount");
      localStorage.removeItem("category");
      localStorage.removeItem("LoanLimit");
      this.setState({
        loggedIn: false
      });
    } else {
      this.setState({
        loggedIn: false
      });
    }
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = name => (event, { newValue }) => {
    if (newValue !== "") {
      this.setState({
        [name]: newValue,
        cityValid: true,
        cityErrorText: "",
        cityError: false
      });
    } else {
      this.setState({
        [name]: newValue,
        cityValid: false,
        cityErrorText: "City cannot be empty",
        cityError: true
      });
    }
  };

  render() {
    const { classes } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion
    };

    const { shouldAutoFocus } = this.props;
    var shown1 = {
      display: this.state.shown1 ? "block" : "none"
    };

    var shown2 = {
      display: this.state.shown2 ? "block" : "none"
    };

    var shown3 = {
      display: this.state.shown3 ? "block" : "none"
    };

    let loggedIn = this.state.loggedIn;

    return (
      <div>
        {false ? (
          <FreshChat
            token="fa86333e-9435-4d3a-a047-b73ee7bd2736"
            host="https://wchat.freshchat.com"
            firstName="xyz"
            email="xyz"
            phone="xyz"
            externalId="xyz"
            restoreId={this.state.restoreId ? this.state.restoreId : null}
            onInit={widget => {
              widget.init({
                config: {
                  headerProperty: {
                    hideChatButton: true
                  }
                },
                token: "fa86333e-9435-4d3a-a047-b73ee7bd2736",
                host: "https://wchat.freshchat.com",
                externalId: "xyz",
                restoreId: this.state.restoreId ? this.state.restoreId : null,
                firstName: "xyz",
                email: "xyz",
                phone: "xyz"
              });
              widget.hide();
              widget.user.get(function(resp) {
                var status = resp && resp.status,
                  data = resp && resp.data;
                if (status !== 200) {
                  widget.user.setProperties({
                    MaxLoanLimit: "John",
                    City: "xyz",
                    UPI: "",
                    Comment: "",
                    LenderName:
                      localStorage.getItem("Lender_Name") !== undefined
                        ? localStorage.getItem("Lender_Name")
                        : null,
                    LoanAmount:
                      localStorage.getItem("curentRunningAmount") !== undefined
                        ? localStorage.getItem("curentRunningAmount")
                        : null
                  });
                  widget.on("user:created", function(resp) {
                    var status = resp && resp.status,
                      data = resp && resp.data;
                    if (status === 200) {
                    }
                  });
                }
              });
            }}
          />
        ) : (
          <div />
        )}

        <div className="">
          <div className="logFirst" style={shown1}>
            <div align="center">
              <List className={classes.grow}>
                <ListItem className="f-list">
                  <img
                    style={{ height: 50, width: 50 }}
                    src={require("../../../Assets/images/sms.png")}
                    alt="sms icon"
                  />
                  <ListItemText
                    primary={
                      <Typography className="w-m-1-1" variant="subtitle1">
                        <b>Enter your mobile number below to login / signup</b>
                      </Typography>
                    }
                    secondary={
                      <Typography variant="caption">
                        We will send a one time password to verify your number.
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </div>
            <form onSubmit={this.Form1}>
              <FormControl
                margin="normal"
                required
                fullWidth
                style={{ fontSize: 30 }}
                error={this.state.isError}
              >
                <Input
                  required
                  type="tel"
                  autoComplete="off"
                  className="mobileNumberInput"
                  id="MobileNumber"
                  name="MobileNumber"
                  placeholder="Mobile Number"
                  onChange={e => {
                    this.setState({ MobileNumber: e.target.value }, function() {
                      if (this.state.MobileNumber.length !== 10) {
                        this.setState({
                          MobileNumberErr: "Please Check the mobile number.",
                          isError: true,
                          btnDisabled: true
                        });
                      } else {
                        this.setState(
                          {
                            MobileNumberErr: "",
                            isError: false,
                            btnDisabled: false
                          },
                          function() {}
                        );
                      }
                    });
                  }}
                  startAdornment={
                    <InputAdornment
                      className="masking"
                      position="start"
                      style={{ marginLeft: "5%" }}
                    >
                      <Typography>India(+91)-</Typography>
                    </InputAdornment>
                  }
                />
                <FormHelperText id="component-error-text">
                  {this.state.MobileNumberErr}
                </FormHelperText>
              </FormControl>

              <br />

              <FormControl margin="normal" required fullWidth align="center">
                <Button
                  onKeyDown={this.keyPress}
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={this.state.btnDisabled}
                  className="btn-1"
                >
                  {this.state.isLoading ? (
                    <CircularProgress
                      style={{ margin: "2%", color: "blue" }}
                      size={15}
                    />
                  ) : (
                    "Send Verification Code"
                  )}
                </Button>

                <br />
              </FormControl>
            </form>
          </div>

          <div className="logSecond" style={shown2}>
            <div align="center">
              <List className={classes.grow}>
                <ListItem className="s-list">
                  <img
                    style={{ height: 50, width: 50 }}
                    src={require("../../../Assets/images/chat3.png")}
                    alt="sms icon"
                  />
                  <ListItemText
                    primary={
                      <Typography className="w-m-1-2" variant="subtitle1">
                        <b>Verify Mobile Number</b>
                      </Typography>
                    }
                    secondary={
                      <Typography variant="caption">
                        We have sent an OTP on your mobile number +91-
                        {this.state.MobileNumber}.
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </div>

            <form onSubmit={this.Form2}>
              <FormControl
                margin="normal"
                required
                fullWidth
                style={{ fontSize: 30, alignItems: "center" }}
              >
                <OtpInput
                  inputStyle={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0 0.5rem",
                    fontSize: "2rem",
                    borderRadius: 4,
                    border: "1px solid rgba(0,0,0,0.3)"
                  }}
                  onChange={this.handleOtpChange}
                  numInputs={6}
                  autoComplete="off"
                  shouldAutoFocus={shouldAutoFocus}
                />
                <FormHelperText
                  style={{ color: this.state.color }}
                  id="component-error-text"
                >
                  {this.state.otpError}
                </FormHelperText>
              </FormControl>

              <br />

              <FormControl margin="normal" required fullWidth align="center">
                <Typography variant="button">
                  <Button
                    onClick={e => {
                      this.SendOTP.bind(this);
                      this.setState({
                        otpError: "OTP has been sent",
                        color: "green"
                      });
                    }}
                  >
                    Resend Code
                  </Button>
                </Typography>

                <br />

                <div style={{ display: "flex" }}>
                  <Typography style={{ width: "30%" }} variant="button">
                    <Button onClick={this.Back.bind(this)}>
                      <FontAwesomeIcon
                        size="1x"
                        icon={faArrowLeft}
                        className="icon"
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Back
                    </Button>
                  </Typography>
                  <Button
                    style={{ width: "70%", marginLeft: "10px" }}
                    // onClick={this.validateOTP.bind(this)}
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="btn-2"
                  >
                    Verify
                  </Button>
                </div>

                <br />
              </FormControl>
            </form>
          </div>

          <div className="logThird" style={shown3}>
            <Typography
              align="center"
              style={{ color: "#3f51b5" }}
              variant="h6"
            >
              Sign Up
            </Typography>

            <MuiThemeProvider theme={this.getMuiTheme()}>
              <form onSubmit={this.Form3}>
                <FormControl required fullWidth>
                  <TextField
                    error={this.state.fnameError}
                    id="fname"
                    name="fname"
                    label="First Name"
                    type="text"
                    value={this.state.fname}
                    helperText={this.state.fnameErrorText}
                    placeholder="Enter your first name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={this.RegistrationFormData("fname")}
                  />
                </FormControl>

                <br />

                <FormControl required fullWidth>
                  <TextField
                    error={this.state.lnameError}
                    id="lname"
                    name="lname"
                    label="Last Name"
                    type="text"
                    value={this.state.lname}
                    helperText={this.state.lnameErrorText}
                    placeholder="Enter your last name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={this.RegistrationFormData("lname")}
                  />
                </FormControl>

                <br />

                <FormControl required fullWidth>
                  <TextField
                    error={this.state.emailError}
                    id="email"
                    name="email"
                    label="Email Id"
                    type="text"
                    value={this.state.email}
                    helperText={this.state.emailErrorText}
                    placeholder="Enter a valid email address"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={this.RegistrationFormData("email")}
                  />
                </FormControl>

                <br />

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
                        className={classes.group}
                        value={this.state.gender}
                        onChange={this.RegistrationFormData("gender")}
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
                  {this.state.genderErrorText}
                </FormControl>

                <FormControl
                  margin="normal"
                  style={{ marginTop: 0 }}
                  required
                  fullWidth
                >
                  <Autosuggest
                    {...autosuggestProps}
                    inputProps={{
                      classes,
                      error: this.state.cityError,
                      value: this.state.city,
                      onChange: this.handleChange("city"),
                      helperText: this.state.cityErrorText,
                      variant: "outlined"
                    }}
                    theme={{
                      container: classes.container,
                      suggestionsContainerOpen:
                        classes.suggestionsContainerOpen,
                      suggestionsList: classes.suggestionsList,
                      suggestion: classes.suggestion
                    }}
                    renderSuggestionsContainer={options => (
                      <Paper {...options.containerProps} square>
                        {options.children}
                      </Paper>
                    )}
                  />
                </FormControl>

                <br />

                <FormControl required fullWidth>
                  <TextField
                    error={this.state.dobError}
                    id="outlined-full-width"
                    label="Date of Birth"
                    type="date"
                    helperText={this.state.dobErrorText}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={this.RegistrationFormData("dob")}
                  />
                </FormControl>

                <br />

                <FormControlLabel
                  control={
                    <Checkbox
                      id="disclaimer"
                      name="disclaimer"
                      checked={this.state.disclaimer}
                      onChange={this.RegistrationFormData("disclaimer")}
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
                        href="https://z2p.zup.today/terms.html"
                        rel="noopener noreferrer"
                      >
                        Terms & Conditions
                      </a>
                      &{" "}
                      <a
                        style={{ color: "#3f51b5" }}
                        target="_blank"
                        href="https://z2p.zup.today/privacy.html"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>
                      .
                    </Typography>
                  }
                />
                {this.state.disclaimerErrorText}

                <FormControl margin="normal" required fullWidth align="center">
                  <div style={{ display: "flex" }}>
                    <Typography style={{ width: "30%" }} variant="button">
                      <Button onClick={this.Back.bind(this)}>
                        <FontAwesomeIcon
                          size="1x"
                          icon={faArrowLeft}
                          className="icon"
                          style={{ marginRight: "10px" }}
                        />{" "}
                        Back
                      </Button>
                    </Typography>
                    <Button
                      style={{ width: "70%", marginLeft: "10px" }}
                      // onClick={this.SubmitRegistrationForm.bind(this)}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className="btn-2"
                    >
                      Proceed
                    </Button>
                  </div>
                </FormControl>
              </form>
            </MuiThemeProvider>
          </div>
        </div>
        {/* {loggedIn === true ? <Redirect to="/Lender/Dashboard" /> : ""} */}
        {loggedIn === true ? <Redirect to="/SelectAccount" /> : ""}
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Login);
