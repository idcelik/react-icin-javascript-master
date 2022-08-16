/*
const isim = "Deniz";
const kullanici = { isim, yas: 29 };
function merhaba(isim) {
    return `Merhaba ${isim}`;
} 
export {isim,kullanici,merhaba};
*/

/*
// sayfada tek export olacaksa default olarak bu şekilde yazılabilir.
export default function merhaba(isim) {
    return `Merhaba ${isim}`;
}
*/


// fakat birden fazla export edilecek varsa ve yine default olarak da tanımlama yapılmak isteniyorsa, bu şekilde yapılır:

function merhaba(isim) {
    return `Merhaba ${isim}`;
}
const kullanici = {isim:"Deniz", yas:23};
const isim = "İbrahim";
export{merhaba as default,kullanici,isim};