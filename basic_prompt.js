// basic_prompt.js
// Prompt for implementing a camelCase conversion function.

const prompt = `
Write a JavaScript function named toCamelCase(str) that converts an input string into lower camelCase.

Requirements:
- Treat spaces, hyphens (-), underscores (_), and any non-alphanumeric characters as word separators.
- Collapse multiple consecutive separators into a single separation point.
- Remove all punctuation and extraneous separators.
- Lowercase the entire first word; capitalize the first letter of each subsequent word.
- Preserve digits and letters inside words (e.g., "version 2 api" -> "version2Api").
- Trim leading and trailing separators.
- If the input is empty or contains no alphanumeric characters, return an empty string.
- Function should handle mixed-case inputs and acronyms sensibly (e.g., "XML_http_request" -> "xmlHttpRequest").

Examples:
- Input: "hello world"
    Output: "helloWorld"

- Input: "  --foo_BAR baz "
    Output: "fooBarBaz"

- Input: "XML_http_request"
    Output: "xmlHttpRequest"

Return only the implementation of toCamelCase and, optionally, a few small unit tests demonstrating the examples.
`;

module.exports = prompt;