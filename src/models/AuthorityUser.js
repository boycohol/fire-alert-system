import pool from "../configs/connectDB";
let authority = async (account_user, account_req, Authority) => {
    console.log(account_user);
    console.log(account_req);
    console.log(Authority);
    let userData = {}
    if (account_user == "Admin") {
        if (Authority && account_req) {
            try {
                let [user, fields] = await pool.query("select * from users where account = ?", [account_req]);
                if (!user[0]) {
                    userData.code = 1;
                    userData.Msg = "This Account doesn't exist";
                    userData.user = {}
                } else {
                    if (Authority == "Admin") {
                        if (user[0].Authority == 'Admin') {
                            userData.code = 2;
                            userData.Msg = "This account is already admin";
                            userData.user = user[0]
                        } else if (user[0].Authority == 'User') {
                            let updateUser = await pool.query("update users set Authority = ? where account = ?", [Authority, account_req]);
                            userData.code = 0;
                            userData.Msg = "Update success";
                            userData.user = updateUser;
                        }
                    } else {
                        if (user[0].Authority == 'User') {
                            userData.code = 2;
                            userData.Msg = "This account is already user";
                            userData.user = user[0];
                        } else if (user[0].Authority == 'Admin') {
                            let updateUser = await pool.query("update users set Authority = ? where account = ?", [Authority, account_req]);
                            userData.code = 0;
                            userData.Msg = "Update success";
                            userData.user = updateUser;
                        }
                    }

                }
            } catch (e) {
                console.log(e);
            }
        } else {
            userData.code = 3;
            userData.Msg = "Empty account"
            userData.user = {}
        }
    } else {
        userData.code = 4;
        userData.Msg = "You are not admin, not authority"
        userData.user = {}
    }
    return userData;
}

module.exports = {
    authority
}