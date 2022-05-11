
import api from '../models/CreateData';
import historyDevice from "../models/getHistoryDevice";
import getlocation from "../models/getLocation";
import caculateDevice from "../models/caculateNumDevices";

var arrayDateIn = []
var arrayDateOut = []
let getHomepage = async (req, res) => {
    if (!req.session.userId) {
        return res.render('index.ejs', {
            userData: "",
            headerBtn: "Login",
            headerHref: "/login"
        })
    } else {
        return res.render('index.ejs', {
            userData: req.session.userId.user[0],
            headerBtn: "Logout",
            headerHref: "/logout"
        })
    }
}

let getDataAdafruit = async (req, res) => {
    await api.getInputdevices(arrayDateIn);
    await api.geOutputdevices(arrayDateOut);
    return res.render('StatisticPage.ejs', {
        userData: req.session.userId.user[0],
        headerBtn: "Logout",
        headerHref: "/logout"
    })
}
let getLoginPage = async (req, res) => {
    return res.render('SignIn.ejs', {
        userData: "",
        headerBtn: "Sign Up",
        headerHref: "/signup"
    })
}
let getSignupPage = async (req, res) => {
    return res.render('SignUp.ejs', {
        userData: "",
        headerBtn: "Login",
        headerHref: "/login"
    })
}

let getDangerListPage = async (req, res) => {
    return res.render('DangerList.ejs', {
        userData: req.session.userId.user[0],
        headerBtn: "Logout",
        headerHref: "/logout"
    })
}
let getDataListPage = async (req, res) => {
    return res.render('DataList.ejs', {
        userData: req.session.userId.user[0],
        headerBtn: "Logout",
        headerHref: "/logout"
    })
}
let getDeviceManagerPage = async (req, res) => {
    let userInfo = req.session.userId.user[0];
    let dataHistoryDevices = await historyDevice.getHistoryDevices();
    // console.log("dataHistoryDevices: ", dataHistoryDevices)
    if (userInfo.Authority == "Admin") {
        return res.render('DeviceManagerAdmin.ejs', {
            dataHisDevice: dataHistoryDevices,
            userData: userInfo,
            headerBtn: "Logout",
            headerHref: "/logout"
        })
    } else if (userInfo.Authority == "User") {
        return res.render('DeviceManagerUser.ejs', {
            userData: userInfo,
            headerBtn: "Logout",
            headerHref: "/logout"
        })
    }
}
let getHistoryPage = async (req, res) => {
    return res.render('History.ejs', {
        userData: req.session.userId.user[0],
        headerBtn: "Logout",
        headerHref: "/logout"
    })
}
let getLocationPage = async (req, res) => {
    console.log(req.body)
    let dataLocation = await getlocation.getLocationDB();
    let dataAllLocation = await getlocation.getAllLocation();
    let dataCaculate = await caculateDevice.caculateNumDevices();
    console.log(dataCaculate)
    return res.render('location.ejs', {
        all_location: dataAllLocation,
        data_location: dataLocation,
        userData: req.session.userId.user[0],
        headerBtn: "Logout",
        headerHref: "/logout"
    })
}
let logout = async (req, res) => {
    delete req.session.userId;
    res.redirect('/')
}


module.exports = {
    getHomepage, getDataAdafruit, getLoginPage,
    getSignupPage, getDangerListPage, getDataListPage,
    getDeviceManagerPage, getHistoryPage, logout,
    getLocationPage
}