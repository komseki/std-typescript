"use strict";
function callPerson(person) {
    console.log(person);
    return {
        addr: person.addr,
        name: person.name,
        age: person.age || 0,
        sex: "man"
    };
}
let p1 = callPerson({
    addr: 'seoul',
    name: 'json',
    job: 'etc',
    email: 'test@email.com',
    age: 18
});
let p2 = callPerson({
    addr: 'hell',
    name: 'smith'
});
console.log(p1.name, p1);
console.log(p2.name, p2);
let strArr = ['A', 'B'];
console.log(strArr[0]);
let customDic = [1, 2, 3];
customDic.name = 'dic';
console.log(customDic, customDic[1], customDic.name);
//# sourceMappingURL=interface.js.map