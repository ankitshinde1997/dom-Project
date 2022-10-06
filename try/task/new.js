const field = [];

// Insert Form For new line
function insert_Form() {
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var age = document.getElementById("age").value;
    let info = {
        name, city, age
    }

// validation if any field are blank
    field.push(info);
    console.log(info);

//     var check =/abc/gi;
//     var namevalue = document.getElementById("name").value;
//     console.log("value",namevalue);
//     if(check.test(namevalue)){
//     console.log("done");
// 

// var regName = /^[a-z]+$/;
// var names = document.getElementById('name').value;
// console.log("namekya",names);
// if(!regName.test(names)){
//     document.getElementById("name1").innerHTML = "*Please Enter Valid Name"
// }else{
//     document.getElementById("name1").innerHTML = ""
// }

    // console.log("check",check);
    
    if (document.getElementById("name").value == "") {
       document.getElementById("name1").innerHTML = " *Please fill name"
         document.getElementById("name").addEventListener("click", seterror);
        function seterror() {
            document.getElementById("name1").innerHTML = ""
        }
       
        return false;
    }
    // var regName = /^[a-z]+$/;
    // var names = document.getElementById('city').value;
    // console.log("namekya",names);
    // if(!regName.test(names)){
    //     document.getElementById("city1").innerHTML = "*Please Enter Valid City"
    // }else{
    //     document.getElementById("city1").innerHTML = ""
    // }

    if (document.getElementById("city").value == "") {
        document.getElementById("city1").innerHTML = "*Please fill city"
        document.getElementById("city").addEventListener("click", seterr);
        function seterr() {
            document.getElementById("city1").innerHTML = ""
        }
        
        return false;
    }
    // var regName = /^[0-9]+$/;
    // var names = document.getElementById('age').value;
    // console.log("namekya",names);
    // if(!regName.test(names)){
    //     document.getElementById("age1").innerHTML = "*Please Enter Valid age"
    // }else{
    //     document.getElementById("age1").innerHTML = ""
    // }


    if (document.getElementById("age").value == "") {
        document.getElementById("age1").innerHTML = "*Please fill age"
        document.getElementById("age").addEventListener("click", showred);
        function showred() {
            document.getElementById("age1").innerHTML = ""
        }
        
    //     var numbers = /^[a-z]+$/;
    //   if(inputtxt.value.match(numbers))
    //     return false;
    }
    else {
        var maindata = document.getElementById("tb_text");
        var maindata_len = (maindata.rows.length) - 1;
        var row = maindata.insertRow(maindata_len).outerHTML = "<tr id='row" + maindata_len + "'><td id='name_row" + maindata_len + "'>" + name + "</td><td id='city_row" + maindata_len + "'>" + city + "</td><td id='age_row" + maindata_len + "'>" + age + "</td><td><input type='button' id='edit_button" + maindata_len + "' value='Edit' class='edit' onclick='edit(" + maindata_len + ")'> <input type='button' id='save_button" + maindata_len + "' value='Save' class='save' onclick='save_Button(" + maindata_len + ")' style='display:none'> <input type='button' value='Delete' class='delete' onclick='delete_Button(" + maindata_len + ")'></td></tr>";
        document.getElementById("name").style.display = "none";
        document.getElementById("city").style.display = "none";
        document.getElementById("age").style.display = "none";
        document.getElementById("save").style.display = "none";
        
    }
     document.getElementById("name").value = "";
    document.getElementById("city").value = "";
    document.getElementById("age").value = "";
    }
    // function numberValidation() {
    //     var n = document.form.numbers.value;
    //     if (isNaN(n)) {
    //         document.getElementById(
    //             "age").innerHTML =
    //             "Please enter Numeric value";
    //           return false;
    //       } else {

    //           document.getElementById(
    //             "age").innerHTML = 
    //             "Numeric value is: " + n;
    //             document.getElementById("age").style.display = "none";
    //             document.getElementById("age").value = "";


    //       }
      
    // }


// Save Button For save the records
function save_Button(am) {
    console.log(am);
    var name_val = document.getElementById("name_text" + am).value;
    var city_val = document.getElementById("city_text" + am).value;
    var age_val = document.getElementById("age_text" + am).value;
    
    document.getElementById("name_row" + am).innerHTML = name_val;
    document.getElementById("city_row" + am).innerHTML = city_val;
    document.getElementById("age_row" + am).innerHTML = age_val;
    
    let self = {
        age_val, name_val, city_val,
    }
    console.log(am, field[am]);
    if (field[am]) {
        field[am] = self;
        console.log("updated", self)
    }
    document.getElementById("edit_button" + am).style.display = "block";

    
    document.getElementById("save_button" + am).style.display = "none";
}
//Edit Button for edit the save records
function edit(am) {
    document.getElementById("edit_button" + am).style.display = "none";
    document.getElementById("save_button" + am).style.display = "block";
    console.log("name",am.value);
    var name = document.getElementById("name_row" + am);
    var city = document.getElementById("city_row" + am);
    var age = document.getElementById("age_row" + am);
    console.log("name",name);
    // if (document.getElementById("name_row").value == " ") {

    //     console.log("chedk");

    // }
       
       
        
    var name_field = name.innerHTML;
    var city_field = city.innerHTML;
    var age_field = age.innerHTML;
    name.innerHTML = "<input type='text' id='name_text" + am + "' value='" + name_field + "'>";
    city.innerHTML = "<input type='text' id='city_text" + am + "' value='" + city_field + "'>";
    age.innerHTML = "<input type='text' id='age_text" + am + "' value='" + age_field + "'>";
}

// Delete  Button for delete Record
function delete_Button(am) {
    document.getElementById("row" + am + "").outerHTML = "";}
    // if (confirm('Are you sure to delete?')) {
    //     row = am.parentElement.parentElement;
    //     document.getElementById("tb_text").delete(row.rowIndex);
    //     resetForm();
    // }
    // var result=("are you sure to delete");
    // if (result){
        console.log ("deleted")
    // }
function New_Form() {
    document.getElementById("name").style.display = "block";
    document.getElementById("city").style.display = "block";
    document.getElementById("age").style.display = "block";
    document.getElementById("save").style.display = "block";
}
