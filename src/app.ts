// typescript generic type

const names: Array<string> = ['John', 'Jane', 'Mary'];


//promise type
const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
}
);

promise.then(data => {
    data.split('');
}).catch(error => {
    error.message;
}
);


//generic function
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}


const mergedObj = merge({ name: 'John', age: 30 }, { age: 35, city: 'New York' });


interface Lengthy {
    length: number;
}


//generic example
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';

    if (element.length === 1) {
        descriptionText = 'Got 1 characters.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' characters.';
    }

    return [element, descriptionText]
}


console.log(countAndDescribe('Hi, my name is Can'));


//keyof generic type *****
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}



//generic classess

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

//this variable only store string 
const textStorage = new DataStorage<string>();
textStorage.addItem('John');
textStorage.addItem('Jane');
textStorage.removeItem('John');
console.log(textStorage.getItems());

//this variable only store number
const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());

