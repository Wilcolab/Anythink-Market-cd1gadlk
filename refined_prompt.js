/**
 * Convert a string to dot.case (lowercase words joined by dots).
 *
 * Handles:
 * - camelCase and PascalCase (inserts separators between letter-case transitions)
 * - snake_case, kebab-case, space separated, dot separated, and mixed punctuation
 * - acronyms like "XMLHttpRequest" -> "xml.http.request"
 *
 * Examples:
 *   toDotCase('fooBarBaz')     -> 'foo.bar.baz'
 *   toDotCase('Foo Bar-Baz')   -> 'foo.bar.baz'
 *   toDotCase('some_value.txt')-> 'some.value.txt'
 */
function toDotCase(input) {
    if (input == null) return '';
    const str = String(input);

    // 1) Separate camelCase / PascalCase boundaries, taking care of acronyms
    let s = str
        .replace(/([A-Z]+)([A-Z][a-z0-9])/g, '$1 $2') // XMLHttp -> XML Http
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2');     // fooBar -> foo Bar

    // 2) Normalize separators: replace dots, underscores, dashes, slashes, pluses, and other punctuation with space
    s = s.replace(/[._\-\s\/\\+]+/g, ' ');

    // 3) Remove any remaining non-alphanumeric characters (keep spaces as split points)
    s = s.replace(/[^A-Za-z0-9\s]+/g, ' ');

    // 4) Lowercase, split on whitespace, filter empties, and join with dots
    return s
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean)
        .join('.');
}

module.exports = toDotCase;

// Quick demo when run directly
if (require.main === module) {
    const examples = [
        'fooBarBaz',
        'Foo Bar-Baz',
        'some_value.txt',
        'XMLHttpRequest',
        'already.dot.case',
        '  spaced   out  ',
        'kebab-case_example+mix/it'
    ];
    for (const ex of examples) {
        console.log(ex, '->', toDotCase(ex));
    }
}
