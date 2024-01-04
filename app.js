const yargs = require("yargs");
const { simpanContact } = require("./contacts");

//console.log(process.argv);

yargs.command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string",
        },
        email: {
            describe: "Email",
            demandOption: false,
            type: "string",
        },
        nohp: {
            describe: "No HP",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        //console.log("Menambahkan contact baru", argv);
        //  const contact = {
        //     nama: argv.nama,
        //     email: argv.email,
        //     nohp: argv.nohp,
        simpanContact(argv.nama, argv.email, argv.nohp);
        },
        // console.log(contact);
    },      
).demandCommand();

yargs.parse();










// const chalk = require("chalk");
// const {simpanContact, tulisPertanyaan} = require("./contacts");

// nama = 'Hoki';
// pesan = chalk`lorem ipsum dolor sit amet {bgRed.bold.italic consectetur} adipisicing elit, nama saya : ${nama}`;
// console.log(pesan);
// const main  = async () => {
//     const nama = await tulisPertanyaan("Masukan nama anda : ");
//     const email = await tulisPertanyaan("Masukan email anda : ");
//     const nohp = await tulisPertanyaan("Masukan nohp anda : ");
//     simpanContact(nama, email, nohp);
// }

// main();

