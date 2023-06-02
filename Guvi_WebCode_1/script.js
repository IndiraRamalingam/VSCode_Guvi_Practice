//Getting values from Rest countries API
fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    .then(response=>response.json())
    .then(data=> 
    {
       getData1(data)
    })

//creation of container
let div=document.createElement('div')
div.setAttribute('class','container')
//creation of Form
let form_div=document.createElement('form')
form_div.setAttribute('class','form-group')
//creation of div with flex
let div_1=document.createElement('div')
div_1.setAttribute('class','row')
let div_2=document.createElement('div')
div_2.setAttribute('class','row')

function getData1(data)
{
    let product_array=[];
    let brand_array=[];
     for(e of data)
        {
            let product=e.product_type;
            let brand=e.brand;
           // console.log(product+"---"+brand)
            product_array.push(product)
            brand_array.push(brand)
        }
       let new_Product=[...new Set(product_array)]
       let new_Brand=[...new Set(brand_array)]
        console.log("Array -->"+new_Product+"----"+new_Brand)
        
         //create cards and append it to column        
        

         //create dropdown for product
function createDropdownProduct(new_Product)
{
let div_col1=document.createElement('div')
div_col1.setAttribute('class','col-4')
let btn_product_div=document.createElement('div')
btn_product_div.setAttribute('class','dropdown')

let btn_product=document.createElement('select')
btn_product.setAttribute('type','button')
btn_product.setAttribute('class', 'btn btn-outline-primary dropdown-toggle')
btn_product.setAttribute('data-toggle','dropdown')
btn_product.id='product';
btn_product.innerHTML=`<option value="">-- Please choose a Product --</option>`
//insert products into dropdown

  var Products = new_Product;
  //Products.push(getData1.product)
  console.log(Products)
 
    for(var i=0;i<Products.length;i++){     
        var opt = document.createElement("option"); 
        opt.text = Products[i];
        opt.value = Products[i];
        btn_product.options.add(opt);      
    }

btn_product_div.append(btn_product)
div_col1.append(btn_product_div)
return div_col1;
}

//create dropdown for brand
function createDropdownBrand(new_Brand)
{
    
    let div_col2=document.createElement('div')
    div_col2.setAttribute('class','col-4')
let btn_brand_div=document.createElement('div')
btn_brand_div.setAttribute('class','dropdown')

let btn_brand=document.createElement('select')
btn_brand.setAttribute('type','button')
btn_brand.setAttribute('class', 'btn btn-outline-primary dropdown-toggle')
btn_brand.setAttribute('data-toggle','dropdown')
btn_brand.id='product';
btn_brand.innerHTML=`<option value="">-- Please choose a Brand --</option>`

//insert products into dropdown

  var Brands = new_Brand
 
    for(var i=0;i<Brands.length;i++){     
        var opt = document.createElement("option"); 
        opt.text = Brands[i];
        opt.value = Brands[i];
        btn_brand.options.add(opt);      
    }

btn_brand_div.append(btn_brand)
div_col2.append(btn_brand_div)
return div_col2;
}

let product2=createDropdownProduct(new_Product);
let brand2=createDropdownBrand(new_Brand)
div_1.append(product2,brand2)
//Fucntion end    
}

//Async function to get product details
async function getProducts(product_value)
{
    try{
        //let response=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${product_value}`)
        let response=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_value}`)
        let data=await response.json();
        console.log(data.length)
       for(e of data)
       {
        console.log(e.brand)
       }
    }
    catch(error)
    {
        console.error("Error Reason"+error)
    }
}

//Function to getData from form
function getData(event)
{
    event.preventDefault();
    let selectElement = document.querySelector('#product');
    let product_value = selectElement.value;
    getProducts(product_value)
    // console.log("Data"+data)  
}



//creation of submit button
function createSubmit()
{ 
let div_col2=document.createElement('div')
div_col2.setAttribute('class','col-4')
let submit=document.createElement('button')
submit.setAttribute('type','submit')
submit.id="submit_btn"
submit.innerHTML="Search Here"
submit.onclick=getData
div_col2.append(submit)
div_2.append(div_col2)
return div_col2;
}





let submit=createSubmit()

form_div.append(div_1,div_2)
div.appendChild(form_div)
document.body.append(div)














