// let n=23;
// let str="ABCdEFGHIJKLMNOPQRSTUVWXYz".split("")
// //XYZaBCDEFGHIJKLMNOPQRSTUVw
// let arr=[];
// let new_arr=[];
// for(let i=23;i<str.length;i++)
// {
//       arr.push(str[i])   
// }
// for(let i=0;i<n;i++)
// {
//       arr.push(str[i])   
// }
// 
// for(let j=0;j<str.length;j++)
// {
//   if(str[j]===str[j].toUpperCase())
//   {
//     let a=(str.indexOf(str[j]))
//     new_arr.push(arr.join("").charAt(a).toUpperCase())
//   }
//   else{
//     let b=(str.indexOf(str[j]))
//     new_arr.push(arr.join("").charAt(b).toLowerCase())
//   }
// }
// console.log(new_arr.join(""))




























// let num1="1 2 3 4 5".split(" ")
// let max_val=Math.max(...num1)
// let max=((num1.join("")).indexOf(max_val)+1)
// let min_val=Math.min(...num1)
// let min=((num1.join("")).indexOf(min_val)+1)
// 
// console.log(min+" "+max)





























//To remove dulicates
 let num="1 1 1 2 2 2 3 8 9 7".split(" ")
// console.log(num)
// let new_arr=[...new Set(num)]
// console.log(new_arr)

let uniq=num.filter((c,i)=>
{
  console.log(num.indexOf(c)+"   "+i)
  return num.indexOf(c)===i;
})
console.log(uniq)




// let arr = ["scale", "happy", "strength",
// "peace", "happy", "happy"];
// 
// function removeDuplicates(arr) {
// let unique = arr.reduce(function (acc, curr) {
// if (!acc.includes(curr))
//     acc.push(curr);
// return acc;
// }, []);
// return unique;
// }
// 
// console.log(removeDuplicates(arr));