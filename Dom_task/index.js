function myfunction() {
  console.log("hello Good Morning");
  document.getElementById("box").style.visibility = "visible";
}
let arr = [];
function sub(event) {
  event.preventDefault();
  formvalidation();
  let fname = document.getElementById("first_name").value.trim();
  // if (fname == "") {
  //   document.getElementById("msgfn").innerHTML = "firstname is required";
  // }
  let lname = document.getElementById("last_name").value.trim();
  let email = document.getElementById("email").value.trim();
  let mobile = document.getElementById("mobile_no").value;
  console.log(lname, "lname");
  if (
    fname == "" ||
    lname == "" ||
    lname == undefined ||
    email == "" ||
    mobile == ""
  ) {
    alert("please Fill all filled");
  } else {
    document.getElementById("table").style.visibility = "visible";

    let obj = { fn: fname, ln: lname, em: email, mob: mobile };
    console.log(obj.ln, "abc");

    arr.push(obj);
    document.forms[0].reset();

    let tables = document.querySelector("table").querySelector("tbody");
    let raw = document.createElement("tr");
    for (let i = 0; i < arr.length; i++) {
      raw.innerHTML = `<td>${arr[i].fn}</td>
                    <td>${arr[i].ln}</td>
                    <td>${arr[i].em}</td>
                    <td>${arr[i].mob}</td>

                    <td><button class="btn btn-warning btn-sm" id="edit_data" onclick=edit(this)>Edit</button>
                    <button class="btn btn-warning btn-sm" id="save_data" onclick=save(this)>Save</button></td>
                    <td><button class="btn btn-danger btn-sm" id="delete_data" onclick=remove(this)>Delete</button></td>`;
    }
    tables.appendChild(raw);
    console.log(arr, "arrAY");
  }
}

function edit(e) {
  e.setAttribute("style", "display:none;");
  // document.getElementById("save_data").style.display = "block";
  document.getElementById("submit").style.display = "none";
  for (let i = 0; i < arr.length; i++) {
    let fname = (document.querySelector("#first_name").value = arr[i].fn);
    let lname = (document.querySelector("#last_name").value = arr[i].ln);
    let email = (document.querySelector("#email").value = arr[i].em);
    let mobile = (document.querySelector("#mobile_no").value = arr[i].mob);
  }
}

function save(e) {
  // document.getElementById("update").style.display = "none";
  document.getElementById("submit").style.display = "block";
  console.log("data is updated");
  let raw = e.parentElement.parentElement;
  let fname = document.getElementById("first_name").value;
  let lname = document.getElementById("last_name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile_no").value;

  raw.innerHTML = `<td>${fname}</td><td>${lname}</td><td>${email}</td><td>${mobile}</td><td><button class="btn btn-warning btn-sm" id="edit_data" onclick=edit(this)>Edit</button>
  <button class="btn btn-warning btn-sm" id="save_data" onclick=save(this)>Save</button></td>
  <td><button class="btn btn-danger btn-sm" id="delete_data" onclick=remove(this)>Delete</button></td>`;

  let obj = { fn: fname, ln: lname, em: email, mob: mobile };
  arr.splice(e.parentElement.parentElement, 1, obj);
  console.log(arr);
  document.forms[0].reset();
}

function remove(e) {
  console.log(e.parentElement.parentElement);
  if (confirm("Sure you want to delete")) {
    e.parentElement.parentElement.remove();

    arr.splice(e.parentElement.parentElement, 1);
    console.log(arr);
  } else {
    console.log("dont delete");
  }
}

function formvalidation() {
  let fn = document.getElementById("first_name").value;

  let g = fn.trim();
  console.log(g.length);
  let em = document.getElementById("email").value;

  if (g.length == "0") {
    document.getElementById("msgfn").innerHTML = "First Name is Required";
    return false;
  }
  //   if (em == n) {
  //   }
}
