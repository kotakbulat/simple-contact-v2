//console.log("Hello world");
//import chalk from chalk;
const validator = require("validator");
const chalk = require("chalk");
const {simpanContact, tulisPertanyaan} = require("./contacts");



//test = validator.isEmail("hoki@aksjbd.sk");
//test = validator.isMobilePhone("+1289699868863", "id-ID");
//console.log(test);

// nama = 'Hoki';
// pesan = chalk`lorem ipsum dolor sit amet {bgRed.bold.italic consectetur} adipisicing elit, nama saya : ${nama}`;
// console.log(pesan);
const main  = async () => {
    const nama = await tulisPertanyaan("Masukan nama anda : ");
    const email = await tulisPertanyaan("Masukan email anda : ");
    const nohp = await tulisPertanyaan("Masukan nohp anda : ");
    simpanContact(nama, email, nohp);
}

main();

