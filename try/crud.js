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

    var regName = /^[a-z A-Z]+$/;
    var names = document.getElementById('name').value;
    // console.log("namekya",names);
    if(!regName.test(names)){
        document.getElementById("name1").innerHTML = "*Please Enter Valid Name"
    }else{
        document.getElementById("name1").innerHTML = ""
    }

    // console.log("check",check);

    if (document.getElementById("name").value == "") {
        document.getElementById("name1").innerHTML = " *Please fill name"
        document.getElementById("name").addEventListener("click", seterror);
        function seterror() {
            document.getElementById("name1").innerHTML = ""
        }

        return false;
    }
    var regName = /^[a-z A-Z]+$/;
    var names = document.getElementById('city').value;
    console.log("namekya",names);
    if(!regName.test(names)){
        document.getElementById("city1").innerHTML = "*Please Enter Valid City"
    }else{
        document.getElementById("city1").innerHTML = ""
    }

    if (document.getElementById("city").value == "") {
        document.getElementById("city1").innerHTML = "*Please fill city"
        document.getElementById("city").addEventListener("click", seterr);
        function seterr() {
            document.getElementById("city1").innerHTML = ""
        }

        return false;
    }
    var regName = /^[0-9]+$/;
    var names = document.getElementById('age').value;
    // console.log("namekya",names);
    // if(!regName.test(names)){
    //     document.getElementById("age1").innerHTML = "*Please Enter Valid age"
    // }
    // else{
    //     document.getElementById("age1").innerHTML = ""
    // }


    if (document.getElementById("age").value == "") {
        document.getElementById("age1").innerHTML = "*Please fill age"
        document.getElementById("age").addEventListener("click", showred);
        function showred() {
            document.getElementById("age1").innerHTML = ""
        }


        return false;
    }

    else {
        document.getElementById("age1").innerHTML = ""

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



// Save Button For save the records
function save_Button(am) {
    const field = [];
    console.log(am);
    var name_val = document.getElementById("name_text" + am).value;
    var city_val = document.getElementById("city_text" + am).value;
    var age_val = document.getElementById("age_text" + am).value;
    // console.log(name_text, city_text, age_text);
   
    // console.log('123456');
    // if(document.getElementById("new_name" + no).value==""){
    //     // alert("qqqqqqqqqqqqqqqqqqqq")
    //     document.getElementById("message").innerHTML = "** Please fill the name"
    // }
    if (name_val == "" || city_val == "" || age_val == "") {
        document.getElementById("name1").innerHTML = "** Please fill the details"
    }
    
    
    else {
        document.getElementById("name1").innerHTML = ""
        document.getElementById("name_row" + am).innerHTML = name_val;
        document.getElementById("city_row" + am).innerHTML = city_val;
        document.getElementById("age_row" + am).innerHTML = age_val;
        
    }
    
    let self = {
        name_val, city_val, age_val,
    }
    console.log(name_val);
    if (field[am]) {
        field[am] = self;
        console.log("hello", self)
    }
    document.getElementById("edit_button" + am).style.display = "block";
    document.getElementById("save_button" + am).style.display = "none";
}
//     const field = [];
//     console.log(am);
//     var name_val = document.getElementById("name_text" + am).value;
//     var city_val = document.getElementById("city_text" + am).value;
//     var age_val = document.getElementById("age_text" + am).value;
//     if (name_val==""){document.getElementById("name1" + am).innerHTML="please fill name";
// document.getElementById("name_text" + am)
// addEventListener("keypress",()=>
// {
//     document.getElementById("name1" + am).innerHTML="";});
// return;
//     }

//     if (city_val==""){document.getElementById("city1" + am).innerHTML="please fill city";
//     document.getElementById("city_text" + am)
//     addEventListener("keypress",()=>{document.getElementById("city1" + am).innerHTML="";});
//     return;
//         }

//         if (age_val==""){document.getElementById("age1"+ am).innerHTML="please fill age";
//         document.getElementById("age_text" + am)

//         addEventListener("keypress",()=>{document.getElementById("age1" + am).innerHTML="";});
//         return;
//             }
// else {
//     document.getElementById("name1").innerHTML="";
//     document.getElementById("city1").innerHTML="";
//     document.getElementById("age1").innerHTML="";

//     document.getElementById("name_row" + am).innerHTML = name_val;
//         document.getElementById("city_row" + am).innerHTML = city_val;
//         document.getElementById("age_row" + am).innerHTML = age_val;

// }
// let xyz={
//     age_val,
//     name_val,
//     city_val,
// };
// console.log(am,field[am]);
// if (field[am]){
//     field[am]=xyz;
//     console.log("hello",xyz);
// }
// document.getElementById("edit_button" +am).style.display="block";
// document.getElementById("save_button" +am).style.display="none";

//     document.getElementById("name_row" + am).innerHTML = name_val;
//     document.getElementById("city_row" + am).innerHTML = city_val;
//     document.getElementById("age_row" + am).innerHTML = age_val;

//     let self = {
//         age_val, name_val, city_val,
//     }
//     console.log(am, field[am]);
//     if (field[am]) {
//         field[am] = self;
//         console.log("updated", self)
//     }
//     document.getElementById("edit_button" + am).style.display = "block";


//     document.getElementById("save_button" + am).style.display = "none";
// }
// function add_put() {
//     var name = document.getElementById("name").value;
//     var city = document.getElementById("city").value;
//     var age = document.getElementById("age").value;
//     document.getElementById("name").style.display = "block";
//     document.getElementById("city").style.display = "block";
//     document.getElementById("age").style.display = "block";
//     document.getElementById("savbtn").style.display = "block";
//     var table = document.getElementById("tb_text");
//     var table_len = (table.rows.length) - 1;
//     var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + name + "</td><td id='city_row" + table_len + "'>" + city + "</td><td id='age_row" + table_len + "'>" + age + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_button(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_button(" + table_len + ")' style='display:none'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";
//     document.getElementById("name").value = "";
//     document.getElementById("city").value = "";
//     document.getElementById("age").value = "";
// }
//Edit Button for edit the save records
function edit(am) {
    document.getElementById("edit_button" + am).style.display = "none";
    document.getElementById("save_button" + am).style.display = "block";
    console.log("name", am.value);
    // if (name_val == "" || age_val == "" || city_val == "") {
    //     document.getElementById("name1").innerHTML = "** Please fill the details"
    // }
    // else {
    //     document.getElementById("name1").innerHTML = ""
    // }

    var name = document.getElementById("name_row" + am);
    var city = document.getElementById("city_row" + am);
    var age = document.getElementById("age_row" + am);

    // if (document.getElementById("name").value == " ") {

    // var regName = /^[a-z A-Z]+$/;
    // var names = document.getElementById('name').value;
    // console.log("namekya",name);
    // if(!regName.test(names)){
    //     document.getElementById("name1").innerHTML = "*Please Enter Valid Name"
    // }else{
    //     document.getElementById("name1").innerHTML = ""

    // }




    var name_field = name.innerHTML;
    var city_field = city.innerHTML;
    var age_field = age.innerHTML;
    name.innerHTML = "<input type='text' id='name_text" + am + "' value='" + name_field + "'>";
    city.innerHTML = "<input type='text' id='city_text" + am + "' value='" + city_field + "'>";
    age.innerHTML = "<input type='text' id='age_text" + am + "' value='" + age_field + "'>";
    console.log("")
}

// Delete  Button for delete Record
function delete_Button(am) {
    document.getElementById("row" + am + "").outerHTML = "";
}

console.log("deleted")

function New_Form() {
    document.getElementById("name").style.display = "block";
    document.getElementById("city").style.display = "block";
    document.getElementById("age").style.display = "block";
    document.getElementById("save").style.display = "block";
}





// function clearErrors(){

//     errors = document.getElementsByClassName('formerror');
//     for(let item of errors)
//     {
//         item.innerHTML = "";
//     }


// }
// function seterror(id, error){
//     //sets error inside tag of id
//     element = document.getElementById(id);
//     element.getElementsByClassName('formerror')[0].innerHTML = error;

// }

// function validateForm(){
//     var returnval = true;
//     clearErrors();

//     //perform validation and if validation fails, set the value of returnval to false
//     var name = document.forms['myForm']["fname"].value;
//     if (name.length<5){
//         seterror("name", "*Length of name is too short");
//         returnval = false;
//     }

//     if (name.length == 0){
//         seterror("name", "*Length of name cannot be zero!");
//         returnval = false;
//     }

//     var city = document.forms['myForm']["fcity"].value;
//     if (city.length>15){
//         seterror("city", "*city length is too long");
//         returnval = false;
//     }

//     var age = document.forms['myForm']["fage"].value;
//     if (age.length != 3){
//         seterror("age", "*age fill !");
//         returnval = false;
//     }
//     return returnval;
// }