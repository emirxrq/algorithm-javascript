//Faktöriyel hesaplama

function faktoriyelHesapla(val) {
    let newVal = 1;
    for (let i = val; i > 1; i--) {
        console.log(`${i} ile ${newVal} çarpılıyor.`);
        newVal = i * newVal;

    }

    return newVal;
}


const faktoriyel = faktoriyelHesapla(1);
console.log(faktoriyel);