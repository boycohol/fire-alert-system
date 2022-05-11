
import userDirect from "../models/CreateUser"
import auth from "../models/AuthorityUser"
import locationDevice from "../models/addLocationDevices"
import historyDevice from "../models/addHistoryDevices"
import getlocation from "../models/getLocation"

let createUser = async (req, res) => {
    let userData = await userDirect.signupUser(req.body)
    return res.status(200).json({
        errCode: userData.errCode,
        errMsg: userData.errMsg,
        user: userData.user ? userData.user : {}
    })
}

let confirmUser = async (req, res) => {
    let { account, password } = req.body
    if (!account || !password) {
        return res.status(500).json({
            errCode: 3,
            errMsg: "Empty account or password"
        })
    }
    let userData = await userDirect.loginUser(account, password)
    if (userData.errCode == 0) {
        req.session.userId = userData
    }
    return res.status(200).json({
        errCode: userData.errCode,
        errMsg: userData.errMsg,
        user: userData.user ? userData.user : {}
    })
}

let authUpdate = async (req, res) => {
    console.log(req.body)
    let account_req = req.body.account;
    let exampleRadios = req.body.exampleRadios;
    let account_user = req.session.userId.user[0].Authority;
    let userData = await auth.authority(account_user, account_req, exampleRadios);
    return res.status(200).json({
        code: userData.code,
        Msg: userData.Msg,
        user: userData.user ? userData.user : {}
    })
}
let updateDevices = async (req, res) => {
    console.log(req.body)
    let { devices, location } = req.body;
    let user = req.session.userId.user[0].Name;
    let locationData = await locationDevice.addLocation(devices, location, user);
    console.log("addLocation:", locationData)
    return res.status(200).json({
        Msg: "Add devices success",
        locationData: locationData
    })
}

let historyDevices = async (req, res) => {
    console.log(req.body)
    let { id, userName, nameDevice, statusDevice, time } = req.body;
    let historyDeviceData = await historyDevice.addHistoryDevices(id, userName, nameDevice, statusDevice, time);
    console.log("history device: ", historyDeviceData)
}

/* let getLocation = async (req, res) => {
    console.log(req.body)
    let dataLocat = await getlocation.showLocation(req.body.location);
    return res.status(200).json({
        data_location: dataLocat
    })
} */

module.exports = {
    createUser, confirmUser, authUpdate, updateDevices, historyDevices
}