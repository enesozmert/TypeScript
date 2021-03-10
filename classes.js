var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this._odasayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat = kat;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + "katlı evde" + "Yemek yenildi");
    };
    return Ev;
}());
var ev = new Ev(1, 2, 3);
ev.yemekYe();
console.log(ev._kat);
