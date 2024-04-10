// Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
let bird = {
    name: "Donald",
    numLegs: 2
}

let boat = {
    name: "Warrior",
    type: "race-boat"
}

// Only change code below this line
let glideMixin = (obj) => {
    obj.glide = () => {
        console.log("Gliding sound")
    }
}

glideMixin(bird)
glideMixin(boat)

bird.glide()
boat.glide();
