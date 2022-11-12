let obj = new Object();
obj.name = 'BBH';
obj.age = '30';
console.log(obj);

let obj = {
    name: 'BBh',
    age:'30'
}
console.log(obj);

function Person(name, age) {
    this.name = name
    this.age  = age
    this.sayname = () => {
      console.log(this.name)
    }
  }
  const p1 = new Person('BBH', 30)
  const p2 = new Person('star', 19)
  
  function add(array1,array2){
    return [array1+','+array2]
  }
  let arr1 = [4,5,8.5,10];
  let arr2 = [6,7,6];
  array1 = add(arr1,arr2);
  console.log(array1);


function flatten(arr) {
    let result = [];
    for (let i = 0; i <arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result = result.conact(flatten(arr[i]));
        } 
        else {
            result.push(arr[i]);
        }
    }
    return result;
}
let arr = [1,[2,3],[4,5,[6,7,8]],9];
console.log(flatten(arr));

