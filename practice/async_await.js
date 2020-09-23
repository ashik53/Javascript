console.log('Person1: shows ticket');
console.log("person2: shows ticket");

const preMovie = async() => {
    const promiseWifeBringingTicks = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve('ticket')
        }, 3000);
    })
    
    let ticket = await promiseWifeBringingTicks;

    return ticket;
}

preMovie().then((m) => console.log(m));

console.log("person4: shows ticket");
console.log("person5: shows ticket")