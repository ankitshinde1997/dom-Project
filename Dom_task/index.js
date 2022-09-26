function myfunction() {
  console.log("hello Good Morning");
  document.getElementById("box").style.visibility = "visible";
}

function sub() {
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
  if (lname == "" || fname == "" || email == "" || mobile == "") {
    alert("please Fill all filled");
  } else {
    let obj = { fn: fname, ln: lname, em: email, mob: mobile };
    console.log(obj.ln, "abc");
    let arr = [];
    arr.push(obj);
    console.log(arr, "arrAY");

    document.getElementById("table").style.visibility = "visible";
    console.log("hello", fname);
    document.getElementById("fn").innerHTML = fname;
    document.getElementById("ln").innerHTML = lname;
    document.getElementById("eml").innerHTML = email;
    document.getElementById("mob").innerHTML = mobile;
  }
}
