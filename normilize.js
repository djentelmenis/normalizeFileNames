const { join } = require('path');
const { readdirSync, renameSync } = require('fs');
const [dir] = process.argv.slice(2);
const files = readdirSync(dir);

files.forEach((file) => {
  const filePath = join(dir, file);
  const newFilePath = join(dir, file.toLowerCase().replace(/ +/g, ''));

  renameSync(filePath, newFilePath);
});
