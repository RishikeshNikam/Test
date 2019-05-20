import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import OwlCarousel from "react-owl-carousel2";
import Feat1 from "../../../Assets/images/stamps/stamp1.png";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const options = {
  items: 3,
  nav: true,
  rewind: false,
  autoplay: false
};

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {},
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: 0
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false
  };

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiAppBar: {
          root: {
            backgroundColor: "#fff !important",
            boxShadow: "none"
          }
        }
      }
    });

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />

        <OwlCarousel ref="car" options={options}>
          <div>
            <img src={Feat1} alt="The Last of us" />
          </div>
          <div>
            <img src={Feat1} alt="GTA V" />
          </div>
          <div>
            <img src={Feat1} alt="Mirror Edge" />
          </div>
          <div>
            <img src={Feat1} alt="Mirror Edge" />
          </div>
          <div>
            <img src={Feat1} alt="Mirror Edge" />
          </div>
          <div>
            <img src={Feat1} alt="Mirror Edge" />
          </div>
          <div>
            <img src={Feat1} alt="Mirror Edge" />
          </div>
          <div>
            <img src={Feat1} alt="Mirror Edge" />
          </div>
          <div>
            <img src={Feat1} alt="Mirror Edge" />
          </div>
        </OwlCarousel>
      </div>
    );

    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
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
          <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={this.props.container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
        </div>
      </MuiThemeProvider>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
