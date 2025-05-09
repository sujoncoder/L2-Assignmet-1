// TASK - 1
function formatString(input: string, toUpper?: boolean): string {
    return toUpper === false ? input.toLowerCase() : input.toUpperCase();
};

console.log("Task-1:", formatString("hello", true));





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

console.log("Task-2:", filterByRating(books));





// TASK - 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
};

console.log("Task-3:", concatenateArrays([1, 2, 3], [4], [5]));





// TASK - 4
class Vehicle {
    private _make: string;
    private _year: number;

    constructor(make: string, year: number) {
        this._make = make;
        this._year = year;
    };

    getInfo() {
        return `Make: ${this._make}, Year: ${this._year}`;
    };
};


class Car extends Vehicle {
    private _model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this._model = model;
    };

    getModel(): string {
        return `Model: ${this._model}`;
    };
};


const myCar = new Car("America", 2024, "Tesla CyberTruck");

console.log("Task-4:", myCar.getInfo());
console.log("Task-4:", myCar.getModel());





// TASK - 5

function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
};

const processedResult = processValue("iamsujon");

console.log("Task-5:", processedResult);





// TASK - 6

interface Product {
    name: string;
    price: number;
};

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    return products.reduce((maxP, currentP) => currentP.price > maxP.price ? currentP : maxP);
};

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

const richProduct = getMostExpensiveProduct(products);

console.log("Task-6:", richProduct);





// Task - 7
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

function getDayType(day: Day): string {

    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";

};

console.log("Task-7:", getDayType(Day.Monday));
console.log("Task-7:", getDayType(Day.Sunday));





// Task - 8
async function squareAsync(n: number): Promise<number> {

    return new Promise((resolve, reject) => {

        if (n < 0) {
            reject(new Error("Error: Negative number not allowed"));
        } else {
            setTimeout(() => {
                resolve(n * n)
            }, 1000);
        };

    });

};


async function run() {
    try {
        const res = await squareAsync(8);
        console.log("Task-8:", res)
    } catch (error: any) {
        console.log("Task-8:", error.message)
    }
};

run();