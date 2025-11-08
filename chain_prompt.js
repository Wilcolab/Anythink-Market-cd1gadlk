/**
 * Converts a given string to kebab-case format.
 *
 * Handles spaces, underscores, and mixed case (camelCase, PascalCase).
 *
 * @param {string} input - The string to convert to kebab-case.
 * @returns {string} The kebab-case formatted string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toKebabCase('Hello World'); // 'hello-world'
 * @example
 * toKebabCase('hello_world'); // 'hello-world'
 * @example
 * toKebabCase('helloWorld'); // 'hello-world'
 * @example
 * toKebabCase('HelloWorldTest'); // 'hello-world-test'
 * @example
 * toKebabCase('already-kebab-case'); // 'already-kebab-case'
 */
function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return input
        // Replace underscores and spaces with hyphens
        .replace(/[_\s]+/g, '-')
        // Insert hyphens before uppercase letters (except at the start)
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        // Convert to lowercase
        .toLowerCase()
        // Remove leading/trailing hyphens and collapse multiple hyphens
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

module.exports = { toKebabCase };