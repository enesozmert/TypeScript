function topla(x, y) {
    return x + y
}
function topla2(x: number, y: number): number {
    return x + y
}
topla("ab", "ab")
topla2(2, 2)

let topla3 = function (x: number, y: number): number {
    return x + y
}

console.log(topla(2, 4))
console.log(topla("Ankara", 4))
console.log(topla2(2, 4))
console.log(topla3(4, 8))

function topla4(x: number, y: number = 0): number {
    return x + y
}
console.log(topla4(3, 3))
function topla5(x: number, y?: number): number {
    if (y) {
        return x + y
    }
    return x
}
console.log(topla5(3))

function davetEt(ilkDaveltli: string, ...digerleri: string[]) {
    return ilkDaveltli + digerleri.join(" ")
}
console.log(davetEt("Engin", "Derin", "Salih", "Ahmet"))
console.log(davetEt("Engin", "Derin", "Salih", "Ahmet"))
