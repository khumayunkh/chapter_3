// let x= " test ".trim() //удаляет пробелы в начале и конце
// console.log(x)

// x = ' test'.trimStart() //удаляет пробелы в начале
// x = 'test '.trimEnd() //удаляет пробелы в конце 

// y = "test".padStart(3) //добавляет пробелы слева до длины 3
// console.log(y)

// y = 'test'.padEnd(3) //добавляет пробелы справа до длины 3

// let x = [1, 2, 3, 4, 5]
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


// let person = {
//     mane : "Humoyun",
//     [Symbol.for('password')] :  'HUMOHUMO',
//     [Symbol.for('age')] :  19
// }

// console.log(person[Symbol.for('password')]) //HUMOHUMO
// console.log(Object.getOwnPropertySymbols(person))


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

let a = [1, 2, 3]
let b = []
function array(a,b){
    for(i = 0; i<a.length; i++){
        b[i] = a[i]
    }
    console.log(a === b) //false
    return console.log(b) // [1, 2, 3]
}

array(a,b)

console.log('7' * '4')  //28


