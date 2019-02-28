import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { Redirect } from "react-router-dom";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import "./SwitchAccount.css";

class SwitchAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      Switch: false
    };
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
        MuiDialogActions: {
          root: {
            backgroundColor: "#f8f8f8",
            margin: "0px 0px",
            display: "block"
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

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen } = this.props;
    var Switch = this.state.Switch;

    return (
      <div>
        <MuiThemeProvider theme={this.getMuiTheme()}>
          <Dialog
            fullScreen={fullScreen}
            open={this.props.display}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              className="Switch-Dialog-Head"
              align="center"
              id="alert-dialog-title"
            >
              <FontAwesomeIcon size="2x" icon={faToggleOn} className="icon" />
              <Typography variant="h5">Switch Account</Typography>
            </DialogTitle>
            <DialogContent className="Switch-Dialog-Body">
              <DialogContentText id="alert-dialog-description">
                You will be redirected to the {this.props.Text}, are you sure
                you want to continue ?
              </DialogContentText>
            </DialogContent>
            <DialogActions className="Switch-Dialog-Foot">
              <Button
                align="left"
                style={{ float: "left", width: "45%" }}
                variant="outlined"
                onClick={this.props.showHide}
                color="primary"
              >
                <FontAwesomeIcon
                  style={{ marginRight: "20px" }}
                  size="1x"
                  icon={faLongArrowAltLeft}
                  className="icon"
                />{" "}
                Close
              </Button>
              <Button
                style={{ float: "right", width: "45%" }}
                variant="contained"
                onClick={e => {
                  e.preventDefault();
                  window.location.reload();
                  this.setState({
                    Switch: true
                  });
                }}
                color="primary"
                autoFocus
              >
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </MuiThemeProvider>
        {Switch === true ? <Redirect to={this.props.Link} /> : ""}
      </div>
    );
  }
}

SwitchAccount.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(SwitchAccount);
