friends = ["Thomas Anderson", "Morpheus", "Smith", "Trinity", "Dozer"]

for (let voice = 0; voice < friends.length; voice++) {
    code(friends[voice]);
}

function code(name) {
    let lyrics = [" lines of code", " in the file", " strikes one out, clears it all out", " line of code", " strikes it out, clears it all out", " no more lines of code in the file"];
    for (let i = 99; i > 0; i --){
        if (i>=3) {
            console.log(i + lyrics[0] + lyrics[1] + "," + " " + i + lyrics[0] + "; " + name + lyrics[2])
            console.log(i -1 + lyrics[0] + lyrics[1])
        } else if (i == 2) {
            console.log(i + lyrics[0] + lyrics[1] + "," + " " + i + lyrics[0] + "; " + name + lyrics[2])
            console.log(i -1 + lyrics[3] + lyrics[1])
        } else if (i==1) {
            console.log(i + lyrics[3] + lyrics[1] + "," + " " + i + lyrics[3] + "; " + name + lyrics[4])
            console.log(lyrics[5]);
        }
    }
}