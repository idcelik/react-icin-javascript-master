
// ES6 Template Literals(Şablon dizileri )
const isim = "Deniz";

const mesaj = `Merhaba, ${isim}`;

console.log(mesaj);

const birim_fiyat = 100;
const adet = 3;
const para_birimi = "TL";
const toplam_tutar = `Toplam: ${birim_fiyat * adet} ${para_birimi}`;
console.log(toplam_tutar);

//Shorthand Property Names (Kısayol obje anahtarı isimleri)

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

//Arrow Functions ( Oklu fonksiyon ifadeleri )

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


//object / Array Destructuring
// obje ve dizilerin parçalarına bölünüp değişkenlere atanması

const kullanici = { name: "Deniz", age: 26, adress: "İzmir" };
const { name, age } = kullanici;
console.log(name);
console.log(age);
const kullanici2 = { name2: "Deniz", age2: 26, adress2: "İzmir",country2:"Türkiye",job:"Bilgisayar Müh."};
const { name222,adress2, ...kalanlar } = kullanici2;
//rest operator (rest/spread)
// bu şekilde kullanıldığına, isimleri name2 olarak alırken, objenin geri kalanlarını kalanlar objesine atar.
console.log(name222);//burada name222 olarak kullanılma sebebi, objede ki isimle birebir olması gerekmediğini göstermek. 
console.log(kalanlar);//yani name2 de ki ismi, oluşturduğumuz objede name2 yazdığımız için atamadı, atama sırayla yapılıyor.ilk sırada olduğun için atadı. 
console.log(adress2);



function KullaniciGoster({isim,yas}){
    return `${isim} isimli kullanıcı ${yas} yaşındadır.`;           //react
}



const sayilar = [1,2,3,4,5];
const [bir,iki,uc,dort,bes]=sayilar;

console.log(bir,iki,uc,dort,bes);

const[birinciEleman,ikinciEleman,...kalanElemanlar] = sayilar;
console.log(birinciEleman);
console.log(kalanElemanlar);

// const[...ilkElemanlar, besinci]= sayilar; böyle bir kullanım söz konusu değil



//Parameter Defaults(Varsayılan Parametre Değerleri)

function topla4(sayi1,sayi2)
{
    return sayi1+sayi2; // 3 + undefined
}
console.log(topla4(3)); //İkinci parametre yazılmadığı için NaN(Not a Number) sonuç döner. 

//bu sorunu aşmak için default değer ataması yapabiliriz.


function topla5(sayi1,sayi2=1)
{
    return sayi1+sayi2; 
}
console.log(topla5(3)); // Default değer fonksiyonda 1 olarak girildiği için, eğer herhangi bir sayı girilmezse 1 olarak işleme sokar.


// Bunu react'ta reducer olarak kullanabiliyoruz. Örnek olarak:

const STATE_BASLANGICI ={yukleniyor:false,yazilar :[]};
const reducer = (state =STATE_BASLANGICI,action)=>{ //state değeri başlangıç olarak STATE_BASLANGICI değeri atadık. Yani Sayfa ilk açıldığında herhangi bir 
                                                    // yazı olmadan çalışacak. Biz herhangi bir şey eklediğimizde onu gösterecek.
    //reducer detayları
    return state;
}






