abstract class KrediBase {
    constructor() {

    }
    kaydet(): void {

    }
    abstract hesapla(): void
}
class TuketiciKredi extends KrediBase {
    constructor() {
        super()
    }
    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı.");
    }
}
class MortgageKredi extends KrediBase {
    constructor() {
        super()
    }
    hesapla(): void {
       console.log("Mortgage kredisine göre hesap yapıldı.");
    }
    baskaBirOperasyon(): void {
        console.log("Başka bir kredisine göre hesap yapıldı.");
    }
}
let tuketiciKredisi = new TuketiciKredi()
tuketiciKredisi.hesapla()
tuketiciKredisi.kaydet()

let mortgageKredisi = new MortgageKredi()
mortgageKredisi.kaydet()
mortgageKredisi.hesapla()
mortgageKredisi.baskaBirOperasyon()

let kredi: KrediBase
kredi = new TuketiciKredi()

kredi = new MortgageKredi()