//Create div and create ID for div and append div to the body tag
let div=document.createElement('div')
div.id="form_container"
document.body.appendChild(div)

// let form_container=document.getElementById('form_container');
//create form element
let form=document.createElement('form');
form.id="form_id"

//create input tag for first name
var f_label = document.createElement("LABEL");
let f_name=document.createElement('input')
f_name.id="f_name"
let first_text = document.createTextNode("First Name  ");
f_label.append(first_text,f_name);

//create input tag for last name
var l_label = document.createElement("LABEL");
let l_name=document.createElement('input')
l_name.id="l_name"
let last_text=document.createTextNode("Last Name  ");
l_label.append(last_text,l_name);


form.append(f_label,l_label)

form_container.appendChild(form);

