// -- MODULES---

// const {writeHello} = require('./temp');
//
// writeHello();
// --PATH--
//
// const path = require('path');
//
// const joinPath = path.join(__dirname,)

const fs = require('fs') ;
const path = require('path');

// -- Create new folder text --
// const createFolder = fs.mkdir('text', (err)=>{
//     if (err) throw new Error();
// })

// -- Create in text new folders without for
// const createInstall = fs.mkdir( path.join('text','install'),(err)=> {
//     if (err) throw new Error();
// })
//
// const createTest = fs.mkdir( path.join('text','test'),(err)=> {
//     if (err) throw new Error();
//
// });
//
// const createUsers = fs.mkdir( path.join('text','users'),(err)=> {
//     if (err) throw new Error();
//
// })
//
// const createPhone = fs.mkdir( path.join('text','phone'),(err)=> {
//     if (err) throw new Error();
//
// })
// const createNote = fs.mkdir( path.join('text','note'),(err)=> {
//     if (err) throw new Error();
// })

// -- Create in text new files without for...
// fs.writeFile(path.join('text', 'index.js'), 'index',(err)=> {
//     if (err) throw new Error();
// })
// fs.writeFile(path.join('text', 'dextor.js'), 'dextor',(err)=> {
//     if (err) throw new Error();
// })
// fs.writeFile(path.join('text', 'protos.js'), 'protos',(err)=> {
//     if (err) throw new Error();
// })
// fs.writeFile(path.join('text', 'botoks.js'), 'botoks',(err)=> {
//     if (err) throw new Error();
// })

// -- Create in crete_new_folder with for...of
// const  folderNames = ['one','two', 'three', 'four'];
//
// for (const folderName of folderNames ) {
//     fs.mkdir( path.join('create_new_folder_for', folderName), (err)=> {
//      if (err) throw new Error();
// })
// }

//-- Create in crete_new_files with for...of
// const  fileNames = ['five.txt', 'six.txt', 'seven.txt', 'eight.txt'];
//
// for (const fileName of fileNames ) {
//     fs.writeFile( path.join('create_new_folder_for', fileName),'hello node', (err)=> {
//         if (err) throw new Error();})
// }

// -- Call module ..
// const {writeHello} = require('./test');
// writeHello();
//
// console.log(__dirname);
// console.log(__filename);
// console.log(process.cwd());


// const joinPath = path.join(__dirname, 'text', 'protos.js');
// console.log(joinPath);

// const os = require('os');
// console.log(os.arch());
// console.log(os.cpus());

// ---checked file or folder---
// fs.readdir(path.join(__dirname, 'create_new_folder_for'),(err,data)=>{
//     if (err) throw new Error(err.message)
//     for (const file of data) {
//        fs.stat(path.join(__dirname,'create_new_folder_for' ,file),(err,stats)=>{
//            if (err) throw new Error(err.message)
//            if (stats.isFile()) {
//                console.log('is file ', path.join(__dirname,'text' ,file))
//            }
//            else {
//                console.log('is folder ', path.join(__dirname,'text' ,file))
//            }
//        });
//
//        }
//
// })


