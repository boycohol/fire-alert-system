import pool from "../configs/connectDB";
import bcrypt from "bcryptjs";

let hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

let loginUser = async (account, password) => {
    let userData = {}
    try {
        let [user, fields] = await pool.query("SELECT * FROM users WHERE account=?", [account])
        // console.log(user[0])
        if (!user[0]) {
            userData.errCode = 1;
            userData.errMsg = "wrong account!!"
            userData.user = {}
        } else {
            if (bcrypt.compareSync(password, user[0].password)) {
                userData.errCode = 0;
                userData.errMsg = "ok"
                userData.user = user;
            } else {
                userData.errCode = 2;
                userData.errMsg = "wrong password!!"
                userData.user = {};
            }
        }
        return userData
    } catch (e) {
        console.log(e)
    }
}

let signupUser = async (userSignup) => {
    let userData = {}
    try {
        let [user, fields] = await pool.query("SELECT * FROM users WHERE account=?", [userSignup.account])
        if (user[0]) {
            userData.errCode = 1;
            userData.errMsg = "Account exist";
            userData.user = {}
        } else {
            let hashpassword = hashPassword(userSignup.password)
            let createUser = await pool.query("insert into users(Name,Phone,Authority,account,password) values (?,?,?,?,?)", [userSignup.Name, userSignup.Phone, "User", userSignup.account, hashpassword])
            userData.errCode = 0;
            userData.errMsg = "ok"
            userData.user = createUser
        }
        return userData
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    loginUser, signupUser
}