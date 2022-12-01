// const text = document.getElementById("text");
// const button = document.getElementById("button");

//creating a customPromise function to replace the promise func
const CustomPromiseState = {
    PENDING: "PENDING",
    RESOLVED: "RESOLVED",
    REJECTED: "REJECTED"
};

//creating the class customPromise
class customPromise {
    constructor(fn) {
        this.CustomPromiseState = CustomPromiseState.PENDING;
        this.resolver = this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);
        this.thenFn = null;
        this.catchFn = null;
        fn(this.resolver, this.rejector);
    }
    resolver(resolvedData) {
        if (this.CustomPromiseState === CustomPromiseState.PENDING) {
            this.thenFn && this.thenFn(resolvedData);
        }
        this.CustomPromiseState = CustomPromiseState.RESOLVED;
    }
    rejector(rejectedData){
        if(this.CustomPromiseState === CustomPromiseState.PENDING) {
            this.catchFn && this.catchFn(rejectedData);
        }
        this.CustomPromiseState = CustomPromiseState.REJECTED;
    }
    then(thenFn) {
        this.thenFn = thenFn;
        return this;
    }
    catch(catchFn) {
        this.catchFn = catchFn;
        return this;
    }
}

//func to generate and check divisibility of the random number
const getNumber = () =>
  new customPromise ((res, rej) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
        if (randomNumber % 5 === 0) {
            rej (`Rejected with num: ${randomNumber}`);
        }
        res(`Resolved with num: ${randomNumber}`);
    }, randomNumber * 10);
  })

  //creating a UI button to generate random numbers
//   const clickHandler = () => {
//     display("Loading...");
//     const numberPromise = getNumber();
//     numberPromise.then(display).catch(display);
//   };

//   const display = (context) => {
//     text.innerText = content;
//   };

//   button.addEventListener("click", clickHandler);
getNumber()
console.log(getNumber())