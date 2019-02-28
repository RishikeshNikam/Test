import config from "../config";

//-----1 API call to Check if Mobile Number is registered-----//

export function VerifyMobileNumber(MobileNumber) {
  return fetch(config.url + "/users/query", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({ phone: MobileNumber })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----2 API call to get the OTP-----//

export function GetOTP(MobileNumber, _otp) {
  return fetch(config.url + "/users/verifydevice", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      phone: MobileNumber,
      otp: _otp,
      carrier: "Web",
      nfc: "Web",
      device: "Web",
      version_number: "Web",
      version_code: "Web",
      os: "Web",
      imei_1: "Web",
      imei_2: "Web"
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----3 API call to get the OTP for new user-----//

export function GetOTPNewUser(MobileNumber, _otp) {
  return fetch(config.url + "/users/verifyregister", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      phone: MobileNumber,
      otp: _otp,
      carrier: "Web",
      nfc: "Web",
      device: "Web",
      version_number: "Web",
      version_code: "Web",
      os: "Web",
      imei_1: "Web",
      imei_2: "Web"
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----15 Register User----//

export function RegisterUser(phone, fname, lname, email, city, dob, gender) {
  return fetch(config.url + "/users/register", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      phone: phone,
      name: fname + " " + lname,
      email: email,
      city: city,
      dob: dob,
      gender: gender
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----16 Fetch Category----//

export function FetchCategory(MobileNumber, auth) {
  return fetch(config.url + "/users/fetchcategory", {
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

//-----17 Set Category----//

export function SetCategory(MobileNumber, auth, category) {
  return fetch(config.url + "/users/category", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      value: category
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//-----10 API call to fetch Lender EMI details for dashboard-----//

export function GetDashboardStats(MobileNumber, auth) {
  return fetch(config.url + "/users/lenderEmiDetails", {
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

//---------------------------------------------------//

//-----18 Check Details for green and yellow----//

export function CheckProfileDetails(MobileNumber, auth) {
  return fetch(config.url + "/users/checkDetails", {
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

//-----19 Fetch Personal Details in profile----//

export function FetchPersonalDetails(MobileNumber, auth) {
  return fetch(config.url + "/users/fetchpersonaldetails", {
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

//-----20 Fetch Professional Details in profile----//

export function FetchProfessionalDetails(MobileNumber, auth) {
  return fetch(config.url + "/users/fetchProfessionalDetails", {
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

//-----21 Fetch Bank Details in profile----//

export function FetchBankDetails(MobileNumber, auth) {
  return fetch(config.url + "/users/fetchbankdetails", {
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

//-----22 Fetch Documents Details in profile----//

export function FetchDocumentsDetails(MobileNumber, auth) {
  return fetch(config.url + "/users/fetchDocumentsDetails", {
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

//-----23 Save personal Details in profile----//

export function SavePersonalDetails(
  MobileNumber,
  auth,
  name,
  email,
  gender,
  dob,
  address,
  city,
  pincode,
  paddress,
  pcity,
  ppin,
  aadhar,
  pan,
  updates
) {
  return fetch(config.url + "/users/personaldetails", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      name: name,
      email: email,
      gender: gender,
      dob: dob,
      address: address,
      city: city,
      pin: pincode,
      permanent_address: paddress,
      permanent_city: pcity,
      permanent_pin: ppin,
      aadhar: aadhar,
      pan: pan,
      updates: updates
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----24 Save academic Details in profile----//

export function SaveAcademicDetails(
  MobileNumber,
  auth,
  college,
  enrollment,
  course,
  address,
  city,
  pin,
  expenses,
  source,
  accomodation,
  credit_date,
  purpose,
  start_year,
  end_year
) {
  var updates = [];
  return fetch(config.url + "/users/student", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      college: college,
      enrollment: enrollment,
      course: course,
      address: address,
      city: city,
      pin: pin,
      expenses: expenses,
      source: source,
      accomodation: accomodation,
      credit_date: credit_date,
      purpose: purpose,
      start_year: start_year,
      end_year: end_year,
      updates: updates
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----25 Save Bank Details in profile----//

export function SaveBankDetails(MobileNumber, auth, accNumber, accName, ifsc) {
  return fetch(config.url + "/users/bankdetails", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      accNumber: accNumber,
      accName: accName,
      ifsc: ifsc
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----26 Fetch Documents Details in profile----//

export function IFSCCheck(ifsc) {
  return fetch("https://ifsc.razorpay.com/" + ifsc, {})
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----27 Save Employee Details in profile----//

export function SaveEmployeeDetails(
  MobileNumber,
  auth,
  company_name,
  company_address,
  company_city,
  company_pin,
  income,
  current_working_experiance,
  sector,
  occupation,
  total_working_experiance,
  salary_date
) {
  var updates = [];
  return fetch(config.url + "/users/employee", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      company_name: company_name,
      company_address: company_address,
      company_city: company_city,
      company_pin: company_pin,
      income: income,
      current_working_experiance: current_working_experiance,
      sector: sector,
      occupation: occupation,
      total_working_experiance: total_working_experiance,
      salary_date: salary_date,
      updates: updates
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----28 Save Start up Details in profile----//

export function SaveStartupDetails(
  MobileNumber,
  auth,
  business_nature,
  company_name,
  address,
  city,
  pin,
  turnover,
  business_age,
  business_mode,
  business_type,
  profit
) {
  var updates = [];
  return fetch(config.url + "/users/startupDetails", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      business_nature: business_nature,
      company_name: company_name,
      address: address,
      city: city,
      pin: pin,
      turnover: turnover,
      business_age: business_age,
      business_mode: business_mode,
      business_type: business_type,
      profit: profit,
      updates: updates
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

//-----29 Fetch Documents Details in profile----//

export function SaveUserDocuments(
  MobileNumber,
  auth,
  category,
  aadhar_type,
  aadhar_card_image,
  aadhar_type_back,
  aadhar_card_image_back,
  pan_type,
  pan_card_image,
  selfieType,
  selfie,
  studentIdType,
  studentId,
  studentIdBackType,
  studentIdBack,
  imageEmployeeIDType,
  imageEmployeeID,
  imageEmployeeIDBackType,
  imageEmployeeIDBack,
  bank_name,
  bankStatement1,
  businessProofFrontType,
  businessProofFront,
  businessProofType
) {
  var apiName = "";
  if (parseInt(category, 10) === 1) {
    apiName = "studentDocumentDetails";
    var body1 = JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      aadhar_type: aadhar_type,
      aadhar_card_image: aadhar_card_image,
      aadhar_type_back: aadhar_type_back,
      aadhar_card_image_back: aadhar_card_image_back,
      pan_type: pan_type,
      pan_card_image: pan_card_image,
      selfieType: selfieType,
      selfie: selfie,
      studentIdType: studentIdType,
      studentId: studentId,
      studentIdBackType: studentIdBackType,
      studentIdBack: studentIdBack,
      bank_name: bank_name,
      bankStatement1: bankStatement1
    });
  }
  if (parseInt(category, 10) === 2) {
    apiName = "employeeDocumentDetails";
    var body1 = JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      aadhar_type: aadhar_type,
      aadhar_card_image: aadhar_card_image,
      aadhar_type_back: aadhar_type_back,
      aadhar_card_image_back: aadhar_card_image_back,
      pan_type: pan_type,
      pan_card_image: pan_card_image,
      selfieType: selfieType,
      selfie: selfie,
      imageEmployeeIDType: imageEmployeeIDType,
      imageEmployeeID: imageEmployeeID,
      imageEmployeeIDBackType: imageEmployeeIDBackType,
      imageEmployeeIDBack: imageEmployeeIDBack,
      bank_name: bank_name,
      bankStatement1: bankStatement1
    });
  }
  if (parseInt(category, 10) === 3) {
    apiName = "startupDocumentDetails";
    var body1 = JSON.stringify({
      mobile: MobileNumber,
      auth: auth,
      aadhar_type: aadhar_type,
      aadhar_card_image: aadhar_card_image,
      aadhar_type_back: aadhar_type_back,
      aadhar_card_image_back: aadhar_card_image_back,
      pan_type: pan_type,
      pan_card_image: pan_card_image,
      selfieType: selfieType,
      selfie: selfie,
      bank_name: bank_name,
      bankStatement1: bankStatement1,
      businessProofFrontType: businessProofFrontType,
      businessProofFront: businessProofFront,
      businessProofType: businessProofType
    });
  }
  return fetch(config.url + "/users/" + apiName, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: body1
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}

//---------------------------------------------------//

////////////BORROWER APIS BELOW////////////////////////
//---------------------------------------------------//

//-----1 API call to fetch the Borrower's Current loan-----//

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
