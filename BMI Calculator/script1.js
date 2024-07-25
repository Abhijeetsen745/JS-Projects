const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result= document.querySelector('#results')
    const bmiTag=document.querySelector('#bmi')
    let bmi;

    if(height===''||height<0|| isNaN(height)){
        result.innerHTML=`please enter valid height ${height}`
    } else if(weight===''||weight<0|| isNaN(weight)){
        result.innerHTML=`please enter valid weight ${weight}`
    }else{
         bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`${bmi}`;
    }

    if(bmi<18.6){
        bmiTag.innerHTML="under weight"
    }else if(bmi>=18.6 && bmi<=24.9){
        bmiTag.innerHTML='normal weight'
    }else{
        bmiTag.innerHTML='Overweight'
    }
    
})