/*  cmt::two persons will show ticket */
  
console.log('person1: shows ticket');
console.log("person2: shows ticket");

/* cmt::then for my turn */
const promiseWifeBringingTicks =  new Promise((resolve, reject)=> {
  setTimeout(() => {
   resolve('ticket');
  }, 3000);
}) 
/* cmt:: inside this we will raise another promise */
const getPopcorn = promiseWifeBringingTicks.then((t)=> {
  /* cmt:: *wife brings ticket, then what happens*/
  console.log('wife: I bring the tics')
  console.log('husband: we should go in');
  console.log('wife: no I am hungry'); 
  /* cmt:: so it return a new promise of bringing something like '' */
  return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
  console.log('I got some popcorn')
  console.log('husband: we should go in...');
  console.log('wife:: I need butter on my popcorn');
  return new Promise((resolve, reject) => resolve(`${t} butter`));
});

getButter.then((t) => console.log(t)); 

/* cmt:: before my turn another two person will show ticket */
console.log('person4: shows ticket');
console.log('person5: shows ticket'); 


