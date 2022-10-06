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
    // console.log(typeof mob);
    // let x = parseInt(fn);
    // console.log(typeof x, "dfh");
    // console.log(x.toString(), "kkkk");
    // // console.log(typeof fn);
    // console.log(isNaN(fn.toString()));
    

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

    let obj = {id:Date.now(), fn: fn, ln: ln, em: em, mob: mob };
    arr.push(obj);
    document.forms[0].reset();
    let tables = document.querySelector("table").querySelector("tbody");
    let raw = document.createElement("tr");
    for (let i = 0; i < arr.length; i++) {
      raw.innerHTML = `<td>${arr[i].fn}</td>
                    <td>${arr[i].ln}</td>
                    <td>${arr[i].em}</td>
                    <td>${arr[i].mob}</td>
                    <td><button class="btn btn-warning btn-sm" id="edit_data${[
                      i,
                    ]}" onclick=edit(edit_data${[
        i,
      ]},save_data${i})>Edit</button>
                    <button class="btn btn-warning btn-sm" style="display:none" id="save_data${[
                      i,
                    ]}" onclick=save(save_data${[i]})>Save</button></td>
                    <td><button class="btn btn-danger btn-sm" id="delete_data" onclick=remove(this)>Delete</button></td>`;
    }
    tables.appendChild(raw);
    console.log(arr, "arrAY");
    console.log(raw)
  }else{
    console.log("hello")
  }
}
}

function edit(e,f) {
  console.log(f, "save_id");
  f.style.display = "block";
  document.getElementById(e.id).style.display = "none";
  document.getElementById("submit").style.display = "none";
  let row=e.parentElement.parentElement
  console.log(row.children[0].innerHTML)
  for (let i = 0; i < arr.length; i++) {
    let fname = (document.querySelector("#first_name").value = row.children[0].innerHTML);
    let lname = (document.querySelector("#last_name").value = row.children[1].innerHTML);
    let email = (document.querySelector("#email").value = row.children[2].innerHTML);
    let mobile = (document.querySelector("#mobile_no").value = row.children[3].innerHTML);
  }
}

function save(e) {
 
  console.log(e.parentElement.parentElement, "data is updated");
  let raw = e.parentElement.parentElement;
  let fname = document.getElementById("first_name").value;
  let lname = document.getElementById("last_name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile_no").value;



  
  let fn = document.getElementById("first_name").value.trim();
  let ln = document.getElementById("last_name").value.trim();
  let em = document.getElementById("email").value.trim();
  let mob = document.getElementById("mobile_no").value.trim();
  let fnRegex = /^[A-Za-z.]{2,30}$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let numRegex = /^[0-9]{10}$/;
  
    // console.log(typeof mob);
    // let x = parseInt(fn);
    // console.log(typeof x, "dfh");
    // console.log(x.toString(), "kkkk");
    // // console.log(typeof fn);
    // console.log(isNaN(fn.toString()));
    

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
  else{
    if(fnRegex.test(fn)&&fnRegex.test(ln)&&em.match(mailformat)&&numRegex.test(mob)){
      document.getElementById("submit").style.display = "block";
  for (let i = 0; i < arr.length; i++) {
    raw.innerHTML = `<td>${fname}</td><td>${lname}</td><td>${email}</td><td>${mobile}</td>
    <td><button class="btn btn-warning btn-sm" id="edit_data${[
      i,
    ]}" onclick=edit(edit_data${[i]},save_data${[i]})>Edit</button>
    <button class="btn btn-warning btn-sm" style="display:none" id="save_data${[
      i,
    ]}" onclick=save(save_data${[i]})>Save</button></td>
    <td><button class="btn btn-danger btn-sm" id="delete_data" onclick=remove(this)>Delete</button></td>`;

    let obj = { fn: fn, ln: ln, em: em, mob: mob };
    arr.splice(e.parentElement.parentElement, 1, obj);
    console.log(arr);
    document.forms[0].reset();
  }}
  else{
    console.log("hello")
  }
}}

function remove(e) {
  document.getElementById("submit").style.display = "block";
  console.log(e.parentElement.parentElement);
  if (confirm("Sure you want to delete")) {
    e.parentElement.parentElement.remove();
  //  console.log(e.p.target)
    arr.splice(e.parentElement.parentElement, 1);
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
