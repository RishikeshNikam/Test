import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import F1 from "../../../Assets/images/Fabrics/1.webp";

const Fabrics = [
  {
    src: require("../../../Assets/images/Fabrics/1.webp")
  },
  {
    src: require("../../../Assets/images/Fabrics/2.webp")
  },
  {
    src: require("../../../Assets/images/Fabrics/3.webp")
  },
  {
    src: require("../../../Assets/images/Fabrics/4.webp")
  },
  {
    src: require("../../../Assets/images/Fabrics/5.webp")
  },
  {
    src: require("../../../Assets/images/Fabrics/6.webp")
  },
  {
    src: require("../../../Assets/images/Fabrics/7.webp")
  },
  {
    src: require("../../../Assets/images/Fabrics/8.webp")
  }
];

const styles = theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content"
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    minWidth: 120
  },
  formControlLabel: {
    marginTop: theme.spacing.unit
  }
});

function PaperComponent(props) {
  return (
    <Draggable>
      <Paper {...props} />
    </Draggable>
  );
}

class ResponsiveDialog extends React.Component {
  state = {};

  render() {
    const { fullScreen } = this.props;
    const { classes } = this.props;
    console.log(Fabrics);

    return (
      <div>
        <Dialog
          fullWidth={true}
          maxWidth="lg"
          fullScreen={fullScreen}
          open={this.props.FabricDialogOpen}
          PaperComponent={PaperComponent}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Select fabric of your choice"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div>
                <Grid container spacing={24}>
                  {Fabrics.map(option => (
                    <Grid item xs={3}>
                      <div>
                        <img
                          style={{
                            cursor: "pointer",
                            width: "100%",
                            borderRadius: "10px",
                            boxShadow:
                              "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
                          }}
                          src={option.src}
                        />
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.FabricSelectDialogFn} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.props.FabricSelectDialogFn}
              color="primary"
              autoFocus
            >
              Proceed
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};

export default withMobileDialog()(withStyles(styles)(ResponsiveDialog));
