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
    // console.log(name_text, country_text, age_text);
    document.getElementById("name_row" + no).innerHTML = name_val;
    document.getElementById("country_row" + no).innerHTML = country_val;
    document.getElementById("age_row" + no).innerHTML = age_val;
    // console.log('123456');
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















<html>
<head>
    <script type="text/javascript" src="tav.js"></script>
</head>
<style>
    body {
        background-color: cadetblue;
    }
</style>
<body>
    <div id="wrapper">
        <input type="button" class="add" onclick="change_new_row();" value="Add Row" style="margin-left: 930px;">
        <table align='center' cellspacing=2 cellpadding=5 id="data_table" border=1 style="background-color: darkgrey;">
            <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Age</th>
                <th>Actiom</th>
            </tr>
            <tr>
                <td><input type="text" id="new_name" style="display:none"><span id="message" style="color: red;"></span></td>
                <td><input type="text" id="new_country" style="display:none"><span id="message1" style="color: red;"></span></td>
                <td><input type="number " id="new_age" style="display:none"><span id="message2" style="color: red;"></span></td>
                <td><input type="button" class="add" id="sav_btn" onclick="add_row();" value="Save"
                        style="display:none"></td>
            </tr>
<!--
<input type="button" class="kick" onclick="add_put();" value="Add Row">
<tr>
    <td><input type="text" id="new_name" style="display:none"></td>
    <td><input type="text" id="new_country" style="display:none"></td>
    <td><input type="number " id="new_age" style="display:none"></td>
    <td><input type="button" class="add" id="sav_btn" onclick="add_row();" value="Save"
            style="display:none"></td>
</tr> -->
            <!-- <tr id="row2">
                <td id="name_row2">Shawn</td>
                <td id="country_row2">Canada</td>
                <td id="age_row2">26</td>
                <td>
                <input type="button" id="edit_button2" value="Edit" class="edit" onclick="edit_row('2')">
                <input type="button" id="save_button2" value="Save" class="save" onclick="save_row('2')">
                <input type="button" value="Delete" class="delete" onclick="delete_row('2')">
                </td>
                </tr>  -->
            <!--
                <tr id="row3">
                <td id="name_row3">Rahul</td>
                <td id="country_row3">India</td>
                <td id="age_row3">19</td>
                <td>
                <input type="button" id="edit_button3" value="Edit" class="edit" onclick="edit_row('3')">
                <input type="button" id="save_button3" value="Save" class="save" onclick="save_row('3')">
                <input type="button" value="Delete" class="delete" onclick="delete_row('3')">
                </td>
                </tr> -->
        </table>
    </div>
</body>
</html>









