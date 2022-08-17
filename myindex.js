
// 1- ES6 Template Literals(Şablon dizileri )
const isim = "Deniz";

const mesaj = `Merhaba, ${isim}`;

console.log(mesaj);

const birim_fiyat = 100;
const adet = 3;
const para_birimi = "TL";
const toplam_tutar = `Toplam: ${birim_fiyat * adet} ${para_birimi}`;
console.log(toplam_tutar);

// 2- Shorthand Property Names (Kısayol obje anahtarı isimleri)

const isim2 = "İbrahim"
const yas = 26;
// {isim : "İbrahim", yas: 35}
const kullanici_objesi = { isim, yas }
console.log(kullanici_objesi);


// function Sayac({ baslangicDegeri, adim }) {
//     // Burada object destruction var.
//     const [sayac, setSayac] = useCounter({ baslangicDegeri, adim }); // Burada kısayol kullanım var.
//     return <button onClick={setSayac}>{sayac}</button>;
//   }

// 3- Arrow Functions ( Oklu fonksiyon ifadeleri )

console.log(topla(3, 5));
function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
}

const topla2 = (sayi1, sayi2) => {
    return sayi1 + sayi2;
}
console.log(topla2(3, 6));

const topla3 = (sayi1, sayi2) => sayi1 + sayi2
console.log(topla3(1, 1));


// 4- object / Array Destructuring
// obje ve dizilerin parçalarına bölünüp değişkenlere atanması

const kullanici = { name: "Deniz", age: 26, adress: "İzmir" };
const { name, age } = kullanici;
console.log(name);
console.log(age);
const kullanici2 = { name2: "Deniz", age2: 26, adress2: "İzmir", country2: "Türkiye", job: "Bilgisayar Müh." };
const { name222, adress2, ...kalanlar } = kullanici2;


// rest operator (rest/spread) bu şekilde kullanıldığına, isimleri name2 olarak alırken, objenin geri kalanlarını kalanlar objesine atar.
console.log(name222);//burada name222 olarak kullanılma sebebi, objede ki isimle birebir olması gerekmediğini göstermek. 
console.log(kalanlar);//yani name2 de ki ismi, oluşturduğumuz objede name2 yazdığımız için atamadı, atama sırayla yapılıyor.ilk sırada olduğun için atadı. 
console.log(adress2);



function KullaniciGoster({ isim, yas }) {
    return `${isim} isimli kullanıcı ${yas} yaşındadır.`;           //react
}



const sayilar = [1, 2, 3, 4, 5];
const [bir, iki, uc, dort, bes] = sayilar;

console.log(bir, iki, uc, dort, bes);

const [birinciEleman, ikinciEleman, ...kalanElemanlar] = sayilar;
console.log(birinciEleman);
console.log(kalanElemanlar);

// const[...ilkElemanlar, besinci]= sayilar; böyle bir kullanım söz konusu değil



// 5- Parameter Defaults(Varsayılan Parametre Değerleri)

function topla4(sayi1, sayi2) {
    return sayi1 + sayi2; // 3 + undefined
}
console.log(topla4(3)); //İkinci parametre yazılmadığı için NaN(Not a Number) sonuç döner. 

//bu sorunu aşmak için default değer ataması yapabiliriz.


function topla5(sayi1, sayi2 = 1) {
    return sayi1 + sayi2;
}
console.log(topla5(3)); // Default değer fonksiyonda 1 olarak girildiği için, eğer herhangi bir sayı girilmezse 1 olarak işleme sokar.


// Bunu react'ta reducer olarak kullanabiliyoruz. Örnek olarak:

const STATE_BASLANGICI = { yukleniyor: false, yazilar: [] };
const reducer = (state = STATE_BASLANGICI, action) => { //state değeri başlangıç olarak STATE_BASLANGICI değeri atadık. Yani Sayfa ilk açıldığında herhangi bir 
    // yazı olmadan çalışacak. Biz herhangi bir şey eklediğimizde onu gösterecek.
    //reducer detayları
    return state;
}


// 6- Rest / Spread Operator (Toparlama / Yayma Operatörü)
// Rest Operatöründen  Object/Array destructuring içinde bahsedildiği gibi

let kullanicim = { isim: "Deniz", yas: 27, sehir: "Bartın" };
kullanicim.sehir = "İzmir"; //YANLIŞ React için

kullanicim = { isim: "Deniz", yas: 27, sehir: "Bartın", sehir: "İzmir" };
// obje oluşturup içine kopyalanır ve sehir değiştirilecekse, tekrar yanına sehir olarak yenisi yazılır, sağda olanı alır obje
//bunu uzun uzun yazmak yerine rest/spread kullanılır:

kullanicim = { ...kullanicim, sehir: "Manisa" };


console.log(kullanicim);



//javascript
INITIAL_STATE = {
    yukleniyor: false,
    hataMesaji: "",
    arabalar: ["Mercedes", "BMW", "Audi"],
};

// dispatch({type:"ARABA_EKLE", payload:"VW"})  çalıştırıldığında arabalar kopyalanır, action.payload olarak "VW" eklenir sona.
const myReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ARABA_EKLE":
            return { ...state, arabalar: [...state.arabalar, action.payload] };
        default:
            return state;
    }
};


//state.arabalar // ["Mercedes", "BMW", "Audi","VW"] olur

