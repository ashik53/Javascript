let CleanRoom = function(){
    return new Promise(function(resolve, reject){
        resolve('Cleaned the room');
    })
}

let removeGarbage = function(message){
    return new Promise(function(resolve, reject) {
        resolve(message + 'remove garbage');
    })
}

let winIcecream = function(message) {
    return new Promise(function(resolve, reject){
        resolve(message + 'won icecream')
    })
}

CleanRoom().then((message)=> {
    return removeGarbage(message)
}).then((message)=> {
    return winIcecream(message)
}).then((result)=> {
    console.log("finished " + result );
})

Promise.all([CleanRoom(), winIcecream(), removeGarbage()]).then((message)=> {
    console.log(message)
})