let counter = 0
let names = ['eddy', 'ed','eddie']
while (counter < names.length) {

    console.log(counter)
    console.log(names[counter])
    counter++ // counter = counter +1
}


let endGame = false
let input = window.prompt("number:")
while (endGame != true) {
    if (input == 5){
        endGame = true
        //break what ever after break will not be eexercuted.
        // words color changed when move below them
    }
    else {
        input = window.prompt("Try again:")
    }
}


for (let i =0; i < 5; i++){
    //debugger let you see more things able to go thru line by line
    debugger
    console.log(i)
}


let names = ['eddy', 'ed','eddie']
for (let i = 0; i < names.length; i++){
    console.log(names[i])
}
const person = {
    name: "eddy",
    age: 25,
    email: "edmund@yahoo.com"
}
// for.......in loop only for object 
for (let key in person){
    console.log(person[key])
}

const arr = Object.keys(person)
for ( let i =0;i < arr.length;i++){
    let key = arr[i]
    console.log(person[key])
}


let names = ['eddy', 'ed','eddie']
names.forEach(function(item){
    greet(item)

})
names.forEach((name,i) =>{
    console.log(i)
    greet(name)
})

function greet(name){
    console.log(`hello, ${name}`)
}