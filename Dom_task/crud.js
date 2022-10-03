function myfunction() {
    console.log("hello Good Morning");
    document.getElementById("box").style.visibility = "visible"}


var selectedRow=null;
let arr=[]
function sub(event) {
event.preventDefault();
let formData = readFormData()
if(selectedRow==null){
    inserdata(formData)
   

}
else{
    update(formData)
}
document.forms[0].reset();
}


function readFormData(){
    
    var formData={};
    console.log(document.getElementById("first_name").value)
    formData["firstname"]=document.getElementById("first_name").value;
    formData["lastname"]=document.getElementById("last_name").value;
    formData["email"]=document.getElementById("email").value;
    formData["mobile"]=document.getElementById("mobile_no").value;
    console.log(formData)
    arr.push(formData)
    console.log(arr)
    return formData;
   

}

function inserdata(data){
    let table = document.getElementById("table_id").getElementsByTagName('tbody')[0];
    let newRow=table.insertRow(table.length);
    let cell1=newRow.insertCell(0);
    cell1.innerHTML=data.firstname;
    let cell2=newRow.insertCell(1);
    cell2.innerHTML=data.lastname
    let cell3=newRow.insertCell(2);
    cell3.innerHTML=data.email
    let cell4=newRow.insertCell(3);
    cell4.innerHTML=data.mobile;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML=`<button onclick='edit(this)'>Edit</button><button onclick='remove(this)'>Delete</button>`

}

function edit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById('first_name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('last_name').value = selectedRow.cells[1].innerHTML;
    document.getElementById('email').value = selectedRow.cells[2].innerHTML;
    document.getElementById('mobile_no').value = selectedRow.cells[3].innerHTML;
}

function update(formData){
    selectedRow.cells[0].innerHTML=formData.firstname;
    selectedRow.cells[1].innerHTML=formData.lastname;
    selectedRow.cells[2].innerHTML=formData.email;
    selectedRow.cells[3].innerHTML=formData.mobile;

    
    document.forms[0].reset();

}

function remove(td){
td.parentElement.parentElement.remove()
document.forms[0].reset();
}
function validfn() {
    document.getElementById("msgfn").innerHTML = "";
  }
  function validln() {
    document.getElementById("msgln").innerHTML = "";
  }
  function validem() {
    document.getElementById("msgem").innerHTML = "";
  }
  function validmob(event) {
    let unicode = event.which;
    console.log(unicode, "ascl");
    if (unicode == 69) {
      document.getElementById("msgmob").innerHTML = "mobile number is required";
    } else {
      document.getElementById("msgmob").innerHTML = "";
    }
  }
   