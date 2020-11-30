
// boolean 
let bool: boolean = false;

// Number
let decimal: number = 1;
// 16진수
let hex: number = 0xffffff;
// 2진수
let binary: number = 0b01000111;
// 8진수
let octal: number = 0o107


// string
let replStr: string = ': string'
let str: string = `type${replStr}`;

// Array
let numbers: number[] = [1, 2, 3];
let numberList: Array<number> = [1, 2, 3];

// ReadOnlyArray
let floats: ReadonlyArray<number> = [1, 1, 2, 2, 3];
// -> case : 
let floatList = floats as number[] 

// Tuple
let tuple: [string, number] = ["foo", 3];

// Enum : 3, 4, 5
enum Name {FOO=3, BAR, FOOBAR};
let nm:Name = Name.FOO;
console.log(nm, Name[4])

// Any
let all: any = 4;
all = 'all-types';
all = true;

let allList: any[] = [1, "all", true];
allList[0] = "no error";


// void
function func(): void{
    console.log('call func');
    // not return;
}

// null, undefined
let notDefined: undefined = undefined;
let isNull: null = null;

// never
function error(msg: string): never {
    throw new Error(msg);
}

// return type of never
function fail(){
    return error("failed")
}

// infinite loop
function neverLoop(): never {
    while(true){
    }
}

// Object :
let obj: object  = {foo: 'bar'}


// casting

let val: any = "test"
let valLenth: number = (<string>val).length;
valLenth = (val as string).length;

