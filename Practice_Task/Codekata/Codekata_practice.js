let arr = ["scale", "happy", "strength",
"peace", "happy", "happy"];

function removeDuplicates(arr) {
let unique = arr.reduce(function (acc, curr) {
if (!acc.includes(curr))
    acc.push(curr);
return acc;
}, []);
return unique;
}

console.log(removeDuplicates(arr));