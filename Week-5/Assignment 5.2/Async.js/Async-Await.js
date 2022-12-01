const Tasks = [
    { title: `Task 1`, body:`This is task number 1`},
    { title: `Task 2`, body: `This is task numer 2` }
]

function doTask1(){
setTimeout(() => {
    Tasks.forEach((Tasks, index) => {
        console.log(Tasks.title)
    })
}, 1000);
}

function doTask2(Task){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        Tasks.push(Task);

        const error = false;

        if(!error){
            resolve();
        }
        else{
            reject('Error: Something went wrong!')
        }
    }, 2000);
})
}

async function init(){
await doTask2({ title: `Task 3`, body:`This is task number 3`});

doTask1();
}
console.log(doTask1)

init();


