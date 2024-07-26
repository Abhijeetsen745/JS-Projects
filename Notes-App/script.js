const notesContainer = document.querySelector('.notes-container')
const button = document.querySelector('.btn')
let notes = document.querySelectorAll('.inputBox')

button.addEventListener('click',createNote)
function showNotes(){
    notesContainer.innerHTML= localStorage.getItem('notes')
}
showNotes();
function updateStorage(){
    localStorage.setItem('notes',notesContainer.innerHTML)
}


function createNote(){
    const p = document.createElement('p')
    p.className = 'inputBox'
    p.setAttribute('contenteditable','true')
    const img = document.createElement('img')
    img.setAttribute('src','images/delete.png')
    img.className='delete'
    notesContainer.appendChild(p).appendChild(img)
}

notesContainer.addEventListener('click',function(e){
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName==='P'){
        notes = document.querySelectorAll('.inputBox')
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }
})
