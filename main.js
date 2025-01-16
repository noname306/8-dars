let botlar = ["хлеб", "мед", "банан", "яблоко", "Азиза", "цветок", "машина"];
let harfN = [];
let harfsiz = [];

botlar.forEach(word => {
    if (word.toLowerCase().includes('н')) {
        harfN.push(word);
    } else {
        harfsiz.push(word);
    }
});

console.log(`${harfN} 'n harfi ishtirok etgan sozlar`);
console.log(`${harfsiz} 'n harfi ishtirok etmagan sozlar`);
