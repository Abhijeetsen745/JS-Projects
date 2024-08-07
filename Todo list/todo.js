const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const add = document.querySelector('.add');

add.addEventListener('click',addTask);
function addTask(){
    if(inputBox.value=== ''){
        alert("you must write something!");
    }
    else{
    const li = document.createElement('li');
    li.innerHTML= inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML="\u00d7"
    li.appendChild(span)
    }
 inputBox.value= '';
 saveData()
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName=== 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }

},false);

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}