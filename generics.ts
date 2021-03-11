function deger(x: number): number {
    return x
}

function deger2(x: string): string {
    return x
}

function deger3<T>(x: T): T {
    return x
}

let sayi = deger(10)
console.log(sayi)

let sehir = deger2("Ankara")
console.log(sehir)

let sayi3 = deger3<number>(3)
let sehir3 = deger3<string>("Ankara3")
console.log(sayi3)
console.log(sehir3)

class GenericClass<T> {
    degisken: T
    fonksiyon(parametre: T) {
        return parametre
    }
}
let sinif = new GenericClass<string>()
sinif.fonksiyon("Ankara")
