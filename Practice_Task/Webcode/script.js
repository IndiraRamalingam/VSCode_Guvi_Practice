// //Getting values from Rest countries API
// fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
//     .then(response=>response.json())
//     .then(data=> 
//     {
//        getData1(data)
//     })
// 
// //creation of container
// let div=document.createElement('div')
// div.setAttribute('class','container')
// //creation of Form
// let form_div=document.createElement('form')
// form_div.setAttribute('class','form-group')
// //creation of div
// let div_row=document.createElement('div')
// div_row.setAttribute('class','row')
// let div_col_1=document.createElement('col')
// div_col_1.setAttribute('class','col-4')
// let div_col_2=document.createElement('col')
// div_col_2.setAttribute('class','col-4')
// let div_col_3=document.createElement('col')
// div_col_3.setAttribute('class','col-4')
// let div_row_2=document.createElement('div')
// div_row_2.setAttribute('class','row')
// let div_submit=document.createElement('col')
// div_submit.setAttribute('class','col')
// 
// 
// function getData1(data)
// {
//     let product_array=[];
//     let brand_array=[];
//      for(e of data)
//         {
//             let product=e.product_type;
//             let brand=e.brand;
//             product_array.push(product)
//             brand_array.push(brand)
//         }
//        let new_Product=[...new Set(product_array)]
//        let new_Brand=[...new Set(brand_array)]
//        console.log("Array -->"+new_Product+"----"+new_Brand)
// }      
// 
// let btn_product_div=document.createElement('div')
// btn_product_div.setAttribute('class','dropdown')
// let btn_product=document.createElement('select')
// btn_product.setAttribute('type','button')
// btn_product.setAttribute('class', 'btn btn-outline-primary dropdown-toggle')
// btn_product.setAttribute('data-toggle','dropdown')
// btn_product.id='product';
// btn_product.innerHTML=`<option value="">-- Please choose a Product --</option>`
// 
// 
// var Products = ["A","b"];
// //Products.push(getData1.product)
// console.log(Products)
// 
//   for(var i=0;i<Products.length;i++){     
//       var opt = document.createElement("option"); 
//       opt.text = Products[i];
//       opt.value = Products[i];
//       btn_product.options.add(opt);      
//   }
// btn_product_div.append(btn_product)
// div_col_1.append(btn_product_div)
// 
// div_col_1.innerHTML="One"
// 
// div_col_2.innerHTML="two"
// 
// 
// div_submit.innerHTML="submit"
// 
// 
// 
// 
// 
// 
// 
// 
// 
// div_row.append(div_col_1,div_col_2)
// div_row_2.append(div_submit)
// form_div.append(div_row,div_row_2)
// div.append(form_div)
// document.body.append(div)
