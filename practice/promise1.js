console.log("Give me a phone");


const brigLetterOnSSC = new Promise((resolve, reject)=> {
    console.log("Father to son:: Will you get A+ in SSC?");
    setTimeout(() => {
        resolve("son got A+");
    }, 3000)
})

const admitVarsity = brigLetterOnSSC.then((result)=> {
    console.log(result);
    console.log("take your phone")
    console.log("Give me bike");
    console.log("First admit to varsity");
    return new Promise((resolve, reject)=> {
        resolve('admitted to varsity');
    })
}) 

const getJob = admitVarsity.then((result)=> {
    console.log(result);
    console.log("take your bike")
    console.log("I want to marry");
    console.log('first get a job');
    return new Promise((resolve, reject)=> {
        resolve("Got a job");
    })
})

getJob.then((result)=> {
    console.log(result);
    console.log("Now you can marry")
})

console.log("Mita got a phone");
console.log("Shafin got a phone");