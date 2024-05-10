// /*42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/


function show_magicians (magicians:string[]){
    magicians.forEach((name => console.log(name)))
}let name_magicaian=["huzzi","billa"
]
show_magicians(name_magicaian)

function modifies (magicians:string[]){
    return magicians.map((name) =>`this is ${name_magicaian}`)

}
let magicians: string[]= [
    "huzaifa","billi","fazi"
]
let Great_magishon= modifies(magicians);
show_magicians(Great_magishon)

