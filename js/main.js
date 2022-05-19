     import { AddUserInput, passValue } from './userInput.js';

    var stdNo = 0;
    var tbody = document.getElementById("tbody1");
    var sortingKey = "";

    console.log(sortingKey);
    const tryBtn = document.getElementById('criteriaBtn');
    tryBtn.addEventListener("click", function(e) {
        console.log("Thank you for submission!");
        sortingKey = AddUserInput();
        console.log("The Sorting Key:", sortingKey );
        passValue(sortingKey);
    });
   
    window.onload = GetAllDataRealtime;
