class Ev {
    public _odasayisi: number;
    private _pencereSayisi: number; //ulaşılamaz
    public _kat: number;
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
class Kisi {
    protected _isim: string //inherit edilenlerden ulaşılabilir
    private _isimnew: string
    private _isimnewnew: string
    get isim(): string {
        return "Sayın : " + this._isimnewnew
    }
    set isim(ad: string) {
        this._isimnewnew = ad
    }
    kaydet(): void {
        console.log("Kisi kaydedildi")
    }
}
class Mustere extends Kisi {
    satisYap(): void {
        console.log("satiş yapıldı")
    }
}
class Personel extends Kisi {
    maasOde() {
        console.log("maaş ödendi")
    }
}
let musteri = new Mustere()
musteri.isim = "Engin";
console.log(musteri.isim)
musteri.kaydet()
musteri.satisYap()

let personel = new Personel()
personel.kaydet()
personel.maasOde()
