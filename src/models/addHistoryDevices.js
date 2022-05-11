import pool from "../configs/connectDB";

let addHistoryDevices = async (id, userName, nameDevice, statusDevice, time) => {
    console.log(id)
    console.log(userName);
    console.log(nameDevice);
    console.log(statusDevice);
    console.log(time);
    try {
        let [data_res, fields] = await pool.query("insert into output_devices(ID, Name, Status,User,Time) values(?,?,?,?,?)", [id, nameDevice, statusDevice, userName, time]);
        return data_res
    }
    catch (e) {
        console.log(e);
    }
}
module.exports = {
    addHistoryDevices
}
