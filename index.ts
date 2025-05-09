// TASK - 1
function formatString(input: string, toUpper?: boolean): string {
    return toUpper === false ? input.toLowerCase() : input.toUpperCase();
};

const result = formatString("hello");
console.log(result)



// TASK - 2

type BookType = { title: string; rating: number };

function filterByRating(items: BookType[]): BookType[] {

    return items.filter(item => item.rating >= 4);

};

const books = [
    { title: "হাবলুদের জন্য প্রোগ্রামিং", rating: 4.5 },
    { title: "রিচার্জ ইয়োর ডাউন ব্যাটারি", rating: 4.6 },
    { title: "প্রোগ্রামিংয়ের বলদ টু বস", rating: 4.7 },
    { title: "প্যারাময় লাইফের প্যারাসিটামল", rating: 4.8 },
    { title: "চেষ্টার জিমনেসিয়াম ফিউচারের ক্যালসিয়াম", rating: 4.9 },
    { title: "প্রোগ্রামিংয়ের চৌদ্দগোষ্ঠী", rating: 5.0 },
    { title: "গ্রোয়িং থ্রু স্ট্রাগল", rating: 3.5 },
    { title: "মারহাবা, জাভাস্ক্রিপ্টে মারো থাবা", rating: 4.7 }
];

const filteredBooks = filterByRating(books);
console.log(filteredBooks);



// TASK - 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays)
};

const arrayResult = concatenateArrays(["a", "b"], ["c"], ["d"]);
console.log(arrayResult);