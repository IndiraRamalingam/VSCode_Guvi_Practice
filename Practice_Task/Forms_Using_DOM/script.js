//Create div and create ID for div and append div to the body tag
let container =document.createElement('div')
container.id="form_container"
container.classList.add('container')
document.body.append(container)

//Create heading element
let heading_text=document.createElement('h1');
heading_text.id="title"
heading_text.innerHTML="Form"
heading_text.style.textAlign = "center";

//Create paragraph element
let paragraph_text=document.createElement('p')
paragraph_text.id="description"
paragraph_text.innerHTML="Please fill the below details"

//create form element
let forms=document.createElement('form');
forms.id="form"

//Append h1, p, form to div container
container.append(heading_text,paragraph_text,forms);

//Function to create input elements
function createInputElement(label_name,input_type,id_name)
{
    let d = document.createElement('div');
    d.setAttribute('class', 'form-group row');
    var label = document.createElement('label');
    label.classList.add('col-4','label');
    label.innerHTML=label_name;
    let type_of_input=document.createElement('input')
    type_of_input.setAttribute('type',input_type)
    type_of_input.id=id_name;
    type_of_input.placeholder=label_name
    type_of_input.classList.add('col-7','form-control')
    type_of_input.required=true;
    d.append(label,type_of_input)
    return d;
}
//Function to create radio for gender
function radio(label_name){
    
    let d=document.createElement('div');
    d.setAttribute('class', 'row form-group');
    var label = document.createElement('label');
    label.classList.add('col-4','label');
    label.innerHTML=label_name;

    let d1=document.createElement('div');
    d1.setAttribute('class', 'row form-check');
    let male_label=document.createElement('label')
    male_label.setAttribute('for','Male')
    male_label.innerHTML="Male";
    male_label.setAttribute('class','col-2 form-check-label');
    let radio1=document.createElement('input')
    radio1.setAttribute('type','radio')
    radio1.setAttribute('class', 'col-2 form-check-input');
    radio1.id="Male"
    radio1.value="Male"
    radio1.name="gender"

    let d2=document.createElement('div');
    d2.setAttribute('class', 'row form-check');
    let female_label=document.createElement('label')
    female_label.setAttribute('for','Female')
    female_label.innerHTML="Female";
    female_label.setAttribute('class','col-2 form-check-label');
    let radio2=document.createElement('input')
    radio2.setAttribute('type','radio')
    radio2.setAttribute('class', 'col-2 form-check-input');
    radio2.id="Female"
    radio2.value="Female"
    radio2.name="gender"

    d1.append(male_label,radio1)
    d2.append(female_label,radio2)
    d.append(label,d1,d2)
    return d;
}
//Function to create checkbox for food
// function checkbox(){
// 
// }
//Function to create dropdown for state and country
// function dropdown(){
// 
// }

//Function to create submit for onsubmit
// function submit(){
// 
// }

//Create input fields using function and append it to form
let f_name=createInputElement("First Name",'text',"first-name")
let l_name=createInputElement("Last Name",'text','last-name')
let addr=createInputElement("Address",'textarea','address')
let pin_code=createInputElement("PinCode",'text','pincode')
let gender=radio("Gender");
// let food=checkbox();
// let state=dropdown();
// let country=dropdown();
// let submit=submit();
forms.append(f_name,l_name,addr,pin_code,gender)