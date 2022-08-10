
// ES6 Template Literals(Şablon dizileri )
const isim="Deniz";

const mesaj =`Merhaba, ${isim}`;

console.log(mesaj);

const birim_fiyat=100;
const adet = 3;
const para_birimi= "TL";
const toplam_tutar=`Toplam: ${birim_fiyat * adet} ${para_birimi}`;
console.log(toplam_tutar);

//Shorthand Property Names (Kısayol obje anahtarı isimleri)

const isim2="İbrahim"
const yas = 26;
// {isim : "İbrahim", yas: 35}
const kullanici_objesi= {isim,yas}
console.log(kullanici_objesi);

function Sayac({baslangicDegeri,adim}){
    const [sayac,setSayac]=useCounter({baslangicDegeri, adim});
return <button onClick= {setSayac} >{sayac}</button>
} 

//Arrow Functions ( Oklu fonksiyon ifadeleri )
