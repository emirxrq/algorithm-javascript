/*Bir dizi tanımla.
Dizi içindeki ilk elemanı en büyük sayı olarak ata.
Dizi elemanlarını sırayla kontrol et.
Her elemanı, şu ana kadar bulunan en büyük sayı ile karşılaştır.
Eğer eleman, şu ana kadar bulunan en büyük sayıdan daha büyükse, bu elemanı yeni en büyük sayı olarak ata.
Dizi sonuna kadar bu işlemi tekrarla.
En büyük sayıyı bulduktan sonra ekrana veya konsola yazdır.*/


const numbers = [10, 1, 2, 5];

let suanaKadarBulunanEnBuyukSayi = 0;

for (let i = 0; i < numbers.length; i++) {
    let dizidenAlinanSayi = numbers[i];
    let buyukmu = dizidenAlinanSayi > suanaKadarBulunanEnBuyukSayi;

    if (buyukmu)
    { 
        suanaKadarBulunanEnBuyukSayi = dizidenAlinanSayi;
    }

    console.log("Döngü şu kadar kez çalıştı: " + i);
}

console.log(suanaKadarBulunanEnBuyukSayi);