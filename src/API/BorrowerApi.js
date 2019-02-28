import config from "../config";

export function GetCurrentLoan(MobileNumber, auth) {
  return fetch(config.url + "/users/fetchCurrentLoan", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----2 API call to fetch the Borrower Details-----//

export function GetBorrowerDetails(MobileNumber, auth) {
  return fetch(config.url + "/users/fetchBorrowerDetails", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----3 API call for Loan Calculator-----//

export function LoanCalculator(MobileNumber, auth) {
  return fetch(config.url + "/users/loancalculator", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----4 API call for Fetch all loans-----//

export function FetchBorrowerAllLoans(MobileNumber, auth, page) {
  return fetch(config.url + "/users/fetchLoans", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      page: page
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----5 API call for Fetch all loans-----//

export function FetchInfoTags(MobileNumber, auth) {
  return fetch(config.url + "/users/infoTags", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----6 API call for Fetch all fees-----//

export function FetchFees(MobileNumber, auth) {
  return fetch(config.url + "/users/fetchfees", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----7 API call for Fetch all fees-----//

export function RequestLoan(MobileNumber, auth, principle, flag, duration) {
  return fetch(config.url + "/users/requestLoanWeb", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      principle: principle,
      flag: flag,
      duration: duration
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----8 API call for Payment details-----//

export function PayLoanDetails(MobileNumber, auth) {
  return fetch(config.url + "/users/payEmiDetail", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//-----9 Save Extention date-----//

export function SaveExtentionDate(MobileNumber, auth, emiId, date) {
  return fetch(config.url + "/users/extensiondate", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      emiId: emiId,
      extDate: date
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----10 Fetch Alternate Contact----//

export function FetchAlternatePhones(MobileNumber, auth) {
  return fetch(config.url + "/users/fetchAlternatePhones", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----11 Save Alternate Contact----//

export function SaveAlternatePhones(MobileNumber, auth, newNumber, number) {
  if (number === 1) {
    return fetch(config.url + "/users/saveAlternateNumber", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify({
        mobile: MobileNumber,
        auth: auth,
        mobileNumber_1: newNumber,
        firstButton: 1
      })
    })
      .then(res => res.json())
      .then(res => {
        var result = res;
        return result;
      });
  }
  if (number === 2) {
    return fetch(config.url + "/users/saveAlternateNumber", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify({
        mobile: MobileNumber,
        auth: auth,
        mobileNumber_2: newNumber,
        secondButton: 2
      })
    })
      .then(res => res.json())
      .then(res => {
        var result = res;
        return result;
      });
  }
}

//---------------------------------------------------//

//-----12 OTP Verify Contact----//

export function VerifyMobileNumbers(MobileNumber, auth, OTP, number) {
  if (number === 1) {
    return fetch(config.url + "/users/verifyMobileNumbers", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify({
        mobile: MobileNumber,
        auth: auth,
        verificationCode_1: OTP
      })
    })
      .then(res => res.json())
      .then(res => {
        var result = res;
        return result;
      });
  }
  if (number === 2) {
    return fetch(config.url + "/users/verifyMobileNumbers", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify({
        mobile: MobileNumber,
        auth: auth,
        verificationCode_2: OTP
      })
    })
      .then(res => res.json())
      .then(res => {
        var result = res;
        return result;
      });
  }
}

//-----13 Freshdesk----//

export function FreshDeskQueryList(MobileNumber, auth) {
  return fetch(config.url + "/users/queries", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----14 Check Loan Approved-----//

export function CheckLoanApproved(MobileNumber, auth) {
  return fetch(config.url + "/users/checkApprove", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//-----14 Playstore Rating-----//

export function PlaystoreRating(MobileNumber, auth, rate, description) {
  return fetch(config.url + "/users/userRating", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      rate: rate,
      description: description
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//-----14 Playstore Rating-----//

export function FetchRewards(MobileNumber, auth) {
  return fetch(config.url + "/users/checkRewards", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

export function ClaimUpdateRewards(MobileNumber, auth) {
  return fetch(config.url + "/users/updateRewards", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}
