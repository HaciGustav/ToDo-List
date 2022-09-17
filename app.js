//? Button selectors //
const addBtn = document.querySelector(".add-btn")
const inputArea = document.querySelector(".input")
const doneBtn = document.querySelector("i.done")
const delBtn = document.querySelector("i.delete")
const taskContent = document.querySelector(".task-content")
const listItem = document.querySelector(".task")
const taskParent = document.querySelectorAll(".task-list")

const task = 
`<li class="task">
<p class="task-content">${inputArea.value}</p>
<div class="icon-wrap">
    <span class="done icon"><i class="fa-solid fa-check done"></i></span>
<span class="icon"><i class="fa-solid fa-x delete"></i></span>
</div>
</li>
`

addBtn.addEventListener("click", ()=>{
    console.log("first")
    document.getElementsByName("ul").innerHTML = (
    `
    <li class="task">
                <p class="task-content">Lorem, ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sunt voluptate commodi error et laudantium at natus delectus maxime in.</p>
                <div class="icon-wrap">
                    <span class="done icon"><i class="fa-solid fa-check done"></i></span>
                <span class="icon"><i class="fa-solid fa-x delete"></i></span>
                </div>
            </li>
    `)
})