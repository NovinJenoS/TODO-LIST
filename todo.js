const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")
function addTask(){
    if(inputBox.value===''){
        alert("You must write Something!")
    }
    else{
        let li=document.createElement("li")
        li.textContent=inputBox.value
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
     inputBox.value=""
     saveData()
}
//evan velaiya pakurano avan than target uh , e ngurathu event object that has to be passed to event listener
//toggle is used to dynamically change the classname of the element it is an inbuilt method
//if classList.add("checked") is used instead of this classList.toggle("checked") then after 1 click the text will be striked out but on another click the strikethorough will not be removed so to remove that on just an another click toggle is used so that it automatically changes the class to previous class name

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.add("checked")
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)
// false is used to specify bubbling phase (targets childelement then comes to the outermost parent elemrents)
//to store the tasks we have done even after closing the browser we are using localStorage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
} 
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask()