import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { Redirect } from "react-router-dom";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

class SessionExpireAlert extends React.Component {
  state = {
    open: false,
    Logout: false
  };

  componentDidMount() {
    this.setState({ open: this.props.display });
  }

  handleClose = () => {
    this.setState({ open: false });
    localStorage.clear();
    // window.location = "/";
    this.setState({
      Logout: true
    });
  };

  render() {
    const { fullScreen } = this.props;
    let Logout = this.state.Logout;
    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          disableBackdropClick
          disableEscapeKeyDown
          aria-labelledby="Session Expiry Dialog"
        >
          <DialogTitle
            style={{ backgroundColor: "#fff" }}
            id="responsive-dialog-title"
          >
            <FontAwesomeIcon
              style={{ color: "red" }}
              icon={faExclamationTriangle}
              className="icon"
            />
            {" Session Expire Warning"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Your session has expired or will expire shortly. To continue
              exploring your account please login again.
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{ display: "block" }}>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Login
            </Button>
          </DialogActions>
        </Dialog>
        {Logout === true ? <Redirect to="/Login" /> : ""}
      </div>
    );
  }
}

SessionExpireAlert.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(SessionExpireAlert);
