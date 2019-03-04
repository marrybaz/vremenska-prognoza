class Heroj {
    constructor(ime, energija) {
        this.ime = ime;
        this.energija = energija;
        this.iskustvo = 0;
    }

    napadni(borac) {
        if (this.energija <= 0 || borac.energija<= 0) return

        let en = Math.round(Math.random() * 20)
        borac.energija -= en
        this.iskustvo+=en*30
        console.log(`${borac.ime} je izgubio ${en} energije`)
        if (borac.energija <= 0) console.log(`${borac.ime} je mrtav`)
    }
}
class Mika extends Heroj { //ova klasa samo dodaje jos neka svojstva odredjenom objektu
    constructor(ime, energija){
        super(ime, energija)
        this.bojaKoze = "zelena"
    }
}

let mika = new Mika("Milan", 20);
let laza = new Heroj("Luka", 53);
let anja = new Heroj("Anja", 100);
let milica = new Heroj("Mila", 62);

for(let i = 0; i<10; i++){
    mika.napadni(laza)
    laza.napadni(mika)
}



