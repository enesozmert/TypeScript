var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Object.defineProperty(Kisi.prototype, "isim", {
        get: function () {
            return "Sayın : " + this._isimnewnew;
        },
        set: function (ad) {
            this._isimnewnew = ad;
        },
        enumerable: false,
        configurable: true
    });
    Kisi.prototype.kaydet = function () {
        console.log("Kisi kaydedildi");
    };
    return Kisi;
}());
var Mustere = /** @class */ (function (_super) {
    __extends(Mustere, _super);
    function Mustere() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mustere.prototype.satisYap = function () {
        console.log("satiş yapıldı");
    };
    return Mustere;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("maaş ödendi");
    };
    return Personel;
}(Kisi));
var musteri = new Mustere();
musteri.isim = "Engin";
console.log(musteri.isim);
musteri.kaydet();
musteri.satisYap();
var personel = new Personel();
personel.kaydet();
personel.maasOde();
