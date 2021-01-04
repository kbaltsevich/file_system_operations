const fs = require("fs");
const file_dir = "./";
const user = (name, number, priority) => {
  return {
    endpoint: `local/${number}@prozvon-dialer`,
    extension: `ups`,
    context: `prozvon-informer`,
    priority: priority,
    timeout: -1,
    variables: {
      name_abonent: `${name}`,
      number: `${number}`,
    },
  };
};

const addJSON = (file_dir, name, number, priority) => {
  const add_user = user(name, number, priority);
  const fs = require("fs");
  return fs.appendFileSync(
    `${file_dir}test.txt`,
    `${JSON.stringify(add_user)}\r\n`,
    function (err) {
      if (err) console.log(err);
    }
  );
};

const readJSON = () => {
  const fs = require("fs");
  const info = fs.readFileSync(`${file_dir}test.txt`, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    return data;
  });
  fs.unlink(`${file_dir}test.txt`, (err) => {
    if (err) console.log(err);
    else console.log(`was deleted`);
  });
  return info.split("\r\n");
};

addJSON(file_dir, 'k', 3933, 1) 
addJSON(file_dir, 'k', 3933, 1) 
addJSON(file_dir, 'k', 3933, 1) 
addJSON(file_dir, 'k', 3933, 1) 

const arr = readJSON();

console.log(arr);
