
//get all the references
//search form reference
let form=document.querySelector('.dictform');
//input box-->search box
let wordInput=document.querySelector('.wordinput');
//word info div
let wordInfo=document.querySelector('.wordinfo');
//get reference for button
let searchButton=document.querySelector('.searchbutton');

console.log("hello")
// form.addEventListener('submit',(e)=>
// {
//     //to prevent Default behaviour of the form
//     e.preventDefault();
//     //get the word entered by the user in the input text box
//     let word=wordInput.value;
//     console.log(word)
// })
//getmeaning function
async function getmeaning(word)
{
try{
    //make a api request with the word
    let response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    //get the meaning
    let data=await response.json();
    //show the details below the input box
    //create paragraph
    let paragraph=document.createElement('p')

    wordInfo.innerHTML=''

    //GET audio data
    let audioSource=data[0].phonetics[0].audio;

    //paragraph.innerHTML="hello"
    paragraph.innerHTML=`
    <span class='fas fa-volume-up audio-icon'></span>
        <audio class='audio'>
            <source src=${audioSource} type='audio/mpeg'>
        </audio>
    Word: <b>${data[0].word}</b>`

    //append para to wordInfo
    wordInfo.appendChild(paragraph)

 document.querySelector('.audio-icon').addEventListener('click', event => {
            document.querySelector('.audio').play();
        });


    //create a list
    let list=document.createElement('ul')
    list.style.listStyleType='none'
    let meanings=data[0].meanings;
   for(let meaning of meanings){
        //create a list item
            let listItem=document.createElement('li')
        //set the content item
        listItem.innerHTML=`${meaning.partOfSpeech}`
            //create sublist
            let subList=document.createElement('ul')
            subList.style.listStyleType='disc'
            let definitions=meaning.definitions;
            definitions.map(function(e)
            {
            //create a list item
            let sublistItem=document.createElement('li')           
            //set the content item
            sublistItem.innerHTML=`${e.definition}`
            subList.append(sublistItem)
            })

        //append it to list
        list.append(listItem,subList)

    }
    wordInfo.append(list)


}
catch(error)
{
    console.error("Error")
}
}


function handleSubmit(event)
{
    event.preventDefault();
    let word=wordInput.value;
    //console.log(word)
    //make a api request to get the meaning of the word and show it below the input box
    getmeaning(word)
}

form.addEventListener('submit',handleSubmit)
searchButton.addEventListener('click',handleSubmit)