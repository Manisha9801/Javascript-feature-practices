//program to check if two strings are amigos
let str1 = 'Funeral';

// function isAmigos(str2) {
//     str1 = str1.toLowerCase().split('').sort().join("");
//     str2 = str2.toLowerCase().split('').sort().join("");
//     console.log(str1,str2);
//     return str1 === str2 ? true : false;
// }
function isAmigos(str2) {
    str1 = str1.toLowerCase().replace(' ','').split('').sort().join("");
    str2 = str2.toLowerCase().replace(' ','').split('').sort().join("");
    return str1 === str2 ? true : false;
}

console.log(isAmigos('Real Fun'));