import config from "../config";

//-----4 API call to get all Assigned Loans-----//

export function GetAssignedLoans(MobileNumber, auth) {
  return fetch(config.url + "/users/fetchActiveLends", {
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

export function GetBorrowerName(MobileNumber, auth, loan_Id) {
  return fetch(config.url + "/users/disburseLoanDetail", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      loanId: loan_Id
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result.loan.userId.name;
    });
}

//---------------------------------------------------//

//-----6 API call to fetch the Borrower's Name by loan id-----//

export function GetLenderDetails(MobileNumber, auth) {
  return fetch(config.url + "/users/lenderHome", {
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

//-----7 API call to fetch Upcoming EMIs pagination-----//

export function upcomingEmis(MobileNumber, auth, page) {
  return fetch(config.url + "/users/upcomingEmis?page=" + page, {
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

//-----8 API call to fetch Settled EMIs pagination-----//

export function settledEmis(MobileNumber, auth, page) {
  return fetch(config.url + "/users/settledEmis?page=" + page, {
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

//-----9 API call to fetch Paid EMIs pagination-----//

export function PaidEmisPage(MobileNumber, auth, page) {
  return fetch(config.url + "/users/paidEmis?page=" + page, {
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

//-----11 API call to lend money----//

export function LendMoney(MobileNumber, auth, amount, duration) {
  return fetch(config.url + "/users/lendmoney", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      principle: amount,
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

//-----12 Freshchat get restore ID----//

export function FreshChatRestoreId(MobileNumber, auth, restoreId) {
  return fetch(config.url + "/users/freshchatrestoreid", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      restoreId: restoreId
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----13 Fetch Fresh Chat Details----//

export function FetchFreshChatDetails(MobileNumber, auth) {
  return fetch(config.url + "/users/fetchfreshchatdetails", {
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

//-----14 Fetch Fresh Chat Details----//

export function FetchLegalLender(MobileNumber, auth) {
  return fetch(config.url + "/users/fetchLegalLender", {
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

//-----31 Monthly Portfolio----//

export function MonthlyPortfolio(MobileNumber, auth, userid, month, year) {
  return fetch(config.url + "/users/lenderMaxRunning/" + userid, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      auth: auth,
      mobile: MobileNumber,
      monthAndYear: year + "-" + month
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//-----9 API call to fetch Paid EMIs pagination-----//

export function AutoLend(MobileNumber, auth, autolend) {
  return fetch(config.url + "/users/autoLend", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      autoLend: autolend
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----9 API call to fetch Paid EMIs pagination-----//

export function LendingCalculator(MobileNumber, auth) {
  return fetch(config.url + "/users/lendingcalculator", {
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

//-----31 Lender Escrow History----//

export function EscrowHistory(MobileNumber, auth) {
  return fetch(config.url + "/users/lenderEscrowHistory", {
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
