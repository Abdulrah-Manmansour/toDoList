var inputvalue = document.getElementById("inval")
var btnAdd = document.getElementById("add");
var result = document.getElementById("result");
var data =[];
console.log(btnAdd);
btnAdd.addEventListener("click",add)

function add(){
if(inputvalue.value == ''){
    alert('you must entert your task')
}
else{
    var ob = inputvalue.value
    data.push(ob)
    show();
}
}

function show(){
    var rs=''
    for(var i =0;i<data.length;i++){
    console.log(data[i]);
    rs+=`<span>${data[i]} <button onclick="delet(${i})"><i class="far fa-trash-alt"></i></button><button onclick="upted(${i})"><i class="far fa-edit"></i></button></span><br> `
    }
    result.innerHTML=rs;
}


function delet(i){
data.splice(i,1)
show();
}
function upted(i){
let content=`  <input type="text" placeholder="add " id="invalupted" class="inputupted" value="${data[i]}">
<button class="uptedbtn" id="addupted" onclick="doUpted(${i})"><i class="fas fa-save"></i></button>`
document.getElementById("upted").innerHTML= content;
}
function doUpted(i){
    var inputvalueUpted = document.getElementById("invalupted").value;
    data[i]= inputvalueUpted;
    document.getElementById("upted").innerHTML= '';
    show();
}

