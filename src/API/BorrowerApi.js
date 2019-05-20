import config from "../config";
import EncFunction from "./Crypto";

/**
 * 1. Api call to get current loan details.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function GetCurrentLoan(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/fetchCurrentLoan", {
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
 * 2. API call to fetch the Borrower Details.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function GetBorrowerDetails(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/fetchBorrowerDetails", {
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
 * 3. API call for Loan Calculator.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function LoanCalculator(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/loancalculator", {
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
 * 4. API call for Fetch all loans.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} page
 */
export function FetchBorrowerAllLoans(MobileNumber, auth, page) {
  var json = {
    mobile: MobileNumber,
    auth: auth,
    page: page
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/fetchLoans", {
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
 * 5. Api call to fetch info tags details.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function FetchInfoTags(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/infoTags", {
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
 * 6. API call for Fetch all fees.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function FetchFees(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/fetchfees", {
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
 * 7. API call to apply for loan.
 * @param {*} MobileNumber
 * @param {*} auth
 * @param {*} principle
 * @param {*} flag
 * @param {*} duration
 */
export function RequestLoan(MobileNumber, auth, principle, flag, duration) {
  var json = {
    mobile: MobileNumber,
    auth: auth,
    principle: principle,
    flag: flag,
    duration: duration
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/requestLoanWeb", {
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
 * 9. Save Extention date.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} emiId
 * @param {string} date
 */
export function SaveExtentionDate(MobileNumber, auth, emiId, date) {
  var json = {
    mobile: MobileNumber,
    auth: auth,
    emiId: emiId,
    extDate: date
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/extensiondate", {
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
 * 10. Fetch Alternate Contact.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function FetchAlternatePhones(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/fetchAlternatePhones", {
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
 * 11. Save Alternate Contact.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} newNumber
 * @param {string} number
 */
export function SaveAlternatePhones(MobileNumber, auth, newNumber, number) {
  if (number === 1) {
    var json = {
      mobile: MobileNumber,
      auth: auth,
      mobileNumber_1: newNumber,
      firstButton: 1
    };
    var encBody = EncFunction.encrypt(json);
    return fetch(config.url + "/users/saveAlternateNumber", {
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
  if (number === 2) {
    var json = {
      mobile: MobileNumber,
      auth: auth,
      mobileNumber_2: newNumber,
      secondButton: 2
    };
    var encBody = EncFunction.encrypt(json);
    return fetch(config.url + "/users/saveAlternateNumber", {
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
}

/**
 * 12. OTP Verification for alternate Contact.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} OTP
 * @param {string} number
 */
export function VerifyMobileNumbers(MobileNumber, auth, OTP, number) {
  if (number === 1) {
    var json = {
      mobile: MobileNumber,
      auth: auth,
      verificationCode_1: OTP
    };
    var encBody = EncFunction.encrypt(json);
    return fetch(config.url + "/users/verifyMobileNumbers", {
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
  if (number === 2) {
    var json = {
      mobile: MobileNumber,
      auth: auth,
      verificationCode_2: OTP
    };
    var encBody = EncFunction.encrypt(json);
    return fetch(config.url + "/users/verifyMobileNumbers", {
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
}

/**
 * 13. Api call to get Freshdesk Query List.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function FreshDeskQueryList(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/queries", {
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
 * 14. Check Loan Approved.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function CheckLoanApproved(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/checkApprove", {
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
 * 15. Save playstore ratings.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} rate
 * @param {string} description
 */
export function PlaystoreRating(MobileNumber, auth, rate, description) {
  var json = {
    mobile: MobileNumber,
    auth: auth,
    rate: rate,
    description: description
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/userRating", {
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
 * 16. Api call to fetch all rewards.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function FetchRewards(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/checkRewards", {
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
 * 17. Api call to claim reward.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function ClaimUpdateRewards(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/updateRewards", {
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
