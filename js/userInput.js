    export function AddUserInput(){
        var array="";
        var user1 = document.getElementById("userInput1").value;
        var user2 = document.getElementById("userInput2").value;
        var user3 = document.getElementById("userInput3").value;
        var user4 = document.getElementById("userInput4").value;
        array = (user1 + " | " + user2 + " | " + user3 + " | " + user4);
        return(array);
    }

    export function passValue(key){
        var storeValue = "";
        storeValue = key;
        localStorage.setItem("storeSortingKey", storeValue);
        return false;
    }
