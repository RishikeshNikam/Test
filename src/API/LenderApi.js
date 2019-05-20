import config from "../config";
import EncFunction from "./Crypto";

/**
 * 1. This function returns details related to lender.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function GetLenderDetails(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/lenderHome", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      encryptedData: encBody
    })
  })
    .then(res => res.json())
    .then(res => {
      var decData = EncFunction.decrypt(res.encryptedData);

      return decData;
    });
}

/**
 * 2. This function returns all the upcoming emis.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} page
 */
export function upcomingEmis(MobileNumber, auth, page) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/upcomingEmis?page=" + page, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      encryptedData: encBody
    })
  })
    .then(res => res.json())
    .then(res => {
      var decData = EncFunction.decrypt(res.encryptedData);
      return decData;
    });
}

/**
 * 3. This function returns all the settled emis.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} page
 */
export function settledEmis(MobileNumber, auth, page) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/settledEmis?page=" + page, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      encryptedData: encBody
    })
  })
    .then(res => res.json())
    .then(res => {
      var decData = EncFunction.decrypt(res.encryptedData);

      return decData;
    });
}

export function settledEmis1(MobileNumber, auth, page) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/fetchCompleteLends", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      encryptedData: encBody
    })
  })
    .then(res => res.json())
    .then(res => {
      var decData = EncFunction.decrypt(res.encryptedData);

      return decData;
    });
}

/**
 * 4. This function returns all the paid emis.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} page
 */
export function PaidEmisPage(MobileNumber, auth, page) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/paidEmis?page=" + page, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      encryptedData: encBody
    })
  })
    .then(res => res.json())
    .then(res => {
      var decData = EncFunction.decrypt(res.encryptedData);

      return decData;
    });
}

/**
 * 5. This function is used to initialize lending for a lender.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} amount
 * @param {int} duration
 */
export function LendMoney(MobileNumber, auth, amount, duration) {
  var json = {
    mobile: MobileNumber,
    auth: auth,
    principle: amount,
    duration: duration
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/lendmoney", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      encryptedData: encBody
    })
  })
    .then(res => res.json())
    .then(res => {
      var decData = EncFunction.decrypt(res.encryptedData);

      return decData;
    });
}

/**
 * 6. This function returns lenders freshchat details.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function FetchFreshChatDetails(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/fetchfreshchatdetails", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      encryptedData: encBody
    })
  })
    .then(res => res.json())
    .then(res => {
      var decData = EncFunction.decrypt(res.encryptedData);

      return decData;
    });
}

/**
 * 7. This function is used to check if the lender is legal lender or not.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function FetchLegalLender(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/fetchLegalLender", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      encryptedData: encBody
    })
  })
    .then(res => res.json())
    .then(res => {
      var decData = EncFunction.decrypt(res.encryptedData);

      return decData;
    });
}

/**
 * 8. This function returns the monthly portfolio of the lender.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} userid
 * @param {string} month
 * @param {string} year
 */
export function MonthlyPortfolio(MobileNumber, auth, month, year) {
  var json = {
    auth: auth,
    mobile: MobileNumber,
    monthAndYear: year + "-" + month
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/lenderMaxRunning", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      encryptedData: encBody
    })
  })
    .then(res => res.json())
    .then(res => {
      var decData = EncFunction.decrypt(res.encryptedData);

      return decData;
    });
}

/**
 * 9. This function is used to start/stop autolending of the lender.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {boolean} autolend
 */
export function AutoLend(MobileNumber, auth, autolend) {
  var json = {
    mobile: MobileNumber,
    auth: auth,
    autoLend: autolend
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/autoLend", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      encryptedData: encBody
    })
  })
    .then(res => res.json())
    .then(res => {
      var decData = EncFunction.decrypt(res.encryptedData);

      return decData;
    });
}

/**
 * 10. This function returns data related to the lending calculator.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function LendingCalculator(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/lendingcalculator", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      encryptedData: encBody
    })
  })
    .then(res => res.json())
    .then(res => {
      var decData = EncFunction.decrypt(res.encryptedData);

      return decData;
    });
}

/**
 * 11. This function returns the Escrow statement of the lender.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function EscrowHistory(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/lenderEscrowHistory", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      encryptedData: encBody
    })
  })
    .then(res => res.json())
    .then(res => {
      var decData = EncFunction.decrypt(res.encryptedData);

      return decData;
    });
}
