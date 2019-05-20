import config from "../config";

var crypto = require("crypto");
var algorithm = "aes-256-cbc";
var password = config.CRYPT.substring(0, 32);

const EncFunction = {
  encrypt: function(text) {
    if (config.ENCRYPTION) {
      text = JSON.stringify(text);
      var cipher = crypto.createCipheriv(algorithm, password, config.IV);
      var crypted = cipher.update(text, "utf8", "base64");
      crypted += cipher.final("base64");
      return crypted;
    } else {
      return text;
    }
  },
  decrypt: function(text) {
    if (config.ENCRYPTION) {
      var decipher = crypto.createDecipheriv(algorithm, password, config.IV);
      var dec = decipher.update(text, "base64", "utf8");
      dec += decipher.final("utf8");
      var dd = JSON.parse(dec);
      return dd;
    } else {
      return text;
    }
  }
};

export default EncFunction;
