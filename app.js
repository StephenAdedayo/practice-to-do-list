const inputBox = document.getElementById('input-box')
const listCont = document.getElementById('list-cont')
const button = document.getElementById('btn')

button.onclick = function addTask(){
    if(inputBox.value === ''){
        alert('you have to add a task')
    }else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listCont.appendChild(li)
        let span = document.createElement('span')
        // listCont.insertBefore(li, listCont.getElementsByTagName('li')[0])
        span.innerHTML = '\u00d7'
        li.appendChild(span)

        

}

inputBox.value = ''
saveData()
}


listCont.addEventListener("click", function(e){
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle('checked')
            saveData()
        }
        else{
            if(e.target.tagName === 'SPAN'){
                e.target.parentElement.remove()
                saveData()
            }
            
        }
    
});


function saveData(){
    localStorage.setItem("data", listCont.innerHTML)
}

function getData(){
    listCont.innerHTML = localStorage.getItem("data")
}

getData()

