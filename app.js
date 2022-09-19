//? Button selectors //
const addBtn = document.querySelector(".add-btn")
const inputArea = document.querySelector(".input")
// const doneBtn = document.querySelectorAll("i.done")
// const delBtn = document.querySelectorAll("i.delete")
const taskContent = document.querySelector(".task-content")
const listItem = document.querySelectorAll(".task")
const taskParent = document.querySelector(".task-list")


addBtn.addEventListener("click", ()=>{
    let taskParent = document.querySelector(".task-list")
    let task = document.createElement("li")
    task.className = "task"
    
    
    if(inputArea.value){
        addList()

    }else{
        inputArea.setAttribute("placeholder", "Please enter something to do")
    }
})
taskParent.addEventListener("click", (e)=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.parentElement.remove()
    }else if(e.target.classList.contains("done")){
        e.target.parentElement.parentElement.previousElementSibling.classList.add("checked")
    }
})






function addList (){
    let taskParent = document.querySelector(".task-list")
    let task = document.createElement("li")
    task.className = "task"
    if(inputArea.value){
        
        taskParent.appendChild(task)
        //! P tag create and append
        let taskContent = document.createElement("p")
        taskContent.className = "task-content"
        taskContent.innerHTML = inputArea.value
        task.appendChild(taskContent)
        //! div tag create and append
        let iconWrap = document.createElement("div")
        iconWrap.className = "icon-wrap"
        task.appendChild(iconWrap)
        //! span tag DONE icon create and append START
        let spanDone = document.createElement("span")
        spanDone.className = "done icon"
        iconWrap.appendChild(spanDone)
        //! i tag icons create and append
        let iconDone = document.createElement("i")
        iconDone.className = "fa-solid fa-check done"
        spanDone.appendChild(iconDone)
        //! span tag DONE icon create and append END
        //! span tag DELETE icon create and append START
        let spanDelete = document.createElement("span")
        spanDelete.className = "delete icon"
        iconWrap.appendChild(spanDelete)
        //! i tag icons create and append
        let iconDelete = document.createElement("i")
        iconDelete.className = "fa-solid fa-x delete"
        spanDelete.appendChild(iconDelete)



    }else{
        inputArea.setAttribute("placeholder", "Please enter something to do")
    }
}







// task.innerHTML = 
//         `
//         <p class="task-content">${inputArea.value}</p>
//                     <div class="icon-wrap">
//                         <span class="done icon"><i class="fa-solid fa-check done"></i></span>
//                     <span class="icon"><i class="fa-solid fa-x delete"></i></span>
//                     </div>
//         `