//normalde aynı şeyi state.arabalar.push("VW") şeklinde de yapabilirdik 

// 0001(RAM'de tutulan yer) <- {yukleniyor, hataMesaji, arabalar } <- state(yeni eklenen state de burayı gösterecek aynı yeri)
// 0002(RAM'de tutulan yer) <- {yukleniyor, hataMesaji, [...arabalar, "VW"] } <-state (Bu şekilde yapıldığında ramde yeni yer açılır oraya kopyalanır, eskisi silinir. 
// Böylelikle kullanıcı tarayıcısına da direk değişiklik olarak gider ve genelde react ekosisteminde bu şekilde kullanılır)


// 7- EK DERS Rest / Spread Operator (Toparlama / Yayma Operatörü)

function topla6(sayi1, sayi2, sayi3) {
    return sayi1 + sayi2 + sayi3;
}
const sayilarim = [1, 2, 3]; // bu şekilde direk dizi gönderilirse çalışmaz, sonucu : 1,2,3undefinedundefined olur
console.log(topla6(sayilarim));
console.log(topla6.apply(null, sayilarim)); // bu şekilde yapılırsa ayırarak ekler ve çalışır.
console.log(topla6(...sayilarim)); // ama en doğru şekli herhangi bir keyword olmadan spread ile yapmaktır. yine doğru sonucu  verir.


const sayilarim1 = [1, 2, 3];
const sayilarim2 = [4, 5, 6];

const birlesmisDizi = sayilarim1.concat(sayilarim2);
console.log(birlesmisDizi);

// ama en doğru şekli, yeni dizi oluşturarak :

const birlesmisDizi2 = [...sayilarim1, ...sayilarim2]
console.log(birlesmisDizi2);


// 8- Ternary Conditional Operators (üç değişkenli koşul operatörleri)

// koşul ? doğruysa : Yanlışsa ;  yani if :
/* if(kosul){
doğruysa
}else{
yanlışsa
}
*/

const koprununDurumu = "belirsiz";
koprununDurumu === "acik" ? console.log("Köprü Açık") : console.log("Köprü Kapalı");  // Üç eşittir kullandığınızda iki değerin hem tipini hem de değerini karşılaştırır
koprununDurumu == "kapali" ? console.log("Köprü Açık") : console.log("Köprü Kapalı"); // iki eşittir ise değerlerin tiplerini eşitleyerek sadece değer karşılaştırması yapar.

koprununDurumu === "acik" ? console.log("Köprü Açık") : koprununDurumu === "kapali" ? console.log("Köprü Kapalı") : console.log("Köprü Durumu Bilinmiyor.");

const nmbr = 1;
nmbr ? console.log("sayi gecerli") : console.log("sayi gecersiz"); // sayi değerini kontrol eder true false olarak kontrol eder
/*
null
NaN
0                   //false dönen tipler
"" (empty string)
undefined*/
const deger = { isim: "Deniz" };
Object.keys(deger).length ? console.log("length") : console.log("length 2"); // sayi değerini kontrol eder true false olarak kontrol eder


// 9- Array Methods( Dizi Methodları ) - .find() .some() .every()

const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    {
        id: 3,
        name: "Silgi", fiyat: 2
    },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
];

// .find() sizin istediğiniz ürünü arar ve ilk bulduğunu size getirir. Başka varsa devamında ona bakmaz. İlk bulduğunu getirir ve biter.

console.log('Find :', urunler.find((urun) => urun.fiyat > 5)); // fiyatı 5 den büyük olanları istedik ama bize sadece Defter'i getirdi. Aslında Kalemtraş da vardı.
// Ama dediğimiz gibi ilk bulduğnu getirir.


// .some() koşulu sağlayan eleman dizide bulunuyorsa true döner, bulunmuyorsa false döner. 
console.log('Some :', urunler.some((urun) => urun.fiyat > 5));

// .every koşulu dizide ki bütün elemanların bu şartı sağlayıp sağlamadığına bakıp, ona göre sonuç dönecek. örnek fiyat 5 den büyük diye sorduğumuzda,
// fiyatı 2 olan da olduğundan false döner.

console.log('Every :', urunler.every((urun) => urun.fiyat > 5));


// 10- ESModules (ES Moduülleri)
/*
import { isim as nm, kullanici as usr, merhaba } from './source.js' // eğer alınan objeleri veya değişkenleri farklı isimlendirme olarak almak istiyorsak as ile yeni isim veririz.

//import merhaba from './defaultsource.js'; // direkt olarak tek default export ise böyle alınır.

import { default as merhaba, kullanici as kllnc } from './source.js';

export { default as merhaba } from './source.js'; // bu şekilde ki exot kullanımı defaultsource den geleni dışarı aktar demek
export { kullanici, isim } from './source.js';
export * from './source.js'; // bu kullanım ise gelen her şeyi dışarı aktar demek
*/

// 11- Array Methods (Dizi Methodları)
//.includes() // dizinin içinde olup olmadığını kontrol eder büyük küçük harf duyarlılığı vardır

const model = "Opel";

console.log(model.includes("Op")); //true döner
console.log(model.includes("opel")); // false döner
//bu sorunu çözmek için hepsi küçük veya büyük şekilde kontrol edilebilir.

//toLowerCase()
const yeniModel="Audi";

console.log(yeniModel.toLowerCase().includes("audi"));

console.log(yeniModel.toUpperCase().includes("AUDI"));
