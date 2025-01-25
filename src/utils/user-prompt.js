import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Prompts the user with a given question and returns their input.
 *
 * @param {string} prompt - The question to prompt the user with.
 * @returns {Promise<string>} A promise that resolves with the user's input.
 *
 * @example
 * const userInput = await promptUser("What is your name? ");
 * console.log(`Hello, ${userInput}!`);
 */
export const promptUser = (prompt) => {
  return new Promise((resolve) => {
    const askQuestion = () => {
      rl.question(prompt, (answer) => {
        if (answer.trim() === "") {
          console.log("Input cannot be empty. Please try again.");
          askQuestion();
        } else {
          resolve(answer);
        }
      });
    };
    askQuestion();
  });
};
