const data = [];
function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";
    var name = document.getElementById("name_row" + no);
    var country = document.getElementById("country_row" + no);
    var age = document.getElementById("age_row" + no);
    console.log('qwerty');
    if (document.getElementById("new_name").value == " ") {
    }
    var name_data = name.innerHTML;
    var country_data = country.innerHTML;
    var age_data = age.innerHTML;
    name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    country.innerHTML = "<input type='text' id='country_text" + no + "' value='" + country_data + "'>";
    age.innerHTML = "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
}
function save_row(no) {
    console.log(no);
    var name_val = document.getElementById("name_text" + no).value;
    var country_val = document.getElementById("country_text" + no).value;
    var age_val = document.getElementById("age_text" + no).value;
    
    document.getElementById("name_row" + no).innerHTML = name_val;
    document.getElementById("country_row" + no).innerHTML = country_val;
    document.getElementById("age_row" + no).innerHTML = age_val;
    
    let zyx = {
        age_val, name_val, country_val,
    }
    console.log(no, data[no]);
    if (data[no]) {
        data[no] = zyx;
        console.log("hello", zyx)
    }
    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}
function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}
function change_new_row() {
    document.getElementById("new_name").style.display = "block";
    document.getElementById("new_country").style.display = "block";
    document.getElementById("new_age").style.display = "block";
    document.getElementById("sav_btn").style.display = "block";
    // let newtable = document.getElementById("data_table");
    // console.log("newtable");
    // let newtable_len = (newtable.rows.length) - 1;
    //let newrow = newtable.insertRow(newtable_len).outerHTML = "<tr id='row" + newtable_len + "'><td id='name_row" + newtable_len + "'>" + new_name + "</td><td id='country_row" + newtable_len + "'>" + new_country + "</td><td id='age_row" + newtable_len + "'>" + new_age + "</td><td><input type='button' id='edit_button" + newtable_len + "' value='Edit' class='edit' onclick='edit_row(" + newtable_len + ")'> <input type='button' id='save_button" + newtable_len + "' value='Save' class='save' onclick='save_row(" + newtable_len + ")' style='display:none'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + newtable_len + ")'></td></tr>";
}
function add_row() {
    var new_name = document.getElementById("new_name").value;
    var new_country = document.getElementById("new_country").value;
    var new_age = document.getElementById("new_age").value;
    let xyz = {
        new_name, new_country, new_age
    }
    data.push(xyz);
    console.log(xyz);
    if (document.getElementById("new_name").value == "") {
        document.getElementById("message").innerHTML = "** Please fill the name"
        document.getElementById("new_name").addEventListener("keypress", myloss);
        function myloss() {
            document.getElementById("message").innerHTML = ""
        }
        document.getElementById("new_name").addEventListener("keydown", mypop);
        function mypop() {
            const value = document.getElementById("new_name").value
            if (value.length == 0) {
                document.getElementById("message").innerHTML = "please fill the details "
            }
        }
        return false;
    }
    if (document.getElementById("new_country").value == "") {
        document.getElementById("message1").innerHTML = "** Please fill the name"
        document.getElementById("new_country").addEventListener("keypress", cool);
        function cool() {
            document.getElementById("message1").innerHTML = ""
        }
        document.getElementById("new_country").addEventListener("keypress", cool);
        function cool() {
            document.getElementById("message1").innerHTML = ""
        }
        document.getElementById("new_country").addEventListener("keydown", my);
        function my() {
            const value = document.getElementById("new_country").value
            if (value.length == 0) {
                document.getElementById("message1").innerHTML = "please fill the details "
            }
        }
        return false;
    }
    if (document.getElementById("new_age").value == "") {
        document.getElementById("message2").innerHTML = "** Please fill the name"
        document.getElementById("new_age").addEventListener("keypress", myloss);
        function myloss() {
            document.getElementById("message2").innerHTML = ""
        }
        document.getElementById("new_age").addEventListener("keydown", my);
        function my() {
            const value = document.getElementById("new_age").value
            if (value.length == 0) {
                document.getElementById("message2").innerHTML = "please fill the details "
            }
        }
        return false;
    }
    // if( document.getElementById("new_country").value == "" ) {
    //     document.getElementById("message1").innerHTML = "** Please fill the country name"
    //     document.getElementById("new_country").value() ;
    //     return false;
    // }
    // if( document.getElementById("new_age").value == "" ) {
    //     document.getElementById("message2").innerHTML = "** Please fill the Age"
    //     document.getElementById("new_age").value() ;
    //     return false;
    // }
    // if( document.getElementById("new_country").value == "" ) {
    //     alert( "Please provide your country name!" );
    //     document.getElementById("new_country").value() ;
    //     return false;
    // }
    // if( document.getElementById("new_age").value == "" ) {
    //     alert( "Please provide your age!" );
    //     document.getElementById("new_age").value() ;
    //     return false;
    // }
    // if (!(new_name && new_country && new_age)) {
    //     alert("Please Enter valid Value ")
    // }
    else {
        var table = document.getElementById("data_table");
        var table_len = (table.rows.length) - 1;
        var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + new_name + "</td><td id='country_row" + table_len + "'>" + new_country + "</td><td id='age_row" + table_len + "'>" + new_age + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")' style='display:none'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";
        document.getElementById("new_name").style.display = "none";
        document.getElementById("new_country").style.display = "none";
        document.getElementById("new_age").style.display = "none";
        document.getElementById("sav_btn").style.display = "none";
        // console.log(new_names, new_country, new_age);
    }
    // console.log("table", table)
    // if (table_len.row.length > 0) {
    // console.log("testing")
    // }
    document.getElementById("new_name").value = "";
    document.getElementById("new_country").value = "";
    document.getElementById("new_age").value = "";
}
// function save_data() {
//     //get data from input //
//     var new_data = document.getElementById('sav_btn').value;
//     //if there is nothing a the start then save an empty array//
//     if (localStorage.getItem('sav_btn') === null) {
//         console.log("localStorage");
//         localStorage.setItem('sav_btn', '[]');
//     }
//     //get old data and slap it to new data//
//     let old_data = JSON.parse(localStorage.getItem('sav_btn'));
//     old_data.push(new_data);
//     localStorage.setItem('sav_btn', JSON.stringify(old_data));
// }
function add_put() {
    var new_name = document.getElementById("new_name").value;
    var new_country = document.getElementById("new_country").value;
    var new_age = document.getElementById("new_age").value;
    document.getElementById("new_name").style.display = "block";
    document.getElementById("new_country").style.display = "block";
    document.getElementById("new_age").style.display = "block";
    document.getElementById("sav_btn").style.display = "block";
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + new_name + "</td><td id='country_row" + table_len + "'>" + new_country + "</td><td id='age_row" + table_len + "'>" + new_age + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")' style='display:none'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";
    document.getElementById("new_name").value = "";
    document.getElementById("new_country").value = "";
    document.getElementById("new_age").value = "";
}

































