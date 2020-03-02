var alpha = "abcdefghijklmnopqrstuvwxyz"

console.log(alpha.length);

console.log(alpha[0])
console.log(alpha[1])
console.log(alpha[2])
console.log(alpha[3])
console.log(alpha[4])
console.log(alpha[25])
alpha = alpha.toUpperCase()// ****
console.log(alpha);
alpha = alpha.toLowerCase()// ****
console.log(alpha);
var alpha1 = alpha.concat(alpha.toUpperCase())
var alpha2 = alpha + alpha.toUpperCase()
console.log(alpha1);
console.log(alpha2);

let a = 15
console.log(typeof a);
a = a.toString()
console.log(typeof a);
a = a + "2"
a = "z" + a
a = "0" + a
console.log(isNaN(a)); // ****

console.log(a);
console.log(parseInt(a));  // **

console.log(alpha1.indexOf("a"));
console.log(alpha1.indexOf("A"));
alpha1 += "A"
console.log(alpha1.indexOf("Aa"));// ****
console.log(alpha1.lastIndexOf("A"));

console.log(alpha2.replace("A", "Z")); // ****
console.log(alpha1.slice(5,26));
let ip = "196.168.1.59"
console.log(ip.split(".")); // ****
