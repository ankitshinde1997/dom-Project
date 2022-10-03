var row=null;
function sub(event)
{ 
    event.preventDefault();
    console.log("helo")
   var ReadDataLocalStore=localStoragess(dataEnter)
   if(dataEnter == false)
    {console.log("bye")
        document.getElementById("fnameError").innerHTML = "*First name is invelid";
        document.getElementById("lnameError").innerHTML = "*Last name is invelid";
        document.getElementById("mobError").innerHTML = "*plese Enter your Currect Number";
        document.getElementById("gmailError").innerHTML = "*plese Enter your @gamil.com";
        msg.innerHTML=" plese Enter Data!";
    }
    else
    {
       if(row==null)
       {
        inserttab(ReadDataLocalStore);   
       }
       else
      {
        update();
        msg.style.color="green";
        msg.innerHTML="Update Data";
       var dataEnter=readData();
    }
    }
document.getElementById("form").reset();
    // console.log(ReadDataLocalStore);
}
const first=document.getElementById("Fname")
const last=document.getElementById("Lname")
const num=document.getElementById("Mob")
const mail=document.getElementById("Gmail")
function readData()
{
    // event.preventDefault();
     Fname = first.value;
    Lname = last.value;
    Mob = num.value;
    Gmail = mail.value;
console.log(Fname)
    var fnamecheck = /^[A-Za-z.]{3,20}$/;
    var lnamecheck = /^[A-Za-z.]{3,20}$/;
    var mobcheck=/^[789][0-9]{9}$/;
    var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var arr=[];
   //.. validation

   if(arr.includes(""))
     {
        return false;
     }
     if (!fnamecheck.test(Fname))
         {
            document.getElementById("fnameError").innerHTML = "*First name is invelid";  
            return false;   
         } 
    else
    {
        document.getElementById("fnameError").innerHTML = " ";
        arr.push(Fname);  
     }
     if (!lnamecheck.test(Lname))
     {
        document.getElementById("lnameError").innerHTML = "*Last name is invelid";
        return false;
     } 
     else
     {
        document.getElementById("lnameError").innerHTML = " ";
        arr.push(Lname);
    }
    if (!mobcheck.test(Mob))
    {
        document.getElementById("mobError").innerHTML = "*plese Enter your Currect Number";
        return false;
        
    }
    else
     {
        document.getElementById("mobError").innerHTML = " ";
        arr.push(Mob);
    }
    if(!emailcheck.test(Gmail))
    {
        document.getElementById("gmailError").innerHTML = "*plese Enter your @gamil.com";
           return false;
    }
    else
     {
        document.getElementById("gmailError").innerHTML = " ";
        arr.push(Gmail)
          
     }
     return arr; 
}
//...read
//Data in local Stroage
function localStoragess(dataEnter)
{
    var a=localStorage.setItem("fname",dataEnter[0]);
    var b=localStorage.setItem("lname",dataEnter[1]);
    var c=localStorage.setItem("mob",dataEnter[2]);
    var d=localStorage.setItem("gmail",dataEnter[3]);

    var a1=localStorage.getItem("fname",a);
    var b1=localStorage.getItem("lname",b);
    var c1=localStorage.getItem("mob",c);
    var d1=localStorage.getItem("gmail",d);

    var arr=[a1,b1,c1,d1];
    return arr;

}
//.........................................Insert............................
function inserttab(ReadDataLocalStore)
{
    // event.preventDefault();
    var tables =document.querySelector('table').querySelector('tbody');
    //  tables= document.querySelector('table');
    var row= document.createElement('tr');
    tables.appendChild(row);
    for(var i=0;i<ReadDataLocalStore.length;i++)
    {
      row.insertCell(i).innerHTML=ReadDataLocalStore[i];
    }
    row.insertCell(4).innerHTML=`<button onclick=remove(this)>Delete</button> 
                                  <button onclick=edit(this)>Edit</button>`;
}
//..............................Edit.....................................
function edit(td)
{
    // event.preventDefault();
    row=td.parentElement.parentElement;
    document.getElementById("Fname").value=row.cells[0].innerHTML;
    document.getElementById("Lname").value=row.cells[1].innerHTML;
    document.getElementById("Mob").value=row.cells[2].innerHTML;
    document.getElementById("Gmail").value=row.cells[3].innerHTML;
    // console.log(ss);
}

//.............................update...................................

function update()
{
    // event.preventDefault();
    row.cells[0].innerHTML=document.getElementById("Fname").value;
    row.cells[1].innerHTML=document.getElementById("Lname").value;
    row.cells[2].innerHTML=document.getElementById("Mob").value;
    row.cells[3].innerHTML=document.getElementById("Gmail").value;
    row=null;  

}


