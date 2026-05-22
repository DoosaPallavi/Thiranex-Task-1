let tasks=
JSON.parse(
localStorage.getItem("tasks")
)||[];

function save(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}

function addTask(){

let input=
document.getElementById(
"taskInput"
);

if(input.value==="")
return;

tasks.push({

text:input.value,

done:false

});

input.value="";

save();

show();

}

function show(filter="all"){

let list=
document.getElementById(
"taskList"
);

list.innerHTML="";

tasks.forEach((task,index)=>{

if(

filter==="active"

&& task.done

)

return;

if(

filter==="completed"

&& !task.done

)

return;

let li=
document.createElement("li");

li.innerHTML=

task.text+

`<button onclick=
"complete(${index})">

Done

</button>

<button onclick=
"removeTask(${index})">

Delete

</button>`;

list.appendChild(li);

});

}

function complete(index){

tasks[index].done=

!tasks[index].done;

save();

show();

}

function removeTask(index){

tasks.splice(index,1);

save();

show();

}

function filterTask(type){

show(type);

}

show();