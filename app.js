let friends = ["Thomas Anderson", "Morpheus", "Smith", "Trinity", "Dozer"]
let lyrics = [" lines of code", " in the file", " strikes one out, clears it all out ", " line of code", " strikes it out, clears it all out", " no more lines of code in the file"];






let button = document.body.querySelectorAll("button")
button[0].addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
        let container = document.createElement("div");
        let friend = document.createElement("h3")
        let friendName = document.createTextNode(friends[i])
        container.className = "friends"
        friend.appendChild(friendName)
        container.appendChild(friend)
        document.body.appendChild(container)
        for (let j = 99; j > 0; j--) {
            let p = document.createElement("p")
            container.appendChild(p)
            if (j >= 3) {
                pText = document.createTextNode(j + lyrics[0] + lyrics[1] + "," + " " + j + lyrics[0] + "; " + friends[i] + lyrics[2] + (j - 1) + lyrics[0] + lyrics[1])
            } else if (j == 2) {
                pText = document.createTextNode(j + lyrics[0] + lyrics[1] + "," + " " + j + lyrics[0] + "; " + friends[i] + lyrics[2] + (j - 1) + lyrics[3] + lyrics[1])
            } else if (j == 1) {
                pText = document.createTextNode(j + lyrics[3] + lyrics[1] + "," + " " + j + lyrics[3] + "; " + friends[i] + lyrics[4] + lyrics[5]);
            }
            p.appendChild(pText)
        }
    }
})
