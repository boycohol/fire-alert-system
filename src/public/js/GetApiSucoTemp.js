$.getJSON("https://io.adafruit.com/api/v2/toilabin/feeds/bbc-temp/data?X-AIO-Key=aio_Nxul03GLcIb2tsoz1pXghnCzo5nA",function(data){
    var table = document.getElementById('incidentTableTemp');

    var dataLength = data.length;
    
    if (data[0].value > 60){ chay(); }

    for (var i = 0; i < dataLength; i++) {
        if (data[i].value > 60) {
            var row = table.insertRow();
            var cell = row.insertCell();
            cell.innerHTML = data[i].created_at;
            var cell2 = row.insertCell();
            cell2.innerHTML = data[i].value;
            var cell3 = row.insertCell();
            cell3.innerHTML = data[i].id;
        }
    }
    console.log(data)
})

function chay(){
    autoon('led');
    autoon('buzzer');
    autoon('pump');
}
function gas(){
    autoon('fan');
}
function autoon (name) {
    // alert(checked);
    // console.log(checked);
    var str="0";
    if (name == 'led' ){str="1";}
    else if (name == 'pump' ){str="3";}
    else if (name == 'fan' ){str="7";}
    else if (name == 'buzzer' ){str="5";}
    $.ajax({
        url:'https://io.adafruit.com/api/v2/toilabin/feeds/bbc-'+ name +'/data',
        dataType:'json',
        type:'post',
        headers:{
            'Content-Type':'application/json',
            'Host':'io.adafruit.com',
            'Content-Type':'application/json',
            'X-AIO-Key':'aio_Nxul03GLcIb2tsoz1pXghnCzo5nA'
        },
        data:JSON.stringify({"value":str}),
        processData:false,
        })
    
}