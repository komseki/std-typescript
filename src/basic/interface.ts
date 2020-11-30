// 기본
interface Person {
    // 읽기전용, 생성시만 값 할당.
    readonly addr: string;
    name: string;
    // 선택적
    age?: number;
    // 동적 속성 사용
    [otherProp: string]: any;
}

interface ResultPerson {
    addr: string;
    name: string;
    age: number;
    sex: string;
}

// 반환 값으로도 사용 가능 하다.
function callPerson(person: Person): ResultPerson{
    console.log(person);
    return {
        addr: person.addr,
        name: person.name,
        age: person.age || 0,
        sex: "man"
    }
}

let p1: ResultPerson = callPerson({
    addr: 'seoul',
    name: 'json',
    job: 'etc',
    email: 'test@email.com',
    age: 18
})

let p2: ResultPerson = callPerson({
    addr: 'hell',
    name: 'smith'
})

console.log(p1.name, p1);
console.log(p2.name, p2);


// 인덱스 설정. 문자 또는 숫자형으로 사용가능하다.
interface StringArray {
    [index: number]: string;
    length: number;
}

let strArr: StringArray = ['A', 'B'];
console.log(strArr[0]);

// 인덱스를 두가지 타입으로 사용가능하다.
interface CustomDic {
    [index: number]: string|number;
    length: number;
    name: string;
}

let customDic: CustomDic = [1,2,3, {name: 'aa'}];
customDic.name = 'dic';
console.log(customDic, customDic[1], customDic.name)
