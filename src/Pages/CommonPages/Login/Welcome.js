import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import "./Login.css";
import "react-alice-carousel/lib/alice-carousel.css";
import Feat1 from "../../../Assets/images/stamps/stamp1.png";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Sidebar from "./AppbarNav";
import FabricSelectDialog from "./FabricSelectDialog";
import GalleryGrid from "./GalleryGrid";
import Draggable from "react-draggable";
import styles from "./style.js";
import { Typography } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      direction: null,
      x: 0,
      y: 0,
      position: "absolute",
      display: "none",
      left: 0,
      top: 0,
      stamps: [],
      FabricDialogOpen: false
    };
    this.FabricSelectDialogOpen = this.FabricSelectDialogOpen.bind(this);
  }

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiAppBar: {
          root: {
            backgroundColor: "#303034 !important",
            boxShadow: "none"
          }
        }
      }
    });

  componentDidMount() {}

  FabricSelectDialogOpen() {
    this.setState({ FabricDialogOpen: !this.state.FabricDialogOpen });
  }

  _onMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY,
      display: "block",
      left: e.screenX - 130 + "px",
      top: e.screenY - 275 + "px"
    });

    this.state.stamps.push(["absolute", "block", e.pageX, e.pageY]);
  }

  render() {
    const { classes } = this.props;
    const { stamps, FabricDialogOpen } = this.state;
    console.log(stamps);

    return (
      <div>
        <Sidebar />
        <div className={classes.MainEditer}>
          <Grid container>
            <Grid
              className={classes.LeftEditer}
              item
              xs={6}
              sm={6}
              md={6}
              lg={6}
              container
            >
              <div className={classes.LeftEditerInner}>
                <div>
                  <div style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>
                      <Typography variant="overline">Fabric Details</Typography>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.FabricSelectDialogOpen}
                      >
                        Select Fabric
                      </Button>
                    </div>
                  </div>
                  <br />
                  <div className={classes.FabricThumbnailPreview}>
                    <img
                      src={require("../../../Assets/images/Fabrics/BlankFabric.png")}
                    />

                    <Typography variant="caption">Fabric Preview</Typography>
                  </div>

                  <FabricSelectDialog
                    FabricSelectDialogFn={this.FabricSelectDialogOpen}
                    FabricDialogOpen={FabricDialogOpen}
                  />
                </div>
                <hr className={classes.CustomHr} />
                <div>
                  <div style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>
                      <Typography variant="overline">Stamp Details</Typography>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.FabricSelectDialogOpen}
                      >
                        Select Stamp
                      </Button>
                    </div>
                  </div>
                  <br />
                  <div className={classes.FabricThumbnailPreview}>
                    <img
                      src={require("../../../Assets/images/Fabrics/BlankFabric.png")}
                    />

                    <Typography variant="caption">Stamp Preview</Typography>
                  </div>

                  <FabricSelectDialog
                    FabricSelectDialogFn={this.FabricSelectDialogOpen}
                    FabricDialogOpen={FabricDialogOpen}
                  />
                </div>
                <hr className={classes.CustomHr} />
              </div>
              <GalleryGrid />
            </Grid>

            <Grid
              className={classes.RightEditer}
              item
              xs={6}
              sm={6}
              md={6}
              lg={6}
              container
            >
              <Paper
                onClick={this._onMouseMove.bind(this)}
                className={classes.Editer}
              >
                {stamps.map(option => (
                  <Draggable>
                    <img
                      style={{
                        display: option[1],
                        position: option[0],
                        left: option[2],
                        top: option[3]
                      }}
                      src={Feat1}
                    />
                  </Draggable>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </div>
        <MuiThemeProvider theme={this.getMuiTheme()}>
          <AppBar position="fixed" className={classes.appBarBottom}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                onClick={e => {
                  this.setState({ mobileOpen: true });
                }}
                color="inherit"
                noWrap
                style={{ color: "#696969" }}
              >
                Fabric Editing Panel
              </Typography>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(Welcome);
