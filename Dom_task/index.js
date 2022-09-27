function myfunction() {
  console.log("hello Good Morning");
  document.getElementById("box").style.visibility = "visible";
}
let arr = [];
function sub(event) {
  event.preventDefault();
  //   console.log("hrllo");
  //   let x = document.forms["form1"];
  //   console.log(x.value, "xxx");
  //   if (x.value == "") {
  //     alert("please fill all the field");
  //   }
  //   //   console.log(x[0].value, "value");
  //   else {
  //     let text = [];
  //     for (let i = 0; i < x.length - 1; i++) {
  //       text.push(x[i].value);
  //     }
  //     console.log(text);
  //   }

  let fname = document.getElementById("first_name").value;
  let lname = document.getElementById("last_name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile_no").value;
  console.log(lname, "lname");
  if (
    lname == "" ||
    lname == undefined ||
    fname == "" ||
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

                    <td><button class="btn btn-warning btn-sm" id="edit_data" onclick=edit(this)>Edit</button></td>
                    
                    <td><button class="btn btn-danger btn-sm" id="delete_data" onclick=remove(this)>Delete</button></td>`;
    }
    tables.appendChild(raw);
    console.log(arr, "arrAY");

    // console.log("hello", fname);
    // document.getElementById("fn").innerHTML = fname
    // document.getElementById("ln").innerHTML = lname;
    // document.getElementById("eml").innerHTML = email;
    // document.getElementById("mob").innerHTML = mobile;
  }
}

function edit(e) {
  // console.log("hello");
  // e.parentElement.parentElement.remove();
  // let tables = document.querySelector("table").querySelector("tbody");
  // let raw = document.createElement("tr");
  // for (let i = 0; i < arr.length; i++) {
  //   raw.innerHTML = `<td><input value=${arr[i].fn}></td>
  //                 <td><input value=${arr[i].ln}></td>
  //                 <td><input value=${arr[i].em}></td>
  //                <td> <input value=${arr[i].mob}></td>
  //                 <td><button class="btn btn-warning btn-sm" id="edit_data" onclick=save(this)>save</button></td>
  //                 <td><button class="btn btn-danger btn-sm" id="delete_data" onclick=remove(this)>Delete</button></td>`;
  // }
  // tables.appendChild(raw);
  // let tr=
  // document.getElementById("edit_data").style.display = "none";
  // document.getElementById("save").style.display = "block";
  // docu = e.parentElement.previousElementSibling.innerHTML;
  // e.parentElement.parentElement.remove();
  // let x = document.getElementById("edit_data").value;
}

function remove(e) {
  confirm("Sure you want to delete");
  if (confirm == true) {
    e.parentElement.parentElement.remove();

    arr.splice(e.parentElement.parentElement.id, 1);
    console.log(arr);
  } else {
    console.log("dont delete");
  }
}

// for (let i = 0; i < arr.length; i++) {
// document.getElementById("delete_data").parentElement.parentElement.remove();
// arr[0].pop();
// console.log(arr);
// arr.pop()
// console.log(arr)
// }

// if (document.querySelectorAll("tbody > tr")) {
//   document
//     .querySelectorAll("tbody > tr")
//     [document.querySelectorAll("tbody > tr").length - 1].remove();
//   arr.pop();
//   console.log(arr);
// }
// var row = btn.parentNode.parentNode;
// row.parentNode.removeChild(row);
// // update your data (remove item by row id)
// arr = arr.filter((item) => item.id !== `$(row).children()[0].innerText)`;
// console.log(arr);
// let deleteTask = (e) = {

// localStorage.setItem("data", JSON.stringify(data));

// $(function(){
//   var arr= [
//     {"name": "John"},
//     {"name": "Henry"}
//  ];
//  $('.dm').click(function(){
//       var val = $(this).closest('tr').find(".name").text();
//       console.log(val);
//       var index = arr.findIndex(function(item) {return item.name == val})
//       console.log(index)
//       arr.splice(index, 1)
//       console.log(arr);
//   })
// })
