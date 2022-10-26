function createIncrement() {
    let count = 0;
        function increment(){
            count++
    }
let message = `Count is ${count}`;
        function log() {
            console.log(message);
    }
return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

//here the increment function is called only once as count is called in the local scope and not globally.
// To use the increment dunction multiple times the scope should be called globally.