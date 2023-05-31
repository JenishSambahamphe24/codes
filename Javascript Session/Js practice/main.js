// function myAsyncFunction() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       if (randomNumber > 0.5) {
//         resolve(randomNumber);
//       } else {
//         reject("Error: Random number is less than 0.5");
//       }
//     }, 1000);
//   });
// }

// async function handleAsyncFunction() {
//   try {
//     const result = await myAsyncFunction();
//     console.log("Resolved value:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// handleAsyncFunction();

const inputValue = document.querySelector(".input");
const submitButton = document.querySelector(".submitButton");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(inputValue.value)

  function myAsyncFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userNumber = inputValue.value;
        if (userNumber > 5) {
          resolve(alert("The number is" + userNumber));
        } else {
          reject("Error: Input number is less than 5");
        }
      }, 1000);
    });
  }
  console.log("This is break");
  async function handleAsyncFunction() {
    try {
      const result = await myAsyncFunction();
      console.log("the value is:" + inputValue.value);
    } catch (error) {
      console.error(error);
    }
  }
  handleAsyncFunction();
});
