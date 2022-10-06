var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    
    }
}

function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("monu").getElementsByTagName('tbody')[0];
    
    var newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    
    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.salary;
    
    cell4 = newRow.insertCell(3);
    cell4.innerHTML= `<a onClick="onEdit(this)"><Button>Edit</button></a>
    <a onClick="onDelete(this)"><Button>Delete</button></a>`;
    
    // cell4 = newRow.insertCell(4);
    // cell4.innerHTML = `<a onClick="onEdit(this)"><Button>Edit</button></a>
    //                    <a onClick="onDelete(this)"><Button>Delete</button></a>`;
}


function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;

}


function onDelete() {
    // ;if (confirm('Are you sure to delete this record ?')) {
    //     row = td.parentElement.parentElement;
    //     document.getElementById("monu").deleteRow(row.rowIndex);
    //     resetForm()}
    var result=confirm("are you sure to delete");
    if (result){
        console.log ("deleted")
    }

}
function validate() {
    isValid = true;
    if (document.getElementById("Name").value == "") {
        isValid = false;
        document.getElementById("NameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NameValidationError").classList.contains("hide"))
            document.getElementById("NameValidationError").classList.add("hide");
    }
    return isValid;
}
















// harryharryharrycoder

function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["name"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var city = document.forms['myForm']["city"].value;
    if (city.length>15){
        seterror("city", "*city length is too long");
        returnval = false;
    }

    var age = document.forms['myForm']["age"].value;
    if (age.length != 3){
        seterror("age", "*age fill !");
        returnval = false;
    }

    // var password = document.forms['myForm']["fpass"].value;
    // if (password.length < 6){

    //     // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
    //     seterror("pass", "*Password should be atleast 6 characters long!");
    //     returnval = false;
    // }

    // var cpassword = document.forms['myForm']["fcpass"].value;
    // if (cpassword != password){
    //     seterror("cpass", "*Password and Confirm password should match!");
    //     returnval = false;
    // }

    return returnval;
}

