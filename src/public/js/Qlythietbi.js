

const formHeader = document.querySelector(".user_manager")
const userName = formHeader.querySelector(".user_info")

function switchbtn(checked, name) {
    // alert(checked);
    // console.log(checked);
    let date = new Date();
    var str = "0";
    var status = "";
    var id_device = "";
    if (name == 'led' && checked) { str = "1"; }
    else if (name == 'pump' && !checked) { str = "4"; }
    else if (name == 'pump' && checked) { str = "3"; }
    else if (name == 'fan' && !checked) { str = "8"; }
    else if (name == 'fan' && checked) { str = "7"; }
    else if (name == 'buzzer' && !checked) { str = "6"; }
    else if (name == 'buzzer' && checked) { str = "5"; }
    $.ajax({
        url: 'https://io.adafruit.com/api/v2/toilabin/feeds/bbc-' + name + '/data',
        dataType: 'json',
        type: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Host': 'io.adafruit.com',
            'Content-Type': 'application/json',
            'X-AIO-Key': 'aio_ouek49CwRvxSgRfeml8BCR4XkEjG'
        },
        data: JSON.stringify({ "value": str }),
        processData: false,
    })
    if (checked) {
        status = "On";
    } else {
        status = "Off";
    }
    if (name == "led") {
        id_device = "bbc-led"
    } else if (name == "pump") {
        id_device = "bbc-pump"
    } else if (name == "fan") {
        id_device = "bbc-fan"
    } else if (name == "buzzer") {
        id_device = "bbc-buzzer"
    }
    $.ajax({
        url: 'http://localhost:8080/user/history-devices',
        dataType: 'json',
        type: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({
            id: id_device,
            userName: userName.textContent,
            nameDevice: name,
            statusDevice: status,
            time: date
        })
    })
}