function selamver(isim: string) {
    return "Merhaba " + isim
}
let mesaj = selamver('Engin2')
console.log(mesaj)
let sehir: string
sehir = "Ankara"
let dogrulugu: boolean
dogrulugu = false

let sayilar: number[] = [1, 2, 3]
let sayilar2: Array<number> = [1, 2, 3]
let dizi: [number, string] = [2, "ANKARA"]

enum Renk { Kirmizi, Siyah, Mavi }
let renk: Renk = Renk.Kirmizi

let deger: any = "Ankara"
deger = 2
deger = true
deger = {}

let deger2: void = undefined
function selamVer2(): void {
    console.log("Merhaba")
}
let yas:number;
yas=10
class Musteri{
    
}