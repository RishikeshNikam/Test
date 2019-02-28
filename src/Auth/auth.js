class Auth {
	/**
	 * Authenticate a user. Save a token string in Local Storage
	 *
	 * @param {string} token
	 */
	static authenticateUser(response) {
		localStorage.setItem("user", JSON.stringify(response.user));
		localStorage.setItem("auth", response.auth);
		localStorage.setItem("refresh_token", response.refresh_token);
		localStorage.setItem("isLoggedIn", true);
		var RestoreId = response.user.restoreId;
		localStorage.setItem("restoreId", RestoreId);
	}

	/**
	 * Check if a user is authenticated - check if a token is saved in Local Storage
	 *
	 * @returns {boolean}
	 */
	static isUserAuthenticated() {
		return localStorage.getItem("user") !== null;
	}

	static isAdmin() {
		const role = localStorage.getItem("role");
		const isAdmin = JSON.parse(role);
		if (isAdmin === null || isAdmin === "user") {
			return false;
		}
		return true;
	}

	/**
	 * Deauthenticate a user. Remove a token from Local Storage.
	 *
	 */
	static deauthenticateUser() {
		localStorage.removeItem("user");
	}

	/**
	 * Get a token value.
	 *
	 * @returns {string}
	 */

	static getToken() {
		return localStorage.getItem("user");
	}

	static getId() {
		return localStorage.getItem("id");
	}
}

export default Auth;
