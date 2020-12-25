const fs = require("fs");
const fileDir = './'

//вывод файлов директории
//node -e 'require("./index").readDirectory()'
const readDirectory = () => {
  fs.readdir(`${fileDir}`, (err, files) => {
    files.forEach((file) => {
      console.log(file);
    });
  });
};

//чтение файла
//node -e 'require("./index").readFile("index.js")'
const readFile = (file) => {
    fs.readFile(`${fileDir}${file}`, "utf8", (err, data) => {
        if(err) throw err;
        console.log(data);
    })
}

//чтение файла
//node -e 'require("./index").delFile("text.txt")'
const delFile = (file) => {
    fs.unlink(`${fileDir}${file}`, (err) => {
        if (err) console.log(err);   
        else console.log(`${file} was deleted`);
      });
}

//создание файла .txt с динамической "шапкой"
//node -e 'require("./index").createFileTXT("text.txt", "Helloooooooo")'
const createFileTXT = (file_name, header) => {
  fs.writeFile(`${fileDir}${file_name}`, `${header}`, (err) => {
    if(err) throw err;
});
}


module.exports = {
    readDirectory,
    readFile,
    delFile,
    createFileTXT
}