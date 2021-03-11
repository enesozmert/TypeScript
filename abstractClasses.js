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
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
    };
    return KrediBase;
}());
var TuketiciKredi = /** @class */ (function (_super) {
    __extends(TuketiciKredi, _super);
    function TuketiciKredi() {
        return _super.call(this) || this;
    }
    TuketiciKredi.prototype.hesapla = function () {
        console.log("Tüketici kredisine göre hesap yapıldı.");
    };
    return TuketiciKredi;
}(KrediBase));
var MortgageKredi = /** @class */ (function (_super) {
    __extends(MortgageKredi, _super);
    function MortgageKredi() {
        return _super.call(this) || this;
    }
    MortgageKredi.prototype.hesapla = function () {
        console.log("Mortgage kredisine göre hesap yapıldı.");
    };
    MortgageKredi.prototype.baskaBirOperasyon = function () {
        console.log("Başka bir kredisine göre hesap yapıldı.");
    };
    return MortgageKredi;
}(KrediBase));
var tuketiciKredisi = new TuketiciKredi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();
var mortgageKredisi = new MortgageKredi();
mortgageKredisi.kaydet();
mortgageKredisi.hesapla();
mortgageKredisi.baskaBirOperasyon();
var kredi;
kredi = new TuketiciKredi();
kredi = new MortgageKredi();