// try code 
data.push(abc);
console.log(abc);

if (document.getElementById("name").value == "") {
    // document.getElementById("name1").innerHTML = " Please fill the name"
    // document.getElementById("name").addEventListener("keypress", myloss);
    function mypop() {
        // document.getElementById("name1").innerHTML = ""
    }
    // document.getElementById("name").addEventListener("keydown", mypop);
    function mypop() {
        const value = document.getElementById("name").value
        if (value.length == 0) {
            // document.getElementById("name1").innerHTML = "please fill the details "
        }
    }
    return false;
}
if (document.getElementById("city").value == "") {
    // document.getElementById("city1").innerHTML = "** Please fill the city"
    // document.getElementById("city").addEventListener("keypress", cool);
    function cool() {
        // document.getElementById("city1").innerHTML = ""
    }
    // document.getElementById("city").addEventListener("keypress", cool);
    function cool() {
        // document.getElementById("city1").innerHTML = ""
    }
    // document.getElementById("city").addEventListener("keydown", my);
    function my() {
        const value = document.getElementById("city").value
        if (value.length == 0) {
            // document.getElementById("city1").innerHTML = "please fill city"
        }
    }
    return false;
}
if (document.getElementById("age").value == "") {
    // document.getElementById("age1").innerHTML = "Please fill age"
    // document.getElementById("age").addEventListener("keypress", myloss);
    function myloss() {
        // document.getElementById("age1").innerHTML = ""
    }
    // document.getElementById("age").addEventListener("keydown", my);
    // function my() {
    //     const value = document.getElementById("age").value
    //     if (value.length == 0) {
    //         document.getElementById("city1").innerHTML = "please fill the details "
    //     }
    // }
    return false;
}
else {
    var table = document.getElementById("tb_text");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + name + "</td><td id='city_row" + table_len + "'>" + city + "</td><td id='age_row" + table_len + "'>" + age + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")' style='display:none'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";
    document.getElementById("name").style.display = "none";
    document.getElementById("city").style.display = "none";
    document.getElementById("age").style.display = "none";
    document.getElementById("save").style.display = "none";
    
}
 document.getElementById("name").value = "";
