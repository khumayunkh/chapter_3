// let x= " test ".trim() //удаляет пробелы в начале и конце
// console.log(x)

// x = ' test'.trimStart() //удаляет пробелы в начале
// x = 'test '.trimEnd() //удаляет пробелы в конце 

// y = "test".padStart(3) //добавляет пробелы слева до длины 3
// console.log(y)

// y = 'test'.padEnd(3) //добавляет пробелы справа до длины 3

let x = [1, 2, 3, 4, 5]

x.push(6)
x.unshift(7)
console.log(x)
let f = 1
for(r of x){
    f *=r
}
console.log(f)
// let y = [6, 7, 8, 9]

// console.log(x.concat(y)) // add "y" to "x"

// console.log('l'.repeat(2)) //  repeat 'l' two times

// let name = "Humoyun"
// let x = `hello, my name is ${name}`
// console.log(x)

// if((x === 0 && y === 0) || !(z === 0)){
//     // х и у равны нулю или z не равно нулю
// }

// null == undefined // true
// null === undefined // false

// Symbols

// let x = Symbol("Humoyun")
// let y = Symbol("Humoyun")
// console.log(x === y) //false

// let a = Symbol.for("Humoyun")
// let b = Symbol.for("Humoyun")
// console.log(a) //Symbol("Humoyun")
// let c = Symbol.keyFor(b)
// console.log(c) //Humoyun

// console.log(a === b)  //true


let person = {
    name : "Humoyun",
    age : 18,
    [Symbol.for('password')] :  'HUMOHUMO',
    [Symbol.for('age')]: 19
}

console.log(person.name.toUpperCase())
person[Symbol.for('age')]= person[Symbol.for('age')] % 4
console.log(person[Symbol.for("age")]) //3 
console.log(person[Symbol.for("password")])

if(person[Symbol.for('age')]){
    person[Symbol.for('age')] = person[Symbol.for('age')] + 2
    console.log(person[Symbol.for('age')] + ' jjjjjjjj') // 5
}

console.log(person[Symbol.for('password')])

function symbol(person){
    if(person[Symbol.for("afe")] ?? person[Symbol.for('age')] === 3){
        person.name = 'HUMOYUN'
        console.log(person.name) 
    }else{
        console.log('some error')
    }
}

symbol(person)


for(x in person){
    console.log(x)  //name, age
}


// console.log(person[Symbol.for('password')]) //HUMOHUMO
// console.log(Object.getOwnPropertySymbols(person))

// let a = Symbol.for('Humoyun')
// let b = Symbol.keyFor(a)
// console.log(b)
// let s = "hello"
// console.log(s.toUpperCase()) // HELLO
// console.log(s) //hello 

// let o = {x:1} 
// let d = { x : 1} 
// console.log(o === d) //false

// a = [1]
// // b = [1]
// // console.log(a === b) //false

// let b = a
// b[1] = 2
// console.log(a[1]) //2
// console.log(a === b) //true

// let a = [1, 2, 3]
// let b = []
// function array(a,b){
//     for(i = 0; i<a.length; i++){
//         b[i] = a[i]
//     }
//     console.log(a === b) //false
//     return console.log(b) // [1, 2, 3]
// }

// array(a,b)

// console.log('7' * '4')  //28

// let a = 13
// console.log(a.toString())

// const x // error
// let x //undefined but not error

// let x = 3, y = x * x
// console.log(y) // y = 9; x = 3
// x = 5
// console.log(x) // x = 5

// const x = 1
// if(x === 1){  
//     let x = 2 /// const x !== let x
//     console.log(x) // 2
// }
// console.log(x) // 1


// let i = 32
// i = 'hello' // it is not error
// console.log(i)


// var r = 5
// function clobal(){
//     r = 7
//     console.log(r) // 7
// }
// console.log(r) // 5
// clobal(r)

// let [x, y] = [4, 5] // equel let x = 4; let y = 5
// console.log(x) // x = 4
// [x,y] = [3] // x = 3; y = undefined
// // let [, x, , y] = [1,2,3,4] // x = 2; y = 4
// let [x, ...y] = [1,2,3,4] // x = 1; y = [2, 3, 4]

// let [a, [b, c]] = [1, [2, 4], 6] // a = 1; b = 2; c = 4 

// // const sin = Math.sin
// // const cos = Math.cos 
// // const tan = Math.tan
// //======================
// // const {sin, cos, tan} =Math

let pointer = [{x : 1, y : 2 }, {x : 3 , y : 4}]
let [{x : x1, y : y1}, {x : x2, y : y2}] = pointer
console.log((x1 == 1 && y1 == 2 && x2 == 3 && y2 == 4)) //true
console.log(pointer[1].x) //3

// let points = {
//     p1: [1,2], 
//     y : [3,4]
// }
// // let {x : [x1 , x2], y : [y1, y2]} = points
// // console.log((x1 == 1 && x2 == 2 && y1 == 3 && y2 == 4)) //true

let p = 4
switch(p){
    case 4:{
        console.log('right')
        break
    }
    case 3:{
        console.log('error')
        break
    }
    default:{
        break
    }
}
let sm = 0 
if(p<6){
    for(let i=0; i<=p; i++){
        if(i === 4){
            continue
        } 
        sm += i
    }
}






console.log(`${sm} = sm`)

// let x1 = points.p1[0]
// console.log(x1) // 1

