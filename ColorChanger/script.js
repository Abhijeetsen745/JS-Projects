const body=document.querySelector('body')
const btn=document.querySelectorAll('.button')

btn.forEach((btns)=>{
    btns.addEventListener('click',(e)=>{
     if(e.target.id==='grey')
        body.style.backgroundColor= e.target.id
     if(e.target.id==='pink')
        body.style.backgroundColor= e.target.id
     if(e.target.id==='blue')
        body.style.backgroundColor= e.target.id
     if(e.target.id==='yellow')
        body.style.backgroundColor= e.target.id
    })
})