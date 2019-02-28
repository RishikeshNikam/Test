import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import "../Login/Login.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Footer extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div
					className="footer"
					style={{ bottom: "0", left: "0", right: "0", position: "fixed" }}
				>
					<div className="footer-content1">
						<Grid container spacing={24}>
							<Grid item xs={12}>
								<div style={{ display: "flex" }}>
									<div style={{ flexGrow: 1 }}>
										<Typography variant="caption" className="copyR">
											Copyright <FontAwesomeIcon icon={faCopyright} /> 2018 by
											Zaitech Technologies Pvt Ltd. All Rights Reserved.
										</Typography>
									</div>

									<div>
										<Typography variant="caption" className="copyR">
											<a
												target="_blank"
												href="https://z2p.zup.today/terms.html"
												rel="noopener noreferrer"
											>
												Terms & Conditions
											</a>{" "}
											/{" "}
											<a
												target="_blank"
												href="https://z2p.zup.today/privacy.html"
												rel="noopener noreferrer"
											>
												Privacy Policy
											</a>
										</Typography>
									</div>
								</div>
							</Grid>
						</Grid>

						<div />
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Footer;
