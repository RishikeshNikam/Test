import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { CheckProfileDetails } from "../../../API/CommonApi";

class ResponsiveDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true,
      Lender: false,
      Borrower: false,
      URL: "",
      data: []
    };
    this.RedirectPage = this.RedirectPage.bind(this);
  }

  getMuiTheme = () =>
    createMuiTheme({
      palette: {
        primary: {
          main: "#f06620"
        },
        secondary: {
          light: "#2196f3",
          main: "#2196f3",
          contrastText: "#2196f3"
        }
      },
      overrides: {
        MuiBackdrop: {
          root: {
            backgroundColor: "#e5e5e5"
          }
        },
        MuiDialogContent: {
          root: {
            backgroundColor: "#f8f8f8"
          }
        },
        MuiPaper: {
          rounded: {
            borderRadius: "10px"
          }
        },
        MuiDialog: {
          paperWidthSm: {
            width: "550px"
          }
        },
        MuiModal: {
          root: {}
        }
      }
    });

  componentDidMount() {
    this.ProfileFiiled();
  }

  async ProfileFiiled() {
    var user = JSON.parse(localStorage.getItem("user"));
    var auth = localStorage.getItem("auth");

    let profileComplete = await CheckProfileDetails(user.phone, auth);
    if (profileComplete.success) {
      this.setState({
        data: profileComplete
      });
      // if (
      // 	!profileComplete.bank ||
      // 	!profileComplete.personal ||
      // 	!profileComplete.profesional ||
      // 	!profileComplete.documents ||
      // 	!profileComplete.verify
      // ) {
      // }
    }
  }

  RedirectPage = name => event => {
    if (name === "Lender") {
      if (
        !this.state.data.bank ||
        !this.state.data.personal ||
        !this.state.data.profesional ||
        !this.state.data.documents
      ) {
        this.setState({
          [name]: true,
          URL: "EditProfile"
        });
      } else {
        this.setState({
          [name]: true,
          URL: "Dashboard"
        });
      }
    }

    if (name === "Borrower") {
      if (
        !this.state.data.bank ||
        !this.state.data.personal ||
        !this.state.data.profesional ||
        !this.state.data.documents ||
        !this.state.data.verify
      ) {
        this.setState({
          [name]: true,
          URL: "EditProfile"
        });
      } else {
        this.setState({
          [name]: true,
          URL: "Dashboard"
        });
      }
    }
  };

  render() {
    const { fullScreen } = this.props;
    let Lender = this.state.Lender;
    let Borrower = this.state.Borrower;
    var URL = this.state.URL;

    return (
      <div>
        <MuiThemeProvider theme={this.getMuiTheme()}>
          <Dialog
            fullScreen={fullScreen}
            open={this.state.open}
            onClose={this.handleClose}
            disableBackdropClick
            disableEscapeKeyDown
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle
              align="center"
              className="Redirect-Dialog-Head"
              id="alert-dialog-title"
            >
              <FontAwesomeIcon size="2x" icon={faUser} className="icon" />
              <Typography variant="h5">Select Account</Typography>
            </DialogTitle>
            <DialogContent className="Redirect-Dialog-Body">
              <DialogContentText>
                <div>
                  <Typography className="LoginMSG" variant="subtitle1">
                    Please select the account type you wish to login and
                    proceed.
                  </Typography>
                </div>
                <div>
                  <Button
                    style={{ width: "45%" }}
                    onClick={this.RedirectPage("Lender")}
                    variant="outlined"
                    color="primary"
                  >
                    Lender
                  </Button>
                  <Button
                    style={{ float: "right", width: "45%" }}
                    onClick={this.RedirectPage("Borrower")}
                    variant="outlined"
                    color="primary"
                  >
                    borrower
                  </Button>
                </div>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </MuiThemeProvider>
        {Lender === true && <Redirect to={"/Lender/" + URL} />}
        {Borrower === true && <Redirect to={"/Borrower/" + URL} />}
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(ResponsiveDialog);
