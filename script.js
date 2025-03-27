const inputbox=document.getElementById("input_box");
const listcontainer=document.getElementById("list_cotainer");
function addTask(){
    if(inputbox.value ==''){
        alert("please first put something")
    }
    else{
        let li =document.createElement("li");
        li.innerHTML =inputbox.value;
        listcontainer.appendChild(li);
    }


}
