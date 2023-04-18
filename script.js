

let submit_btn = document.querySelector(".submit_btn");

submit_btn.addEventListener("click",(e)=>{
    e.preventDefault();

    let fname = document.querySelector("#fname").value
    let lname = document.querySelector("#lname").value
    let email = document.querySelector("#email").value
    let age = document.querySelector("#age").value

    let table_body = document.querySelector(".table_body");
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    td1.innerHTML = fname
    td2.innerHTML = lname
    td3.innerHTML = email
    td4.innerHTML = age

    
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
       
    table_body.appendChild(tr);

})