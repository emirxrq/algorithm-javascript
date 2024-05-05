//EBOB (En büyük ortak bölen) hesaplayıcı algoritma

/*
1. İki sayı al.
2. Sayılar arasındaki en küçük sayıyı belirle.
3. Bu sayıdan başlayarak 1'e kadar tüm tam sayıları kontrol et.
4. Her bir tam sayıyı, her iki sayıya da bölebilir mi diye kontrol et.
5. En büyük böleni (EBOB) belirle ve ekrana yazdır.
*/

const readline = require('readline');

const okuyucu = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

okuyucu.question("Lütfen 1. sayıyı girin: ", (sayi1) => {
    okuyucu.question("Lütfen 2. sayıyı girin: ", (sayi2) => {
        sayi1 = parseInt(sayi1);
        sayi2 = parseInt(sayi2);
        const ebob = EBOBHesapla(sayi1, sayi2);

        console.log(`${sayi1} ve ${sayi2} sayılarının EBOB'u ${ebob}`); 

        okuyucu.close();
    })
})


function EBOBHesapla(sayi1, sayi2) {
    let ebob = 1;
    const enKucukSayi = Math.min(sayi1, sayi2);

    for (let i = 2; i <= enKucukSayi; i++) {
        if (sayi1 % i === 0 && sayi2 % i === 0) {
            ebob = i;
        }
    }

    return ebob;
}
