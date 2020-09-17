
/*
function printName(agePrint) {
    console.log("Ashik");
    agePrint(); // this is callback function
}

function agePrint(){
    console.log("24")
}
printName(agePrint);

*/

const printName = (agePrint)=> {
    console.log("Ashik");
    agePrint();
}

function agePrint(){
    console.log("24");
}


printName(agePrint);