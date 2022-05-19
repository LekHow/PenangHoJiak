

var stdNo = 0;
var tbody = document.getElementById("tbody1");
var sortingKey1 = "";
sortingKey1 = localStorage.getItem("storeSortingKey");

function AddItemsToTable(name,shortform,types,contact,email,rest,star,starNum,pageLikes,key){
    let trow = document.createElement("tr");
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    let td8 = document.createElement('td');
    let td9 = document.createElement('td');
    let td10 = document.createElement('td');

    td1.innerHTML = ++stdNo;
    td2.innerHTML = name;
    td3.innerHTML = shortform;
    td4.innerHTML = types;
    td5.innerHTML = contact;
    td6.innerHTML = email;
    td7.innerHTML = rest;
    td8.innerHTML = star;
    td9.innerHTML = starNum;
    td10.innerHTML = pageLikes;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);
    trow.appendChild(td10);

    tbody.appendChild(trow);
}

   function AddAllItemsToTable(TheOutlets){
    TheOutlets.reverse();
    stdNo = 0;
    tbody.innerHTML="";
    TheOutlets.forEach(element=> {
        AddItemsToTable(element.fnbName, element.shortForm, element.typesOfOutlets, 
        element.contactNo, element.email, element.restDay, element.starRating, 
        element.reviewNo, element.pageLikesNo,element.sortingKey);
    });
    };

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCOECx5coMalJTgzIaneeYHUTP-sG1fYKM",
    authDomain: "penang-ho-jiak.firebaseapp.com",
    databaseURL: "https://penang-ho-jiak-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "penang-ho-jiak",
    storageBucket: "penang-ho-jiak.appspot.com",
    messagingSenderId: "889289792377",
    appId: "1:889289792377:web:86917870eb034918f3eda8",
    measurementId: "G-L82CCPR57N"
};

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
   

    import { getDatabase, ref, child, onValue, get,
        query, limitToFirst, limitToLast, orderByChild,
        startAt, startAfter, endAt, endBefore, equalTo
    } 
    from "http://www.gstatic.com/firebasejs/9.8.1/firebase-database.js"; 

    const db = getDatabase();  
    
function GetAllDataOnce(){
    var defaultKey="Restaurant | Bayan Lepas | FALSE | FALSE";
    const que = query(ref(db,"fnbOutlets"), limitToLast(10), orderByChild("sortingKey"), equalTo(sortingKey));

    get(que)
    .then((snapshot) =>{

        var outlets =[];

        snapshot.forEach(childSnapshot => {
            outlets.push(childSnapshot.val());
        });
    
        AddAllItemsToTable(outlets);
    });
}

function GetAllDataRealtime(){
    var defaultKey="Restaurant | Bayan Lepas | FALSE | FALSE";
    const dbRef = query(ref(db,"fnbOutlets"), limitToLast(10), orderByChild("sortingKey"), equalTo(sortingKey1));

    onValue(dbRef,(snapshot)=>{
        var outlets =[];

        snapshot.forEach(childSnapshot => {
            outlets.push(childSnapshot.val());
        });
           
        AddAllItemsToTable(outlets);
    });
}


window.onload = GetAllDataRealtime;
