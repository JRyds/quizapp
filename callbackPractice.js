// 1. Basic Promise Creation
// Exercise: Create a promise that resolves after 3 seconds with the message 
//"Promise resolved!" and log the message using .then().
// Goal: Practice creating a simple promise and handling its resolution.

// function threeSecResolve() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Promise resolved!");

//         }, 3000);
//     });

// }

// threeSecResolve().then((message) => {
//     console.log(message);

// });

// 2. Chaining .then() Methods
// Exercise: Create a promise that resolves with a number (e.g., 5). In the first .then(), 
//multiply the number by 2, then in the next .then(), 
//subtract 3, and finally, log the result.
// Goal: Understand how to chain .then() methods to handle sequential operations.

// function thenChain() {
//     return new Promise((resolve) => {
//         resolve(10)
//     })
// }

// thenChain()
//     .then((number) => { return number * 2 })
//     .then((number) => { return number - 3 })
//     .then((number) => {
//         console.log(`The result is: ${number}`);
//     })



// 3. Handling Errors with .catch()
// Exercise: Create a promise that randomly either resolves or rejects.
//Use .then() to handle the success case and .catch() to handle the error case,
//logging different messages for each.
// Goal: Learn how to manage both success and error scenarios with promises.

// function randomResRej() {
//     return new Promise((resolve, reject) => {
//         const trueFalse = Math.random()
//         if (trueFalse > 0.5) {
//             resolve(trueFalse);
//         } else {
//             reject(trueFalse);
//         }
//     })
// }

// randomResRej()
//     .then((number) => { console.log(`Number ${number}: is greater than 0.5`) })
//     .catch((number) => { console.log(`Number ${number}: is less than than 0.5`) })



// 4. Simulating Multiple Asynchronous Operations
// Exercise: Create two promises that each resolve after different amounts of time
//(e.g., 2 seconds and 4 seconds).
//Use Promise.all() to log a message once both promises have resolved.
// Goal: Get comfortable with handling multiple promises and synchronizing their completion.

// const twoSecResolve = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("2 second promise resolved!");

//     }, 2000);
// })

// const fourSecResolve = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("4 second promise resolved!");

//     }, 4000);
// })

// Promise.all([twoSecResolve, fourSecResolve]).then(values => {
//     console.log(values[0], values[1]);

// })




// 5. Using Promise.allSettled()
// Exercise: Create three promises: one that resolves, one that rejects, and another that resolves.
//Use Promise.allSettled() to log the status of each promise after they’ve all completed.
// Goal: Understand how to use Promise.allSettled() to handle multiple promises where some might reject.


// const firstProm = new Promise((resolve, reject) => {
//     const trueFalse = Math.random()
//     if (trueFalse > 0.5) {
//         resolve("First Promise resolves OK!");
//     } else {
//         reject("First Promise rejected!");
//     }
// })

// const secondProm = new Promise((resolve, reject) => {
//     const trueFalse = Math.random()
//     if (trueFalse > 0.5) {
//         resolve("Second Promise resolves OK!");
//     } else {
//         reject("Second Promise rejected!");
//     }
// })

// const thirdProm = new Promise((resolve, reject) => {
//     const trueFalse = Math.random()
//     if (trueFalse > 0.5) {
//         resolve("Third Promise resolves OK!");
//     } else {
//         reject("Third Promise rejected!");
//     }
// })

// Promise.allSettled([firstProm, secondProm, thirdProm]).then(values => {
//     values.forEach(obj => {
//         if (obj.status === "fulfilled") {
//             console.log(obj.value);

//         } else if (obj.status === "rejected") {
//             console.log(obj.reason);

//         }
//     });
// })



// 6. Promise with setTimeout
// Exercise: Write a function that returns a promise which resolves after a specified number of seconds
//(you can use setTimeout for this).
//Use this function to create a promise that resolves after 5 seconds, and log a message when it’s done.
// Goal: Practice wrapping asynchronous operations like setTimeout in a promise.

// function wrappedPromise() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("1st function resolved!");

//         }, 2000);
//     });
// }

// wrappedPromise()
//     .then((firstresolve) => {
//         console.log(firstresolve);

//     } )

// 7. Fetching Data with Fetch API
// Exercise: Use the Fetch API to retrieve data from a public API (e.g., JSONPlaceholder).
//Handle the response with .then() and log the data to the console. Handle errors with .catch().
// Goal: Combine promises with real-world asynchronous tasks like fetching data from an API.


function fetchJSON() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1') // Return the fetch promise
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Return the promise from response.json()
        });
}

// Usage:
const newJSON = fetchJSON().then(data => {
    return data; // Now you can handle the resolved JSON data here
});



// 8. Sequential Promises
// Exercise: Write a function that returns a promise resolving with a message.
//Then, create a sequence of three promises where each .then() waits for the previous promise
//to resolve and then logs the combined result of all previous messages.
// Goal: Practice chaining multiple promises where each depends on the result of the previous one.


// 9. Using Promise.race()
// Exercise: Create two promises: one that resolves after 3 seconds and another that resolves after 5 seconds.
//Use Promise.race() to log a message as soon as the first promise resolves.
// Goal: Learn how to use Promise.race() to handle the first promise that resolves or rejects out of a set.


// 10. Promise-Based Timer with Loop
// Exercise: Create a function that returns a promise resolving after 1 second. Use a loop to call this function 5 times in a row, each time waiting for the previous promise to resolve before continuing (i.e., wait 5 seconds in total, but log a message each second).
// Goal: Understand how to handle sequential asynchronous operations in a loop using promises.