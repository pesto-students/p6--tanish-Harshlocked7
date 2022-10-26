
function memoize(fn) {
    const cache = new Map()
    return function (...args) {
      const key = args.toString()
      if (cache.has((key))) {
        return cache.get(key)
      }
      cache.set(key, fn(...args));
      return cache.get(key);
    };
  }
    
  let num1 = 100;
  let num2 = 200
  var sum = num1+num2;
  
  const addM = memoize(sum)
  console.log(sum)
//   Result(() => addM(38))
 addM(100,150)
  
  