const hello = require('./libHello')

hello.sayHello(); //เรียกตัวที่ไม่มีรีเทริน
console.log(hello.person.name); //เรียกใช้ตัวที่มีรีเทริน
console.log(hello.cube(3));
console.log(hello.add(5,4))
console.log(hello.status)

console.log(hello.add(78,46))
console.log(hello.cube(43));