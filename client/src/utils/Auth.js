class Auth {
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token, username, successMessage) {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username)
    localStorage.setItem("successMessage", successMessage)
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem("token") !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("successMessage");
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem("token");
  }
}

export default Auth;
