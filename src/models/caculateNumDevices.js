import pool from "../configs/connectDB";

let caculateNumDevices = async () => {
    let arrayLocation = [];
    try {
        let [data, fields] = await pool.query("select Location from input_devices")
        data.forEach((element) => {
            let deviceLocation = {
                location: "",
                numofDevice: 0
            };
            if (deviceLocation.location == element.Location) {
                deviceLocation.numofDevice++;
            } else {
                deviceLocation.location = element.Location;
                deviceLocation.numofDevice++;
            }
            arrayLocation.push(deviceLocation)
        })
        console.log(arrayLocation)
        arrayLocation.forEach(async (element) => {
            try {
                let data_res = await pool.query("insert into location(Name, Number_devices) value(?,?)", [element.location, element.numofDevice])
                console.log(data_res)
                return data_res
            } catch (e) {
                console.log(e)
            }
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    caculateNumDevices
}