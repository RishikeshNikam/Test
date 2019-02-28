import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./Login.css";

const styles = {
  root: {},
  setBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.33)"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function AppBarNav(props) {
  const { classes } = props;
  return (
    <AppBar position="sticky" className={classes.setBackground}>
      <Toolbar>
        <List className={classes.grow}>
          <Link to="/Website/HomePage">
            {" "}
            <ListItem>
              <Avatar
                style={{ height: 50, width: 50 }}
                src={require("../../../Assets/images/LOGO.png")}
              />
              <ListItemText
                color="default"
                primary={
                  <Typography
                    className="bar-top-head"
                    variant="subtitle1"
                    color="primary"
                    style={{ color: "#fff", fontWeight: "bold" }}
                  >
                    ZAITECH TECHNOLOGIES
                  </Typography>
                }
                secondary={
                  <Typography
                    className="bar-top-subhead"
                    color="primary"
                    variant="body2"
                    style={{ color: "#fff" }}
                  >
                    Private Limited
                  </Typography>
                }
              />
            </ListItem>
          </Link>
        </List>

        {/* <Link to="/Welcome/SignUp">
					<Button style={{ color: "#fff" }}>Sign Up</Button>
				</Link> */}
        {/* <Link to="/Welcome/Login">
					<Button style={{ color: "#fff" }}>Login</Button>
				</Link> */}
      </Toolbar>
    </AppBar>
  );
}

AppBarNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBarNav);
