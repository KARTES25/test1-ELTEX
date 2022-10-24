const N = prompt('N=');
console.log("N =", N);

let list = ['A', 'B', 'D', 'E', 'F', 'Z', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'Q', 'R', 'T', 'V', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '_', '$', '~'];

let listLetters = ['A', 'B', 'D', 'E', 'F', 'Z', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'Q', 'R', 'T', 'V'];
let listNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let item = "";

let newItemCount1 = 0;
let newItemCount2 = 0;
let ItemNotReplace = 0;

for (i = 0; i < N; i++) {
    var listIndex = Math.floor(Math.random() * list.length);
    item += list[listIndex]
}

console.log("list =" ,item);

const firstItem = prompt('First character =');

let newItem = "";

for (i = 0; i < N; i++) {
    if (listLetters.includes(item[i])) {
        newItem += firstItem;
    }else {
        newItem += item[i];
    }

}

console.log("first iteration", newItem);

const secondItem = prompt('Second character =');

item = "";

for (i = 0; i < N; i++) {
    if (listNumbers.includes(newItem[i])) {
        item  += secondItem;
    }else {
        item += newItem[i];
    }
}

for (i = 0; i < N; i++) {
    if (item[i] == firstItem) 
        newItemCount1++;
    if (item[i] == secondItem) 
        newItemCount2++;
}

ItemNotReplace = item.length - (newItemCount1 + newItemCount2)

console.log("second iteration", item)
console.log("sum first replacement", newItemCount1)
console.log("sum second replacement", newItemCount2)
console.log("sum not replacement", ItemNotReplace)
