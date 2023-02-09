checkDuplicate();

function checkDuplicate() {
   let arr = ["abc","xy","bb", "abc"];
   let result = false;
   // create a Set with array elements
   const s = new Set(arr);
   // compare the size of array and Set
   if(arr.length !== s.size){
      result = true;
   }
   if(result) {
      console.log('Array contains duplicate elements');
   } else {
      console.log('Array does not contain duplicate elements');
   }
}