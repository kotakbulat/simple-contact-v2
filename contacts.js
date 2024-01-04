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
    //cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if(duplikat){
        console.log("Contact sudah terdaftar, gunakan nama lain!");
        rl.close();
        return false;
    }
    //cek email
    if(!validator.isEmail(email)){
        const email = contacts.find((contact) => contact.email === email);
        if(email){
            console.log("Email sudah terdaftar, gunakan email lain!");
            rl.close();
            return false;
        }
    } 
    //cek nohp
    if(!validator.isMobilePhone(nohp, "id-ID")){
        const nohp = contacts.find((contact) => contact.nohp === nohp);
        if(nohp){
            console.log("No HP sudah terdaftar, gunakan nohp lain!");
            rl.close();
            return false;
        }
    }
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


module.exports = {simpanContact};