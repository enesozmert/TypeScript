class Ev {
    _odasayisi: number;
    _pencereSayisi: number;
    _kat: number;
    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this._odasayisi = odaSayisi
        this._pencereSayisi = pencereSayisi
        this._kat = kat
    }
    yemekYe() {
        console.log(this._kat + "katlı evde" + "Yemek yenildi")
    }
}
let ev = new Ev(1, 2, 3)
ev.yemekYe();
console.log(ev._kat)