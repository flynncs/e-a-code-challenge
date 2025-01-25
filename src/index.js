import { promptUser } from "./utils/user-prompt.js";
import { constructAiPrompt } from "./utils/ai-prompt.js";
import { sendPrompt } from "./utils/openai-client.js";
import ora from "ora";

const main = async () => {
  const ceoName = await promptUser("Enter CEO name: ");
  const companyName = await promptUser("Enter company name: ");
  const companyDescription = await promptUser("Enter company description: ");

  const aiPrompt = constructAiPrompt({
    ceoName,
    companyName,
    companyDescription,
  });

  ora("Sending prompt to OpenAI").start();
  const aiResponse = await sendPrompt(aiPrompt);
  ora().succeed("Received response from OpenAI");

  console.log(aiResponse);
};

main().then(() => process.exit(0));