//............................Delete.....................

function remove(td)
{
    var ans= confirm("Are you Sure you want to delete this records!");
    if(ans== true)
    {
        row=td.parentElement.parentElement;
        document.querySelector('table').deleteRow(row.rowIndex);
    }
    // console.log(ss);
}

function show()
{
    document.getElementById('Fname').style.color="green";
}
function hide()
{
    document.getElementById('Fname').style.color="green";
}
















// function Validateform() {  
//     var Data = {}; 
//     var a=document.getElementById("Fname").value;
//     var b=document.getElementById("Lname").value;
//    var c =  document.getElementById("Mob").value;
//    var d =document.getElementById("Gmail").value;
//     if (a.length==0) {
//         document.getElementById("fnameError").innerHTML = "First name is Empty";
//         return false;
//     }
//     if (b.length==0) {
//         document.getElementById("lnameError").innerHTML = "Last name is Empty";
        
//         return false;
//     }
//      if (c.length > 10 ||c.length< 10) {
//         let nn = document.getElementById("mobError").innerHTML = "plese Enter your Currect Number";
//         return false;
//     }
//     if (d.length== 0) {
//         document.getElementById("gmailError").innerHTML = "Gmail is Empty";
//         return false;
//     }
//     else if (!(d.lastIndexOf("@gamil.com"))) {
//         document.getElementById("gmailError").innerHTML = "plese Enter your @gamil.com";
//         return false;

//     }

// Data.Fname = a
// Data.Lname = b
// Data.Mob = c
// Data.Gmail = d
// readFormData(Data);  
// return Data;
 
// }

// function readFormData(Data)
// {
//     var St = [];
//     for(var key in Data)
//   {
//        St.push(`${key} : ${Data[key]}`);
//   }
//   add(Data); 
//   console.log(Data);
//   console.log(St);
// }

// function add(Data)
// {
//        var table =document.getElementById("tables").getElementsByTagName('tbody')[0];
//         var newRow= table.insertRow(table.length);

//         var cell1=newRow.insertCell(0);
//         cell1.innerHTML= Data.Fname;

//         var cell2=newRow.insertCell(1);
//         cell2.innerHTML= Data.Lname;

//         var cell3=newRow.insertCell(2);
//         cell3.innerHTML= Data.Mob;

//         var cell4=newRow.insertCell(3);
//         cell4.innerHTML= Data.Gmail;
// }




    
// const first = document.getElementById('fname');
// const last =document.getElementById("lname");
// const num =document.getElementById("phone");
// const email = document.getElementById("E-mail")var arraydata=[];
// function checkRequired(inputArr) {
//  inputArr.forEach(function(input){
//       if(input.value.trim() === ''){
//          return 'requied'
//       }
//     });}function checkLength(input, min ,max) {
//   var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
//   if(input.value.length < min) {
//       return 'minimum length must be 3'
//   }else if(input.value.length > max) {
//     return 'maximum length must be 15'
//   }else if (!input.value.match(alpha)) {
//     return 'use character';
//    }
//    else {
//     return '';
//   }
// }
// function checknum(input){
//   if(input.value <= -1 || num.length > 10){
//     return 'check no.'
//   }else if(input.value == ''){
//     return 'enter number'
//   }
//   else{
//     return '';
//   }
// }
// function checkEmail(input){
//   const check =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   if(!input.value.match(check)){
//     return 'enter mail address'
//   }else{
//     return '';
//   }
// }function onAdd(e) {
//   var data={};
//     e.preventDefault();
//     data.fname = first.value;
//     data.lname = last.value;
//     data.Phoneno = num.value;
//     data.Email =email.value;
//    checkRequired([first, last, num, email])
//     const a=  document.getElementById("ferr").innerHTML=checkLength(first,3,15);
//     const b=  document.getElementById("lerr").innerHTML=checkLength(last,3,15);
//     const c=  document.getElementById("nerr").innerHTML=checknum(num)
//     const d=  document.getElementById("eerr").innerHTML=checkEmail(email);
//   if(a === '' && b=== '' && c === ''&& d === '') {
//         arraydata.push(data);
//         console.log(arraydata)
//         tbodyEl.innerHTML += `
//                 <tr>
//                     <td>${data.fname}</td>
//                     <td>${data.lname}</td>
//                     <td>${data.Phoneno}</td>
//                     <td>${data.Email}</td>
//                     <td><button class="deleteBtn">Delete</button></td>
//                     <td><button class="Editbtn">Edit</button></td>
//                 </tr>
//                 `;
//         }
// }