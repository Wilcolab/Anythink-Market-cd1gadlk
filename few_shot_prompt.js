// few_shot_prompt.js
/**
 * Convert a string to camelCase.
 * Handles spaces, underscores, hyphens, punctuation, ALL_CAPS, PascalCase and existing camelCase.
 *
 * Examples:
 *  toCamelCase('first name')    -> 'firstName'
 *  toCamelCase('user_id')       -> 'userId'
 *  toCamelCase('SCREEN_NAME')   -> 'screenName'
 *  toCamelCase('mobile-number') -> 'mobileNumber'
 */
function toCamelCase(input) {
    if (typeof input !== 'string') return '';
    const s = input.trim();
    if (!s) return '';

    // If there are separators (spaces, hyphens, underscores or other non-alphanumerics),
    // split on them and build camelCase.
    if (/[^A-Za-z0-9]/.test(s)) {
        const parts = s.split(/[^A-Za-z0-9]+/).filter(Boolean);
        return parts
            .map((part, i) => {
                const low = part.toLowerCase();
                if (i === 0) return low;
                return low.charAt(0).toUpperCase() + low.slice(1);
            })
            .join('');
    }

    // No separators:
    // - If it already looks like camelCase or PascalCase (mixed case), just ensure the first char is lowercase.
    if (/[a-z]/.test(s) && /[A-Z]/.test(s)) {
        return s.charAt(0).toLowerCase() + s.slice(1);
    }

    // Single word, all lower or all upper -> return lowercase.
    return s.toLowerCase();
}

// Export for Node.js usage
module.exports = toCamelCase;

// Quick examples (uncomment to run)
// console.log(toCamelCase('first name'));    // firstName
// console.log(toCamelCase('user_id'));       // userId
// console.log(toCamelCase('SCREEN_NAME'));   // screenName
// console.log(toCamelCase('mobile-number')); // mobileNumber