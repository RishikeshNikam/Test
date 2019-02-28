import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AppBarNav from "./AppbarNav";
import "./Login.css";
// import routes from "../../loginRoutes";
import LoginSection from "../Login/Login";
import AliceCarousel from "react-alice-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import RuppeSymbol from "../../../Assets/images/rupee.png";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { WebStats } from "../../../API/WebsiteApi";
import "react-alice-carousel/lib/alice-carousel.css";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 2,
    alignItems: "center",
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class Welcome extends Component {
  state = {
    fields: {},
    loansUnderPortfolio: "",
    totalAmountDisbursed: "",
    totalLenders: "",
    totalLoan: "",
    percent: "",
    decimal: ""
  };
  componentDidMount() {
    this.WebStats();
  }

  async WebStats() {
    let result = await WebStats();
    if (result.success) {
      this.setState({
        loansUnderPortfolio: result.loansUnderPortfolio,
        totalAmountDisbursed: result.totalAmountDisbursed,
        totalLenders: result.totalLenders,
        totalLoan: result.totalLoan,
        percent: 98,
        decimal: 6
      });
    }
  }

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider suppressDeprecationWarning={true}>
        <React.Fragment>
          <CssBaseline />
          <div className="root">
            <AppBarNav />

            <div className="content">
              <Grid container className="ptop">
                <Grid item xs={12} sm={12} md={12} lg={7}>
                  <div className="RightContent">
                    <Typography variant="h4">
                      <b>India's Leading P2P Lending Platform.</b>
                    </Typography>
                    <br />
                    <AliceCarousel
                      autoPlay={true}
                      autoPlayInterval={4000}
                      dotsDisabled={true}
                      buttonsDisabled
                      mouseDragEnabled
                    >
                      <div>
                        <Typography variant="h5">
                          <b>Invest with Z2P</b>
                        </Typography>
                        <br />
                        <ul>
                          <li>
                            <Typography variant="h5">
                              <FontAwesomeIcon size="1x" icon={faCheckDouble} />{" "}
                              Earn high returns @ 4% monthly / 48% annual
                              interest
                            </Typography>
                          </li>
                          <li>
                            <Typography variant="h5">
                              <FontAwesomeIcon size="1x" icon={faCheckDouble} />{" "}
                              Start investing with as less as Rs.1000
                            </Typography>
                          </li>
                          <li>
                            <Typography variant="h5">
                              <FontAwesomeIcon size="1x" icon={faCheckDouble} />{" "}
                              Lowest Default Rate in India, ~1%
                            </Typography>
                          </li>
                          <li>
                            <Typography variant="h5">
                              <FontAwesomeIcon size="1x" icon={faCheckDouble} />{" "}
                              Lender Protection Fund to safeguard you against
                              defaults
                            </Typography>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Typography variant="h5">
                          <b>Borrow from Z2P</b>
                        </Typography>
                        <br />
                        <ul>
                          <li>
                            <Typography variant="h5">
                              <FontAwesomeIcon size="1x" icon={faCheckDouble} />{" "}
                              24-hr loan approval
                            </Typography>
                          </li>
                          <li>
                            <Typography variant="h5">
                              <FontAwesomeIcon size="1x" icon={faCheckDouble} />{" "}
                              No Physical Verification
                            </Typography>
                          </li>
                          <li>
                            <Typography variant="h5">
                              <FontAwesomeIcon size="1x" icon={faCheckDouble} />{" "}
                              Loan disbursal directly in bank account
                            </Typography>
                          </li>
                        </ul>
                      </div>
                    </AliceCarousel>
                  </div>
                </Grid>

                <Grid id="LoginForm" item xs={12} sm={12} md={12} lg={5}>
                  <Paper
                    id="paper"
                    className={classes.paper}
                    style={{ borderRadius: 5 }}
                  >
                    {/* <div align="center" className="formHead">
											<Avatar
												className="avatar"
												style={{ height: 50, width: 50 }}
												src={require("../../Assets/images/logot2.png")}
											/>
											<Typography className="Head" variant="h6">
												Zaitech Technologies
											</Typography>
											<Typography className="subHead" variant="body2">
												Private Limited
											</Typography>
										</div> */}

                    <main>
                      {/* <Switch>
												{routes.map((route, idx) => {
													return route.component ? (
														<Route
															key={idx}
															path={route.path}
															exact={route.exact}
															name={route.name}
															render={(props) => <route.component {...props} />}
														/>
													) : null;
												})}
												<Redirect from="/" to="/Welcome/Login" />
											</Switch> */}
                      <LoginSection />
                    </main>
                  </Paper>
                </Grid>
              </Grid>
              <Grid className="Statistics" container>
                <Grid item align="center" xs={12} sm={12} md={2} lg={2}>
                  <div className="StatDiv statTopM">
                    <Typography variant="h4">
                      <CountUp end={this.state.totalLenders} />
                    </Typography>
                    <Typography variant="button">Total Lenders</Typography>
                  </div>
                </Grid>
                <Grid item align="center" xs={12} sm={12} md={2} lg={2}>
                  <div className="StatDiv statTopM">
                    <Typography variant="h4">
                      <CountUp end={this.state.totalLoan} />
                    </Typography>
                    <Typography variant="button">Total Loans</Typography>
                  </div>
                </Grid>
                <Grid item align="center" xs={12} sm={12} md={4} lg={4}>
                  <div className="StatDiv">
                    <Typography variant="h3">
                      <img src={RuppeSymbol} />
                      <CountUp
                        end={this.state.totalAmountDisbursed / 1000000}
                      />{" "}
                      Mn
                    </Typography>
                    <Typography variant="button">
                      Total Amount Disbursed
                    </Typography>
                  </div>
                </Grid>
                <Grid item align="center" xs={12} sm={12} md={2} lg={2}>
                  <div className="StatDiv statTopM">
                    <Typography variant="h4">
                      <CountUp end={this.state.loansUnderPortfolio} />
                    </Typography>
                    <Typography variant="button">
                      Loans Under Portfolio
                    </Typography>
                  </div>
                </Grid>
                <Grid item align="center" xs={12} sm={12} md={2} lg={2}>
                  <div className="StatDiv statTopM">
                    <Typography variant="h4">
                      <CountUp end={this.state.percent} />.
                      <CountUp end={this.state.decimal} />%
                    </Typography>
                    <Typography variant="button">Recovered Loans</Typography>
                  </div>
                </Grid>
              </Grid>

              <div />
            </div>
            <div style={{ bottom: "0" }} container="true">
              <div className="footer">
                <div className="footer-content">
                  <div className="footer-flex">
                    <div style={{ flexGrow: 1 }}>
                      <Typography
                        className="footer-copy-welcome"
                        variant="caption"
                      >
                        Copyright <FontAwesomeIcon icon={faCopyright} /> 2018 by
                        Zaitech Technologies Pvt Ltd. All Rights Reserved.
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        variant="body2"
                        className="terms-footer-welcome"
                      >
                        <a
                          href="https://z2p.zup.today/terms.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Terms & Conditions
                        </a>{" "}
                        /{" "}
                        <a
                          href="https://z2p.zup.today/privacy.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </a>
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Welcome);
