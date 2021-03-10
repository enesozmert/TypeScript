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
        throw new Error("Method not implemented.");
    }

}