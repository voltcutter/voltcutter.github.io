var stringToType = "voltcutter.github.io";
var i = 0;
const inverval = setInterval(() => {
    if (i >= stringToType.length) {
        clearInterval(inverval);
        return;
    }
    document.getElementById("funnytext").innerHTML += stringToType.charAt(i);
    i++;
}, 25);
