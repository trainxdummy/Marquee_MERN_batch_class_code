const animal = {
    name : "Bob",
    sound : "Barks",

    speak(){
        console.log(`${this.name} ${this.sound} loud!`)
    }
}

let cat = Object.create(animal)

cat.name = "tom"
cat.sound = "meow"

console.log("cat:", cat) // { }

cat.speak()
