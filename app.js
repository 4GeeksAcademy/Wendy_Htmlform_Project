
let enterCheck= document.body.addEventListener('keydown', (testKey)=>{
    if (testKey.key === 'Enter') {
       mySubmitFunction();
        // Perform desired actions here
      }
});


window.mySubmitFunction = function (){
   let checkAllField= document.querySelectorAll('.is-invalid');
   
  checkAllField.forEach((element)=>{
element.classList.remove("is-invalid");
  });

    let testCardN= document.querySelector('#cnum');
 
    if(testCardN.value.length!=16)
    {
       
        testCardN.classList.add('is-invalid');
    }

    var testCardC= document.querySelector('#ccvv');
    if(testCardC.value.length<3 || testCardC.value.length>4 )
    {
        testCardC.classList.add('is-invalid');
    }

    var testName= document.querySelectorAll('.inputName');
    var regex = /\d/g;
 if(regex.test(testName[0].value) || (testName[0].value.length<2) )
    {
        //
        testName[0].classList.add('is-invalid');
    }

    if(regex.test(testName[1].value)|| (testName[1].value.length<2))
    {
        //
        testName[1].classList.add('is-invalid');
    }

let testCardA= document.querySelector('#camount');

if(testCardA.value.length<1)
{
   
    testCardA.classList.add('is-invalid');
}

let testCity= document.querySelector('#inputCity');
if(testCity.value.length<4)
{
   
    testCity.classList.add('is-invalid');
}
let testState=document.querySelector('#inputState');
if(testState.value=='Choose your state'){
    testState.classList.add('is-invalid');
}


let testZip=document.querySelector('#inputZip');
if(testZip.value.length!=5){
    testZip.classList.add('is-invalid');
}

let testArea=document.querySelector('.textA');
if(testArea.value.length<20){
    testArea.style.borderColor = "red";
}

let checkCardT= document.querySelectorAll('.checkCardT');
if(checkCardT[0].checked==false && checkCardT[1].checked==false && checkCardT[2].checked==false){
  let cardStatus= document.querySelector('.card_type_div');
   cardStatus.style.borderColor = "red";
  
}


let CheckAllField= document.querySelector('.is-invalid');
if(checkAllField){
   
}




}







  

/*
   


*/







