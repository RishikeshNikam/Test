import React from "react";
import { Route, Switch } from "react-router-dom";
// import routes from "../route.js";
import routes from "../Routes/WebsiteRoutes";
import Navbar from "../Pages/WebsitePages/Navbar/Navbar";
import Footer from "../Pages/WebsitePages/Footer/Footer";
import "./bootstraptheme.min.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

class DefaultLayout extends React.Component {
  state = {
    completed: 0,
    restoreId: null,
    disableChat: false
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ display: "block" }}>
          <Navbar />

          <main
            style={{
              flexGrow: 1
            }}
          >
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => <route.component {...props} />}
                  />
                ) : null;
              })}
              {/* <Redirect from="/" to="/Lender/Dashboard" /> */}
            </Switch>
          </main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default DefaultLayout;
