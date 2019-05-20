import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";

const styles = {
  fullList: {
    width: "auto"
  }
};

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

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
      },
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

    return (
      <div>
        <SwipeableDrawer
          style={{ height: "500px" }}
          anchor="top"
          open={this.state.top}
        >
          <div style={{ margin: "5% 5%" }}>
            <Grid
              style={{ overflowY: "scroll", height: "400px" }}
              container
              spacing={24}
            >
              {Fabrics.map(option => (
                <Grid item xs={4} sm={4} md={2} lg={2}>
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

          <DialogActions>
            <Button
              onClick={e => {
                this.setState({ top: false });
              }}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={e => {
                this.setState({ top: false });
              }}
              color="primary"
              autoFocus
            >
              Proceed
            </Button>
          </DialogActions>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
