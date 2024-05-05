/*
1. İki başlangıç değeri olan bir dizi tanımla: 0 ve 1.
2. Fibonacci dizisinin her bir sonraki elemanını hesapla.
3. Her bir sonraki eleman, bir önceki iki elemanın toplamıdır.
4. Fibonacci dizisinin istenen bir elemanını bulmak için diziyi istenen uzunluğa kadar oluştur.
5. İstenen elemanı ekrana yazdır.
*/

const dizi = [0, 1];
const istenenEleman = 60;
let i = 0;


function fibonacciHesapla() {
    do {
        const sonrakiEleman = dizi[i] + dizi[i + 1];
        dizi.push(sonrakiEleman);
        console.log("Sonraki eleman: " + sonrakiEleman);
        i += 1;
    }
    while (dizi.length < istenenEleman)

    console.log(`${istenenEleman}. eleman: ${dizi[istenenEleman - 1]}`);
}

fibonacciHesapla();