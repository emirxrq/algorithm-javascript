/*
1. Bir dizi tanımla.
2. Aranacak öğeyi al.
3. Dizinin ilk elemanından başlayarak son elemanına kadar her öğeyi kontrol et.
4. Her öğeyi aranacak öğe ile karşılaştır.
5. Eğer öğe bulunursa, bulunan öğenin dizideki konumunu belirt ve döngüyü durdur.
6. Eğer öğe bulunamazsa, bulunamadığına dair bir mesaj yazdır.
*/

const hayvanlar = ["inek", "köpek", "kedi", "tavuk", "horoz"];
const arananHayvan = "yılan";

for (let i = 0; i < hayvanlar.length; i++) {
    const secilenHayvan = hayvanlar[i];

    const dogruHayvanmi = arananHayvan === secilenHayvan;

    if (i + 1 == hayvanlar.length && !dogruHayvanmi) {
        console.log("Hayvan dizide bulunamadı.");
    }

    if (dogruHayvanmi) {
        console.log(`Seçilen hayvan ${secilenHayvan} ve aranan hayvan ${arananHayvan} %100 eşleşti. \n 
        Hayvanın dizideki konumu: ${i}`);
        break;
    }
}