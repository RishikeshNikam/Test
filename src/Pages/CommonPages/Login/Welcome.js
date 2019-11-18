import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import "./Login.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Sidebar from "./AppbarNav";
import GalleryGrid from "./GalleryGrid";
import styles from "./style.js";
import { Typography } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import classNames from "classnames";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import HelpIcon from "@material-ui/icons/HelpOutline";
import { fabric } from "fabric";
import Drawer from "@material-ui/core/Drawer";
import { stampsArray, fabricsArray } from "./stamps";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { SketchPicker } from "react-color";
import CircularProgress from "@material-ui/core/CircularProgress";
import $ from "jquery";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Palette from "@material-ui/icons/Palette";
import Tooltip from "@material-ui/core/Tooltip";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      svg: "",
      PreviewResultDialog: false,
      loading: false,
      ColorPicker: "#fff",
      StampColorDailog: false,
      fabricPanelOpen: false,
      stampPanelOpen: false,
      currentFabric: "",
      currentStamp: [],
      currentFabricArr: [],
      canvas: null,
      lines: {
        top: null,
        left: null,
        right: null,
        bottom: null
      }
    };
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

  componentDidMount() {
    this.canvas = new fabric.Canvas("main-canvas", { hasControls: false });
    this.canvas.setDimensions({ width: 750, height: 450 });
    this.canvas.setBackgroundColor("#fff");
    this.canvas.on("object:moving", this.moveHandler());
    this.canvas.on("object:moved", this.clearGuideLines());
  }

  getSvgImage = stamp => e => {
    this.setState({
      StampColorDailog: true,
      stampPanelOpen: false,
      currentStamp: stamp
    });

    $.get(stamp.url, function(data) {
      var svg_data = data.childNodes;
      $("#my_holder").html(svg_data);
    });
  };

  PrintStampAdd = url => e => {
    fabric.loadSVGFromURL(url, (objects, options) => {
      var obj = fabric.util.groupSVGElements(objects, options);
      obj
        .scaleToHeight(100)
        .scaleToWidth(100)
        .set({ left: 10, top: 10 })
        .setCoords();

      obj.hasControls = false;
      for (var i = 0; i < obj._objects.length; i++) {
        obj._objects[i].set("fill", this.state.ColorPicker);
      }
      obj.opacity = 0.8;
      this.canvas.add(obj).renderAll();
    });
  };

  clearGuideLines = () => e => {
    var objects = this.canvas.getObjects("line");
    for (let i in objects) {
      this.canvas.remove(objects[i]);
    }
    this.canvas.renderAll.bind(this.canvas);
  };

  moveHandler = () => e => {
    //Get the object being manipulated
    var obj = e.target;

    //Set up an object representing its current position
    var curPos = {
      top: parseInt(obj.get("top")),
      left: parseInt(obj.get("left")),
      right: parseInt(obj.get("left") + obj.get("width")),
      bottom: parseInt(obj.get("top") + obj.get("height"))
    };

    //Set up an object that will let us be able to keep track of newly created lines
    var matches = {
      top: false,
      left: false,
      right: false,
      bottom: false
    };

    //Get the objects from the canvas
    var objects = this.canvas.getObjects();

    //For each object
    for (var i in objects) {
      //If the object we are looing at is a line or the object being manipulated, skip it
      if (objects[i] === obj || objects[i].get("type") === "line") {
        continue;
      }

      //Set up an object representing the position of the canvas object
      var objPos = {
        top: parseInt(objects[i].get("top")),
        left: parseInt(objects[i].get("left")),
        right: parseInt(objects[i].get("left") + obj.get("width")),
        bottom: parseInt(objects[i].get("top") + obj.get("height"))
      };

      //Look at all 4 sides of the object and see if the object being manipulated aligns with that side.

      //Top////////////////////////////////////
      if (this.inRange(objPos.top, curPos.top)) {
        //We match. If we don't already have aline on that side, add one.
        if (!this.state.lines.top) {
          this.drawLine("top", objPos.top);
          //Keep track of the fact we found a match so we don't remove the line prematurely.
          matches.top = true;
          //Snap the object to the line
          obj.set("top", objPos.top).setCoords();
        }
      }
      //Left////////////////////////////////////
      if (this.inRange(objPos.left, curPos.left)) {
        if (!this.state.lines.left) {
          this.drawLine("left", objPos.left);
          matches.left = true;
          obj.set("left", objPos.left).setCoords();
        }
      }
      //Right////////////////////////////////////
      if (this.inRange(objPos.right, curPos.right)) {
        if (!this.state.lines.right) {
          this.drawLine("right", objPos.right);
          matches.right = true;
          obj.set("left", objPos.right - objects[i].get("width")).setCoords();
        }
      }
      //Bottom////////////////////////////////////
      if (this.inRange(objPos.bottom, curPos.bottom)) {
        if (!this.state.lines.bottom) {
          this.drawLine("bottom", objPos.bottom);
          matches.bottom = true;
          obj.set("top", objPos.bottom - objects[i].get("height")).setCoords();
        }
      }

      //Look at the side we matched on. If we did not match, and we have a line, remove the line.
      for (var i in matches) {
        var m = matches[i];
        var line = this.state.lines[i];
        if (!m && line) {
          this.canvas.remove(line);
          this.state.lines[i] = null;
        }
      }
    }
    this.canvas.renderAll();
  };

  drawLine = (side, pos) => {
    var ln = null;
    switch (side) {
      case "top":
        ln = new fabric.Line([this.canvas.get("width"), 0, 0, 0], {
          left: 0,
          top: pos,
          stroke: "#c74249"
        });
        this.state.lines.top = ln;
        break;
      case "left":
        ln = new fabric.Line([0, this.canvas.get("height"), 0, 0], {
          left: pos,
          top: 0,
          stroke: "#c74249"
        });
        this.state.lines.left = ln;
        break;
      case "right":
        ln = new fabric.Line([0, this.canvas.get("height"), 0, 0], {
          left: pos,
          top: 0,
          stroke: "#c74249"
        });
        this.state.lines.right = ln;
        break;
      case "bottom":
        ln = new fabric.Line([this.canvas.get("width"), 0, 0, 0], {
          left: 0,
          top: pos,
          stroke: "#c74249"
        });
        this.state.lines.bottom = ln;
        break;
    }
    this.canvas.add(ln).renderAll();
  };

  inRange = (val1, val2) => {
    if (Math.max(val1, val2) - Math.min(val1, val2) <= 6) {
      return true;
    } else {
      return false;
    }
  };

  // addStamp = path => event => {
  //   fabric.Image.fromURL(path, oImg => {
  //     oImg.scaleToWidth(100, true);
  //     oImg.scaleToHeight(100, true);
  //     oImg.hasControls = false;
  //     oImg.opacity = 0.8;
  //     this.canvas.add(oImg);
  //   });

  //   this.setState({
  //     currentStamp: path
  //   });
  // };

  addFabric = Fabric => event => {
    this.setState({
      loading: true
    });
    this.setState({
      currentFabricArr: Fabric
    });
    this.canvas.setBackgroundImage(
      Fabric.url,
      this.canvas.renderAll.bind(this.canvas),
      {
        width: this.canvas.width,
        height: this.canvas.height
      }
    );
    this.setState({
      currentFabric: Fabric.url
    });

    setTimeout(() => {
      this.setState({
        fabricPanelOpen: false,
        loading: false
      });
    }, 1000);
  };

  StampColorPickerDone = () => event => {
    this.setState({
      loading: true
    });
    var stamp = document
      .getElementById("my_holder")
      .getElementsByTagName("svg")[0];
    $("#stamp_preview").html(stamp);
    this.setState({
      StampColorDailog: false
    });

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1000);
  };

  StampColorPickerClose = () => event => {
    this.setState({
      StampColorDailog: false
    });
  };

  SelectedStampColor = color => {
    $("#my_holder svg path").css("fill", color.hex);
    this.setState({ ColorPicker: color.hex });
  };

  toggleStampDrawer = () => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ stampPanelOpen: !this.state.stampPanelOpen });
  };

  toggleFabricDrawer = () => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ fabricPanelOpen: !this.state.fabricPanelOpen });
  };

  downloadCanvas = () => event => {
    var svg = this.canvas.toSVG();

    this.setState({
      PreviewResultDialog: true
    });
    setTimeout(() => {
      $("#Download_image").html(svg);
    }, 2000);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div
          style={{ display: this.state.loading ? "block" : "none" }}
          className={classes.loader}
        >
          <CircularProgress
            style={{
              zIndex: "13000",
              position: "absolute",
              left: "47%",
              top: "45%"
            }}
          />
        </div>
        <div>
          <Sidebar />
          <div className={classes.MainEditer}>
            <Grid container>
              <Grid
                className={classes.LeftEditer}
                item
                xs={12}
                sm={12}
                md={6}
                lg={5}
                container
              >
                <div className={classes.LeftEditerInner}>
                  <div>
                    <div style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <Typography variant="overline">
                          Fabric Details
                        </Typography>
                      </div>
                      <div>
                        <Tooltip
                          title="Select fabric for editing"
                          aria-label="add"
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.toggleFabricDrawer()}
                          >
                            Select Fabric
                          </Button>
                        </Tooltip>
                      </div>
                    </div>
                    <br />
                    <div className={classes.FabricThumbnailPreview}>
                      <div>
                        {this.state.currentFabric === "" ? (
                          <img
                            src={require("../../../Assets/images/Fabrics/BlankFabric.png")}
                          />
                        ) : (
                          <img src={this.state.currentFabric} />
                        )}

                        <Typography variant="caption">
                          Fabric Preview
                        </Typography>
                      </div>
                      <div
                        style={{
                          display:
                            this.state.currentFabricArr.length !== 0
                              ? "block"
                              : "none"
                        }}
                        className={classes.stampDetails}
                      >
                        <Typography variant="h6">
                          {this.state.currentFabricArr.name}
                        </Typography>
                        <Typography variant="subtitle2">
                          ₹ {this.state.currentFabricArr.rate} / metre
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <hr className={classes.CustomHr} />
                  <div>
                    <div style={{ display: "flex" }}>
                      <div style={{ flex: 1 }}>
                        <Typography variant="overline">
                          Stamp Details
                        </Typography>
                      </div>
                      <div>
                        <Tooltip
                          title="Select stamp for printing"
                          aria-label="add"
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.toggleStampDrawer()}
                          >
                            Select Stamp
                          </Button>
                        </Tooltip>
                      </div>
                    </div>
                    <br />
                    <div className={classes.FabricThumbnailPreview}>
                      <div>
                        <div id="stamp_preview">
                          <img
                            src={require("../../../Assets/images/Fabrics/BlankFabric.png")}
                          />
                        </div>

                        <Typography variant="caption">Stamp Preview</Typography>
                      </div>
                      <div
                        style={{
                          display:
                            this.state.currentStamp.length !== 0
                              ? "block"
                              : "none"
                        }}
                        className={classes.stampDetails}
                      >
                        <Typography variant="h6">
                          {this.state.currentStamp.name}
                        </Typography>
                        <Typography variant="subtitle2">
                          {this.state.currentStamp.dimensions}
                        </Typography>
                        <div className={classes.df}>
                          <div style={{ flex: 1 }}>
                            <Typography
                              className={classes.inlineFlex}
                              variant="subtitle2"
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "12px",
                                  backgroundColor: this.state.ColorPicker,
                                  marginTop: "4px",
                                  marginRight: "5px",
                                  border: "1px solid #000",
                                  borderRadius: "50%"
                                }}
                              ></div>
                              {this.state.ColorPicker}
                            </Typography>
                          </div>
                          <div>
                            <Tooltip
                              title="Change stamp color"
                              aria-label="add"
                            >
                              <Fab
                                size="medium"
                                color="primary"
                                aria-label="add"
                                className={classes.AddStampBtn}
                                onClick={this.getSvgImage(
                                  this.state.currentStamp
                                )}
                              >
                                <Palette />
                              </Fab>
                            </Tooltip>
                            <Tooltip
                              title="Add stamp to canvas"
                              aria-label="add"
                            >
                              <Fab
                                size="medium"
                                color="primary"
                                aria-label="add"
                                className={classes.AddStampBtn}
                                onClick={this.PrintStampAdd(
                                  this.state.currentStamp.url
                                )}
                              >
                                <AddIcon />
                              </Fab>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className={classes.CustomHr} />
                </div>
                <GalleryGrid />
              </Grid>

              <Grid
                className={classes.RightEditer}
                item
                xs={12}
                sm={12}
                md={6}
                lg={7}
                container
              >
                <div style={{ padding: "6% 2% 0% 3%" }}>
                  <canvas id="main-canvas"></canvas>
                </div>
              </Grid>
            </Grid>
          </div>
          <MuiThemeProvider theme={this.getMuiTheme()}>
            <AppBar position="fixed" className={classes.appBarBottom}>
              <Toolbar style={{ padding: 0 }}>
                <div className={classes.grow}>
                  <Button
                    className={classNames(
                      classes.footerBtn,
                      classes.BC1,
                      classes.iconBtn
                    )}
                    variant="contained"
                    color="primary"
                  >
                    <HelpIcon />
                  </Button>
                  <Button
                    className={classNames(classes.footerBtn, classes.BC2)}
                    variant="contained"
                    color="primary"
                  >
                    Option 2
                  </Button>
                </div>
                <Button
                  className={classes.footerBtn}
                  href="#"
                  id="btn-download"
                  variant="contained"
                  color="primary"
                  onClick={this.downloadCanvas()}
                >
                  Preview and checkout
                </Button>
              </Toolbar>
            </AppBar>
          </MuiThemeProvider>
          <Drawer
            open={this.state.stampPanelOpen}
            onClose={this.toggleStampDrawer()}
          >
            <div
              className={classes.list}
              role="presentation"
              // onClick={toggleDrawer(side, false)}
              // onKeyDown={toggleDrawer(side, false)}
            >
              <List>
                {stampsArray.map((stamp, index) => (
                  <ListItem
                    onClick={this.getSvgImage(stamp)}
                    button
                    key={stamp.id}
                  >
                    <ListItemIcon>
                      <img className={classes.StampIcon} src={stamp.url} />
                    </ListItemIcon>
                    <ListItemText
                      primary={stamp.name}
                      secondary={stamp.dimensions}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>

          <Drawer
            open={this.state.fabricPanelOpen}
            onClose={this.toggleFabricDrawer()}
          >
            <div
              className={classes.list}
              role="presentation"
              // onClick={toggleDrawer(side, false)}
              // onKeyDown={toggleDrawer(side, false)}
            >
              <List>
                {fabricsArray.map((fabric, index) => (
                  <ListItem
                    onClick={this.addFabric(fabric)}
                    button
                    key={fabric.id}
                  >
                    <ListItemIcon>
                      <img className={classes.FabricIcon} src={fabric.url} />
                    </ListItemIcon>
                    <ListItemText
                      primary={fabric.name}
                      secondary={"₹ " + fabric.rate + "/metre"}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>

          <Dialog
            open={this.state.StampColorDailog}
            onClose={this.StampColorPickerClose()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Stamp Color Picker"}
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Grid
                    container
                    className={classes.ColorPreview}
                    justify="center"
                  >
                    <div id="my_holder">
                      {/* <img src={this.state.currentStamp} /> */}
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container justify="center">
                    <SketchPicker
                      className={classes.SketchPicker}
                      color={this.state.ColorPicker}
                      onChangeComplete={this.SelectedStampColor}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.StampColorPickerClose()} color="primary">
                Cancel
              </Button>
              <Button
                onClick={this.StampColorPickerDone()}
                color="primary"
                autoFocus
              >
                Done
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.PreviewResultDialog}
            onClose={this.StampColorPickerClose()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Preview"}</DialogTitle>
            <DialogContent>
              <div id="Download_image"></div>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={e => {
                  this.setState({
                    PreviewResultDialog: false
                  });
                }}
                color="primary"
              >
                Cancel
              </Button>
              <Button
                onClick={this.StampColorPickerDone()}
                color="primary"
                autoFocus
              >
                Done
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Welcome);
