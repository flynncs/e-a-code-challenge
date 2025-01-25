/**
 * Constructs an AI prompt for generating cold outreach emails.
 *
 * @param {Object} param0 - The parameters for the AI prompt.
 * @param {string} param0.ceoName - The name of the CEO to address the email to.
 * @param {string} param0.companyName - The name of the company to address the email to.
 * @param {string} param0.companyDescription - A description of the company.
 * @returns {string} The constructed AI prompt.
 *
 * @example
 * const aiPrompt = constructAiPrompt({
 *  ceoName: "Jane Doe",
 *  companyName: "Vet Visitors Ltd",
 *  companyDescription: ""A company that provides booking software for vets"",
 * });
 * console.log(aiPrompt);
 */
export const constructAiPrompt = ({
  ceoName,
  companyName,
  companyDescription,
}) => {
  return `
  You are an anonymous representative of Everday Capital.
  Your task is to write cold outreach emails to potential company targets.
  The emails should be formal, professional, concise, and to the point.
  Write an email addressed to the CEO, ${ceoName}, of ${companyName}.
  ${companyName} is described as: ${companyDescription}.
  If ${companyName} is in the software industry, inferred from the description, include the exact phrase:
  We have experience investing in the software space, with recent investments in Xero and Vend in New Zealand.
  Sign the email simply as 'Everyday Capital', and do not include a subject line. 
  DO NOT include any personal information or placholders such as [Your Name].
  `;
};
