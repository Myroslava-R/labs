var object = { "1": 2, "2": 4, "3": 6 }

function toArray(obj) {
    var result = Object.keys(obj).map(function(key) {
        return [Number(key), obj[key]];
    });
    console.log(result);
}
toArray(object);