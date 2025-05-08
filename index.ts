// TASK ONE
function formatString(input: string, toUpper?: boolean): string {
    return toUpper === false ? input.toLowerCase() : input.toUpperCase();
};

const result = formatString("hello");
console.log(result)