friends = ["Thomas Anderson", "Morpheus", "Smith", "Trinity", "Dozer"]



function code(name) {
    let lyrics = [" lines of code", " in the file", " strikes one out, clears it all out", " line of code", " strikes it out, clears it all out", " no more lines of code in the file"];
    for (let i = 99; i > 0; i--) {
        let p = document.createElement("p")
        container.appendChild(p)
        
        if (i >= 3) {
            console.log(i + lyrics[0] + lyrics[1] + "," + " " + i + lyrics[0] + "; " + name + lyrics[2])
            console.log(i - 1 + lyrics[0] + lyrics[1])
        } else if (i == 2) {
            console.log(i + lyrics[0] + lyrics[1] + "," + " " + i + lyrics[0] + "; " + name + lyrics[2])
            console.log(i - 1 + lyrics[3] + lyrics[1])
        } else if (i == 1) {
            console.log(i + lyrics[3] + lyrics[1] + "," + " " + i + lyrics[3] + "; " + name + lyrics[4])
            console.log(lyrics[5]);
        }
    }
}

let button = document.body.querySelectorAll("button")
button[0].addEventListener("click", function () {
    for (let voice = 0; voice < friends.length; voice++) {
        code(friends[voice]);
    }
    for (let i = 0; i < friends.length; i++){
        let container = document.createElement("div");
        let friend = document.createElement("h3")
        let friendName = document.createTextNode(friends[i])
        container.className = "friends"
        friend.appendChild(friendName)
        container.appendChild(friend)
        document.body.appendChild(container)
    }
})
