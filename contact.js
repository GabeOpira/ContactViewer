"use strict";

const contacts = [
    "1|Scott|scott@murach.com|1-559-555-5555",
    "2|Joel|joel@murach.com|1-409-555-5555",
    "3|Mike|mike@murach.com|1-363-555-5555"
];

const menuString = "COMMAND MENU\n" +
    "list - List all contacts\n" +
    "get # - Get contact with the specified number\n" +
    "exit - Exit program";

 // keep showing the menu until the user enters "exit" or clicks Cancel
while (true) {
    const command = prompt(menuString);

    // Cancel returns null, so stop the loop for Cancel or "exit"
    if (command === null || command.trim().toLowerCase() === "exit") {
        break;
    }

    // split the command into words, e.g. "get 1" becomes ["get", "1"]
    const words = command.trim().toLowerCase().split(" ");

    if (words[0] === "list" && words.length === 1) {
        // build one line per contact: "1 - Scott"
        let listString = "";
        for (let contact of contacts) {
            const fields = contact.split("|");
            listString += fields[0] + " - " + fields[1] + "\n";
        }
        alert(listString);

    } else if (words[0] === "get" && words.length === 2) {
        // look for the contact whose number matches
        const number = words[1];
        let found = null;
        for (let contact of contacts) {
            const fields = contact.split("|");
            if (fields[0] === number) {
                found = fields;
                break;
            }
        }

        if (found) {
            alert("Contact info for " + found[1] + "\n" +
                  "Email: " + found[2] + "\n" +
                  "Phone: " + found[3]);
        } else {
            alert("No data for #" + number);
        }

    } else {
        alert("Invalid command");
    }
}   