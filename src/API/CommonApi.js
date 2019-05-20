import config from "../config";
import EncFunction from "./Crypto";

/**
 * 1. API call to Check if Mobile Number is registered.
 * @param {string} MobileNumber
 */
export function VerifyMobileNumber(MobileNumber) {
  var json = { phone: MobileNumber };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/query", {
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
 * 2. API call to get the OTP.
 * @param {string} MobileNumber
 * @param {string} _otp
 */
export function GetOTP(MobileNumber, _otp) {
  var json = {
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
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/verifydevice", {
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
 * 3. API call to get the OTP for new user.
 * @param {string} MobileNumber
 * @param {string} _otp
 */
export function GetOTPNewUser(MobileNumber, _otp) {
  var json = {
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
  };
  var encBody = EncFunction.encrypt(json);

  return fetch(config.url + "/users/verifyregister", {
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
 * 4. Api call to register new user.
 * @param {string} phone
 * @param {string} fname
 * @param {string} lname
 * @param {string} email
 * @param {string} city
 * @param {string} dob
 * @param {string} gender
 */
export function RegisterUser(phone, fname, lname, email, city, dob, gender) {
  var json = {
    phone: phone,
    name: fname + " " + lname,
    email: email,
    city: city,
    dob: dob,
    gender: gender
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/register", {
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
 * 5. Api call to fetch user category.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function FetchCategory(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);

  return fetch(config.url + "/users/fetchcategory", {
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
 * 6. Api call to set user category.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {int} category
 */
export function SetCategory(MobileNumber, auth, category) {
  var json = {
    mobile: MobileNumber,
    auth: auth,
    value: category
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/category", {
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
 * 7. Api call to get dashboard statistics.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function GetDashboardStats(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/lenderEmiDetails", {
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
 * 8. Check Details for green and yellow for profile.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function CheckProfileDetails(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/checkDetails", {
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
 * 9. Fetch Personal Details in profile.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function FetchPersonalDetails(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/fetchpersonaldetails", {
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
 * 10. Fetch Professional Details in profile.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function FetchProfessionalDetails(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/fetchProfessionalDetails", {
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
 * 11. Fetch Bank Details in profile.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function FetchBankDetails(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/fetchbankdetails", {
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
 * 12. Fetch Document Details in profile.
 * @param {string} MobileNumber
 * @param {string} auth
 */
export function FetchDocumentsDetails(MobileNumber, auth) {
  var json = {
    mobile: MobileNumber,
    auth: auth
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/fetchDocumentsDetails", {
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
 * 13. Save personal Details in profile.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} name
 * @param {string} email
 * @param {string} gender
 * @param {string} dob
 * @param {string} address
 * @param {string} city
 * @param {string} pincode
 * @param {string} paddress
 * @param {string} pcity
 * @param {string} ppin
 * @param {string} aadhar
 * @param {string} pan
 * @param {json} updates
 */
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
  var json = {
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
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/personaldetails", {
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
 * 14. Save academic Details in profile.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} college
 * @param {string} enrollment
 * @param {string} course
 * @param {string} address
 * @param {string} city
 * @param {string} pin
 * @param {string} expenses
 * @param {string} source
 * @param {string} accomodation
 * @param {string} credit_date
 * @param {string} purpose
 * @param {string} start_year
 * @param {string} end_year
 */
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

  var json = {
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
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/student", {
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
 * 15. Save Bank Details in profile.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} accNumber
 * @param {string} accName
 * @param {string} ifsc
 */
export function SaveBankDetails(MobileNumber, auth, accNumber, accName, ifsc) {
  var json = {
    mobile: MobileNumber,
    auth: auth,
    accNumber: accNumber,
    accName: accName,
    ifsc: ifsc
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/bankdetails", {
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
 * 16. Check if IFSC code is valid or not.
 * @param {string} ifsc
 */
export function IFSCCheck(ifsc) {
  return fetch("https://ifsc.razorpay.com/" + ifsc, {})
    .then(res => res.json())
    .then(res => {
      var resulti = res;
      return resulti;
    });
}

/**
 * 17. Save Employee Details in profile.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} company_name
 * @param {string} company_address
 * @param {string} company_city
 * @param {string} company_pin
 * @param {string} income
 * @param {string} current_working_experiance
 * @param {string} sector
 * @param {string} occupation
 * @param {string} total_working_experiance
 * @param {string} salary_date
 */
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

  var json = {
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
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/employee", {
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
 * 18. Save Start up Details in profile.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {string} business_nature
 * @param {string} company_name
 * @param {string} address
 * @param {string} city
 * @param {string} pin
 * @param {string} turnover
 * @param {string} business_age
 * @param {string} business_mode
 * @param {string} business_type
 * @param {string} profit
 */
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

  var json = {
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
  };
  var encBody = EncFunction.encrypt(json);
  return fetch(config.url + "/users/startupDetails", {
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
 * 19. Save document details in profile.
 * @param {string} MobileNumber
 * @param {string} auth
 * @param {int} category
 * @param {int} aadhar_type
 * @param {string} aadhar_card_image
 * @param {int} aadhar_type_back
 * @param {string} aadhar_card_image_back
 * @param {int} pan_type
 * @param {string} pan_card_image
 * @param {int} selfieType
 * @param {string} selfie
 * @param {int} studentIdType
 * @param {string} studentId
 * @param {int} studentIdBackType
 * @param {string} studentIdBack
 * @param {int} imageEmployeeIDType
 * @param {string} imageEmployeeID
 * @param {int} imageEmployeeIDBackType
 * @param {string} imageEmployeeIDBack
 * @param {string} bank_name
 * @param {string} bankStatement1
 * @param {int} businessProofFrontType
 * @param {string} businessProofFront
 * @param {int} businessProofType
 */
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
    var json = {
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
    };
    var encBody = EncFunction.encrypt(json);

    var body1 = JSON.stringify({
      encryptedData: encBody
    });
  }
  if (parseInt(category, 10) === 2) {
    apiName = "employeeDocumentDetails";
    var json = {
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
    };
    var encBody = EncFunction.encrypt(json);
    var body1 = JSON.stringify({
      encryptedData: encBody
    });
  }
  if (parseInt(category, 10) === 3) {
    apiName = "startupDocumentDetails";
    var json = {
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
    };
    var encBody = EncFunction.encrypt(json);
    var body1 = JSON.stringify({
      encryptedData: encBody
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
      var decData = EncFunction.decrypt(res.encryptedData);

      return decData;
    });
}

/**
 * 20. Fetch alternate phone number details.
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
 * 21. Save Alternate Contact.
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
 * 22. OTP Verification for alternate Contact.
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
 * 23. Playstore Rating
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
