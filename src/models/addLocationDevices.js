import pool from "../configs/connectDB";

let addLocation = async (device, location, user) => {
    console.log("device: ", device);
    console.log("location: ", location);
    try {
        let [user_res, fields] = await pool.query("insert into input_devices(Name, Location,User) values(?,?,?)", [device, location, user]);
        console.log(user_res);
        return user_res;
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = {
    addLocation
}