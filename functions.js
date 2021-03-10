function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
topla("ab", "ab");
topla2(2, 2);
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(2, 4));
console.log(topla("Ankara", 4));
console.log(topla2(2, 4));
console.log(topla3(4, 8));
function topla4(x, y) {
    if (y === void 0) { y = 0; }
    return x + y;
}
console.log(topla4(3, 3));
function topla5(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(topla5(3));
function davetEt(ilkDaveltli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDaveltli + digerleri.join(" ");
}
console.log(davetEt("Engin", "Derin", "Salih", "Ahmet"));
