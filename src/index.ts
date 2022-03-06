///////////////TASK 1/////////////////////

const concat = (first: string, second: string): string => {
    return first + second;
}

const str: string = concat('Hello ', 'World!');
console.log(str);

///////////////TASK 2/////////////////////

interface HomeTaskInterface {
    howIDoIt: string;
    simeArray: Array<string | number>;
    withData?: Array<HomeTaskInterface>;
}

const myHomeTask: HomeTaskInterface = {
    howIDoIt: 'I do it well',
    simeArray: ['string one', 'string two', 42],
    withData: [{howIDoIt: 'I do it well too!', simeArray: ['string one', 23]}]
}

console.log(myHomeTask);

///////////////TASK 3/////////////////////

interface MyArray<T> {
    [n: number]: T;

    reduce<T>(fun: (previousValue: T, currentValue: T) => T, initialValue: T): T;
}

const arr: MyArray<number | string> = [1, 2, 3, 4];
const result: string = arr.reduce((previousValue: string, currentValue: string) => {
    return previousValue + currentValue;
}, '0');
const result2: number = arr.reduce((previousValue: number, currentValue: number) => {
    return previousValue + currentValue;
}, 0);

console.log(result, result2);