var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const userhelper = require('../Helpers/userHelpers')
const serviceSID = process.env.serviceSID
const accountSID = process.env.accountSID
const authTockon = process.env.authToken
const client = require('twilio')(accountSID, authTockon);


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// user signup with otp

router.post('/signupotp', (req, res) => {
  try {
    console.log(req.body);
    console.log(req.body.mobileNumber);
    let mobile = req.body.mobileNumber
    userhelper.getuserdetails(mobile).then((user) => {
      if (user) {
        res.status(400).json({ err: 'user already exist' })
      } else {
        client.verify
          .services(serviceSID)
          .verifications.create({
            to: `+91${req.body.mobileNumber}`,
            channel: "sms"
          }).then((resp) => {
            res.status(200).json(resp)
          }).catch((err) => {
            console.log("error", err);
          })
      }
    })
  } catch (err) {
    console.log("catch error", err);
  }
})

router.post('/resendotp', (req, res) => {
  let mobile = req.body.mobileNumber
  console.log("mobile ", mobile);
  try {
    client.verify
      .services(serviceSID)
      .verifications.create({
        to: `+91${mobile}`,
        channel: "sms"
      }).then((resp) => {
        res.status(200).json(resp)
      }).catch((err) => {
        console.log(err);
      })
  } catch (err) {
    console.log(err);
  }
})

router.post('/enterSignupOtp', (req, res) => {
  try {
    console.log(req.body);
    let OTP = req.body.otp
    let number = req.body.mobileNumber
    console.log(number);
    client.verify
      .services(serviceSID)
      .verificationChecks.create({
        to: `+91${number}`,
        code: OTP
      }).then(async (resp) => {
        if (resp.valid) {
          const { userName, email, password, mobileNumber, action, otp } = req.body
          data = {
            userName,
            email,
            password,
            mobileNumber
          }
          userhelper.doSignup(data).then((response) => {
            res.status(200).json({ success: 'success' })
          })
        } else {
          res.status(400).json({ err: 'invalid otp' })
        }
      }).catch((err) => {
        console.log(err);
      })
  } catch (err) {
    console.log(err);
  }
})




//user login

router.post('/login', (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body
    if (!email, !password) {
      res.status(400).json({ err: 'enter all details' })
    } else {
      userhelper.doLogin(req.body).then((response) => {
        if (response.loggedIn) {
          console.log("No error");
          res.status(200).json(response)
        } else {
          console.log("error");
          res.status(400).json({ err: "invalid userName or password" })
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  } catch (error) {
    console.log(error);
  }
})


router.post('/addbid', (req, res) => {
  // try{
  let formData = JSON.parse(req.body.data)
  console.log(formData);
  // }catch{
  //   console.log('error occuredggg')
  // }
})

module.exports = router;
