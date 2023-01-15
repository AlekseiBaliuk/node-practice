const fs = require("fs/promises");
const path = require("path");

// console.log(__dirname);
// console.log(__filename);

const postsPath = path.join(__dirname, "..", "db", "posts.json");
// console.log(postsPath);

async function readPosts(path) {
  const data = await fs.readFile(path, "utf-8");
  console.log(data);
  return data;
}

readPosts(postsPath);

//---------------------------//
// const newPath = path.join(__dirname, "..", "db", "alex.json");

// async function createFile(newPath) {
//     const newFile = await fs.writeFile(newPath, JSON.stringify({ name: "alex" }));
// }

// createFile(newPath);

///--------------------------------///
// const newPath = path.join(__dirname, "..", "db", "alex.json");

// async function removeFile(filePath) {
//     await fs.unlink(filePath);
// }

// removeFile(newPath);

///--------------------------------///

// async function updatePosts(postsPath, user) {
//     console.log(user)
//   const data = await readPosts(postsPath);
//   const posts = JSON.parse(data);
//   posts.push({
//     id: 3333,
//     name: "qwerty",
//   });

//   const updatedData = JSON.stringify(posts, null, 4);

//   await fs.writeFile(postsPath, updatedData);
// }
// updatePosts(postsPath);


//--------------------------------//

// function asyncHandler(fn, ...postsPath) {
//   try {
//     fn(...postsPath);
//   } catch (error) {
//     console.log(error);
//   }
// }

// asyncHandler(updatePosts, postsPath, 'Andrii');