document.getElementById("city").value = "";
document.getElementById("age").value = "";

// function onDelete_row(td) {
//     if (confirm('Are you sure to delete this record ?')) {
//         row = td.parentElement.parentElement;
//         document.getElementById("tb_text").deleteRow(row.rowIndex);
//         resetForm();
//     }
// }






 // document.getElementById("name").addEventListener("btnshow", seterror);
        // function cart() {
            // const value =.getElementById("name").value
            // if (value.length==5) {
                // document.getElementById("name1").innerHTML = "please fill the details "
            // }
            
        // }






        // document.getElementById("city").addEventListener("click", seterr);
        // function disk() {
            // document.getElementById("city1").innerHTML = ""
        // }
        // document.getElementById("city").addEventListener("btnshow", cell);
        // function cell() {
            // const value = document.getElementById("city").value
            // if (value.length == 0) {
                // document.getElementById("city1").innerHTML = "please fill city"
            // }
        // }



        // document.getElementById("age").addEventListener("btnshow", cell);
        // function cell() {
        //     const value = document.getElementById("age").value
        //     if (value.length == 0) {
        //         document.getElementById("city1").innerHTML = "please fill the details "
        //     }
        // }





            
// function new_one() {
//     var nameB = document.getElementById("name1").value;
//     var cityB = document.getElementById("city1").value;
//     var ageB = document.getElementById("ageB").value;
//     document.getElementById("name1").style.display = "block";
//     document.getElementById("city1").style.display = "block";
//     document.getElementById("age").style.display = "block";
//     document.getElementById("savbtn").style.display = "block";
//     var maindata = document.getElementById("field_maindata");
//     var maindata_len = (maindata.rows.length) - 1;
//     var row = maindata.insertRow(maindata_len).outerHTML = "<tr id='row" + maindata_len + "'><td id='name_row" + maindata_len + "'>" + nameB + "</td><td id='city_row" + maindata_len + "'>" + cityB + "</td><td id='age_row" + maindata_len + "'>" + ageB + "</td><td><input type='button' id='edit_button" + maindata_len + "' value='Edit' class='edit' onclick='edit(" + maindata_len + ")'> <input type='button' id='save_button" + maindata_len + "' value='Save' class='save' onclick='save_Button(" + maindata_len + ")' style='display:none'> <input type='button' value='Delete' class='delete' onclick='delete_Button(" + maindata_len + ")'></td></tr>";
//     document.getElementById("name1").value = "";
//     document.getElementById("city1").value = "";
//     document.getElementById("age1").value = "";
// }







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

var regName = /^[a-z]+$/;
var names = document.getElementById('name').value;
console.log("namekya",names);
if(!regName.test(names)){
    document.getElementById("name1").innerHTML = "*Please Enter Valid Name"
}else{
    document.getElementById("name1").innerHTML = ""
}

    // console.log("check",check);
    
    // if (document.getElementById("name").value == "") {
    //    document.getElementById("name1").innerHTML = " *Please fill name"
    //      document.getElementById("name").addEventListener("click", seterror);
    //     function seterror() {
    //         document.getElementById("name1").innerHTML = ""
    //     }
       
    //     return false;
    // }
    var regName = /^[a-z]+$/;
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
    console.log("namekya",names);
    if(!regName.test(names)){
        document.getElementById("age1").innerHTML = "*Please Enter Valid age"
    }else{
        document.getElementById("age1").innerHTML = ""
    }


    if (document.getElementById("age").value == "") {
        document.getElementById("age1").innerHTML = "*Please fill age"
        document.getElementById("age").addEventListener("click", showred);
        function showred() {
            document.getElementById("age1").innerHTML = ""
        }
        
        var numbers = /^[a-z]+$/;
      if(inputtxt.value.match(numbers))
        return false;
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