function myfunction() {
    console.log("hello Good Morning");
    document.getElementById("box").style.visibility = "visible";
  }
  
  let arr = [];
  
  function sub(event) {
    event.preventDefault();
    let fn = document.getElementById("first_name").value.trim();
    let ln = document.getElementById("last_name").value.trim();
    let em = document.getElementById("email").value.trim();
    let mob = document.getElementById("mobile_no").value.trim();
    let fnRegex = /^[A-Za-z.]{2,30}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let numRegex = /^[0-9]{10}$/;
    function formvalidation() {
     
      if (fn.length == "0" || !fnRegex.test(fn)) {
        document.getElementById("msgfn").innerHTML = "First Name is Required";
      }
      if (ln.length == "0" || !fnRegex.test(ln)) {
        document.getElementById("msgln").innerHTML = "Last Name is Required";
      }
      if (em.length == "0" || !em.match(mailformat)) {
        document.getElementById("msgem").innerHTML = "Email is Required";
      }
      if (mob.length != "10" || !numRegex.test(mob)) {
        document.getElementById("msgmob").innerHTML = "mobile Number is Required";
      }
    }
  
    console.log(formvalidation(), "ssdf");
  
    if (formvalidation()) {
      console.log("please Fill all filled");
    } else {
      if(fnRegex.test(fn)&&fnRegex.test(ln)&&em.match(mailformat)&&numRegex.test(mob)){
      document.getElementById("table").style.visibility = "visible";
  
      let obj = { fn: fn, ln: ln, em: em, mob: mob };
      arr.push(obj);
      console.log(arr)
      document.forms[0].reset();
    let maindata = document.getElementById("tbody1");
    let index_t = (maindata.rows.length);
    let row = maindata.insertRow(index_t).outerHTML = "<tr id='row" +index_t  + "'><td id='name_row" + index_t + "'>" + fn + "</td><td id='city_row" + index_t + "'>" + ln + "</td><td id='age_row" + index_t + "'>" + em + "</td><td id='mobile_row" + index_t + "'>" + mob + "</td><td><button  id='edit_button" + index_t + "'  class='edit btn btn-warning btn-sm' onclick='edit(" + index_t + ")'> Edit </button>&nbsp;&nbsp;<button id='save_button" + index_t + "'  class='save btn btn-warning btn-sm' onclick='save_Button(" + index_t + ")' style='display:none'>Save</button>&nbsp;&nbsp;<button class='delete btn btn-danger btn-sm' onclick='remove(" + index_t + ")'>Delete</button></td></tr>";
    }else{
      console.log("hello")
    }
  }
  }

function edit(am) {
    document.getElementById("submit").style.display = "none";
    document.getElementById("edit_button" + am).style.display = "none";
    document.getElementById("save_button" + am).style.display = "inline-block";
    console.log("name", am);
    let name = document.getElementById("name_row" + am);
    let city = document.getElementById("city_row" + am);
    let age = document.getElementById("age_row" + am);
    let mobile=document.getElementById("mobile_row"+am)
    document.getElementById("first_name").value = name.innerHTML
    document.getElementById("last_name").value = city.innerHTML
    document.getElementById("email").value = age.innerHTML
    document.getElementById("mobile_no").value=mobile.innerHTML
   // var name_field = name.innerHTML;
    // var city_field = city.innerHTML;
    // var age_field = age.innerHTML;
    // let mobile_field = mobile.innerHTML
    // name.innerHTML = "<input type='text' id='name_text" + am + "' value='" + name_field + "'>";
    // city.innerHTML = "<input type='text' id='city_text" + am + "' value='" + city_field + "'>";
    // age.innerHTML = "<input type='text' id='age_text" + am + "' value='" + age_field + "'>";
    // mobile.innerHTML="<input type='text' id='mobile_text" + am + "' value='" + mobile_field + "'>"
    // console.log("")
}
function save_Button(am) {
    // const field = [];
    console.log(am);
    let name_val = document.getElementById("first_name").value.trim();
    var city_val = document.getElementById("last_name" ).value.trim();
    var age_val = document.getElementById("email").value.trim()
    let mobile_val = document.getElementById("mobile_no").value.trim()
    let fnRegex = /^[A-Za-z.]{2,30}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let numRegex = /^[0-9]{10}$/;
    
    if (!fnRegex.test(name_val)) {
        document.getElementById("msgfn").innerHTML = "First Name is Required";
      }
      if (!fnRegex.test(city_val)) {
        document.getElementById("msgln").innerHTML = "Last Name is Required";
      }
      if ( !age_val.match(mailformat)) {
        document.getElementById("msgem").innerHTML = "Email is Required";
      }
      if ( !numRegex.test(mobile_val)) {
        document.getElementById("msgmob").innerHTML = "mobile Number is Required";
        return false
      }
    else {
        if(fnRegex.test(name_val)&&fnRegex.test(city_val)&&age_val.match(mailformat)&&numRegex.test(mobile_val))
        {
        document.getElementById("name_row" + am).innerHTML = name_val;
        document.getElementById("city_row" + am).innerHTML = city_val;
        document.getElementById("age_row" + am).innerHTML = age_val;
        document.getElementById("mobile_row"+am).innerHTML=mobile_val;
        let self = {fn: name_val,ln: city_val,em: age_val,mob:mobile_val}
        console.log(name_val);
    if (arr[am]) {
        // arr[am] = self;
        // console.log("hello", self)
        arr.splice(am,1,self)
        console.log(arr,"ffffff")
    }
        document.getElementById("edit_button" + am).style.display = "inline-block";
        document.getElementById("save_button" + am).style.display = "none";
        document.getElementById("submit").style.display = "block";
        document.forms[0].reset();
        console.log("updated")
     }
else{console.log("insert all fiels")}
} } 


  function remove(e) {
    document.getElementById("submit").style.display = "block";
    console.log(e);
    if (confirm("Sure you want to delete")) {
    document.getElementById("row" + e + "").outerHTML = "";
    arr.splice(e, 1);
      console.log(arr);
      document.forms[0].reset();
    } else {
      console.log("dont delete");
    }
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
      document.getElementById("msgmob").innerHTML = "";
    } else {
      document.getElementById("msgmob").innerHTML = "";
    }
  }
  
  function num(e){
    e.value = e.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');
  }
  