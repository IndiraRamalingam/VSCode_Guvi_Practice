//Getting values from Rest countries API
fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    .then(response=>response.json())
    .then(data=> 
    {
        for(e of data)
        {
            let product=e.product_type;
            let brand=e.brand;
            console.log(product+"---"+brand)
        }
    })

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

//create dropdown for product
function createDropdownProduct()
{
let btn_product_div=document.createElement('div')
btn_product_div.setAttribute('class','dropdown')

let btn_product=document.createElement('select')
btn_product.setAttribute('type','button')
btn_product.setAttribute('class', 'btn btn-outline-primary dropdown-toggle')
btn_product.setAttribute('data-toggle','dropdown')
btn_product.id='product';
btn_product.innerHTML=`<option value="">-- Please choose a Product --</option>`
//insert products into dropdown

  var Products = ["blush","bronzer","eyebrow","eyeliner","eyeshadow","foundation","lip liner","lipstick","nail polish"];
 
    for(var i=0;i<Products.length;i++){     
        var opt = document.createElement("option"); 
        opt.text = Products[i];
        opt.value = Products[i];
        btn_product.options.add(opt);      
    }

btn_product_div.append(btn_product)
return btn_product_div;
}

//create dropdown for brand
function createDropdownBrand()
{
let btn_brand_div=document.createElement('div')
btn_brand_div.setAttribute('class','dropdown')

let btn_brand=document.createElement('select')
btn_brand.setAttribute('type','button')
btn_brand.setAttribute('class', 'btn btn-outline-primary dropdown-toggle')
btn_brand.setAttribute('data-toggle','dropdown')
btn_brand.id='product';
btn_brand.innerHTML=`<option value="">-- Please choose a Brand --</option>`

//insert products into dropdown

  var Brands = ["almay","alva","anna sui","annabelle","benefit","boosh","burt's bees",""];
 
    for(var i=0;i<Brands.length;i++){     
        var opt = document.createElement("option"); 
        opt.text = Brands[i];
        opt.value = Brands[i];
        btn_brand.options.add(opt);      
    }

btn_brand_div.append(btn_brand)
return btn_brand_div;
}

//creation of submit button
function createSubmit()
{
let div_2=document.createElement('div')
div_2.setAttribute('class','d-flex justify-content-center')
let submit=document.createElement('button')
submit.setAttribute('type','submit')
submit.id="submit_btn"
submit.innerHTML="Search Here"
submit.onclick=getData
div_2.append(submit)
return div_2;
}


//creation of container
let div=document.createElement('div')
div.setAttribute('class','container')
//creation of Form
let form_div=document.createElement('form')
form_div.setAttribute('class','form-group')
//creation of div with flex
let div_1=document.createElement('div')
div_1.setAttribute('class','d-flex justify-content-around')


let product=createDropdownProduct();
let brand=createDropdownBrand()
let submit=createSubmit()
div_1.append(product,brand)

form_div.append(div_1,submit)
div.appendChild(form_div)
document.body.append(div)














