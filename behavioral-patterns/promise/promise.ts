/*
Promises are a pattern for asynchronous programming in Node.js. 
They represent the eventual result of an async operation. 
Here is a simple example:
*/

/*
Benefits:

- Avoid callback hell in async code
- Standardized way to handle async results
- Ability to chain and compose promises
*/

const getDataFromDatabase = async () => {
  return "data response";
};

const fetchData = new Promise((resolve, reject) => {
  // async operation
  const data = getDataFromDatabase();

  if (data) {
    resolve(data);
  } else {
    reject("Error fetching data");
  }
});

fetchData
  .then((data) => {
    console.log(data);
    // handle successful data
  })
  .catch((err) => {
    console.error(err);
    // handle error
  });
