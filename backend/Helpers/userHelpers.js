var db = require('../config/connections')
var collection = require('../config/collections')
const { resolve } = require('path')
const bcrypt = require('bcrypt')
const { reject } = require('bcrypt/promises')
const { status } = require('express/lib/response')

module.exports = {
    doSignup: (data) => {
        return new Promise(async (resolve, reject) => {
            let response = {}
            let user = await db.get().collection(collection.USERCOLLECTION).findOne({ email: data.email })
            if (user) {
                console.log(data.email + "  user already exists");
                response.signupError = true;
                resolve(response)
            } else {
                data.password = await bcrypt.hash(data.password, 10)
                db.get().collection(collection.USERCOLLECTION).insertOne(data).then((response) => {
                    response.signuperror = false;
                    resolve(response)
                }).catch((response) => {
                    console.log("error occured");
                })
            }
        })
    },
    doLogin: (data) => {
        return new Promise(async (resolve, reject) => {
            let response = {}
            let user = await db.get().collection(collection.USERCOLLECTION).findOne({ email: data.email })
            // console.log(user);
            if (user) {
                await bcrypt.compare(data.password, user.password).then((status) => {
                    if (status) {
                        console.log('loginSuccessfull');
                        response.loggedIn = true;
                        response.user = user;
                        resolve(response)
                    } else {
                        console.log("Login failed");
                        response.loggedIn = false;
                        resolve(response)
                    }
                })
            } else {
                console.log("Login failed");
                response.loggedIn = false;
                resolve(response)
            }
        })
    },
    getuserdetails: (mobile) => {
        return new Promise(async (resolve, reject) => {
            let user = await db.get().collection(collection.USERCOLLECTION).findOne({ mobileNumber: mobile })
            resolve(user)
        })
    }
}