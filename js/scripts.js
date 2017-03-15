function createData(obj) {

    var data = obj;
    return {

        get: function (key) {
            if (data[key] != undefined) {
                return data[key];
            }else{
                return "";
            }

        },
        set: function (key, value) {
            if (key.length != 0 && value.length != 0) {
                return data[key] = value;
            } else {
                console.log("Podaj wartości!");
            }


        }


    }
}


var data = new createData({});

data.set("name", "Janek");

console.log(data.get("name"));