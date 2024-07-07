const inputBox = document.getElementById('input-box')
const listCont = document.getElementById('list-cont')
const button = document.getElementById('btn')
const delebtn = document.getElementById('del')

button.addEventListener("click", () =>{
   if (inputBox.value === '') {
        alert('you have to add a task')
   } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listCont.appendChild(li)
        // deleted.appendChild(listCont)
        let span = document.createElement('span')
        // listCont.insertBefore(li, listCont.getElementsByTagName('li')[0])
        span.innerHTML = '\u00d7'
        li.appendChild(span)


        

        // let buttons = document.createElement('button')
        // buttons.innerHTML = 'Done'
        // li.appendChild(buttons)

        

}

inputBox.value = ''
saveData()
})


listCont.addEventListener("click", (e) => {
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle('checked')
            saveData()
        }
        //  else if(e.target.tagName === "BUTTON"){
        //     e.target.parentElement.remove()
        // }
        else if
            (e.target.tagName === 'SPAN'){
                e.target.parentElement.remove()
                saveData()
            }
            
}, false);

delebtn.addEventListener("click", () => {
   
    listCont.innerHTML = ''
    
    saveData()
})


function saveData(){
    localStorage.setItem("data", listCont.innerHTML)
}

function getData(){
    listCont.innerHTML = localStorage.getItem("data")
}

getData()

 
// let buttons = document.createElement('div')
// buttons.appendChild(listCont)

// document.body.appendChild(listCont, buttons)


// 