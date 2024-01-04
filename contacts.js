const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

simpanContact = (nama, email, nohp) => {
    const contact = {nama, email, nohp};
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log("Data berhasil ditambahkan");
    rl.close();
}
const dirPath = "./data";
const dataPath = "./data/contacts.json";
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, "[]", "utf-8");
}
const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        });
    });
}

module.exports = {simpanContact, tulisPertanyaan};