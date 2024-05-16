// Section 2: TypeScript Basics & Core Concepts

let userName = 'Max'; 
userName = 'Kerim';
// const API_KEY = 'abc';

let userAge = 27;

let isValid = true;

// string, number, booloean - basic types

let userId: string | number = 'abc1';
userId = 123;
// userId = true;

// let user: object;
let user: {
    name: string;
    age: number;
    isAdmin: Boolean;
    id: string | number;
};
// user = 'Kerim';

user = {
    name: 'Kerim',
    age: 27,
    isAdmin: true,
    id: 'abc' // 123
};

// user = {};

// let hobbies: Array<string>;
let hobbies: string[];

hobbies = ['Sports', 'Cooking', 'Reading'];

function add(a: number, b:number) {
    const result = a + b;
    return result;
};

type AddFn = (a: number, b: number) => number;

function calculate(
    a: number, 
    b: number, 
    calcFn: AddFn
) {
    calcFn(a, b);
};

calculate(2, 5, add);

type StringOrNum = string | number;

type User = {
    name: string;
    age: number;
    isAdmin: Boolean;
    id: string | number;
};

let newUser: User;

interface Credentials {
    password: string;
    email: string;
};

// interface Credentials {
//     mode: string;
// };

let credentials: Credentials;

credentials = {
    password: 'abc',
    email: 'test@example.com'
};

class AuthCredentials implements Credentials {
    email: string;
    password: string;
    userName: string;
};

function login(credentials: Credentials) {

};
login(new AuthCredentials);

// type Admin = {
//     permissions: string[]
// };

// type AppUser = {
//     userName: string;
// };

// type AppAdmin = Admin | AppUser; // do not use
// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//     permissions: ['login'],
//     userName: 'Kerim',
// };

interface Admin {
    permissions: string[];
}
interface AppUser {
    userName: string;
}
interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
    permissions: ['login'],
    userName: 'Kerim',
};

type Role = 'admin' | 'user' | 'editor';
let role: Role; // 'admin', 'user', 'editor'

role = 'admin';
role = 'user';
role = 'editor';
// role = 'abc';

function performAction(action: string | number, role: Role) {
    if (role === 'admin' && typeof action === 'string') {
        // ...
    };
};

let roles: Array<Role>;
roles = ['admin', 'editor'];

type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    },
};

const userStorage: DataStorage<User> = {
    storage: [],
    add(user) {},
};

function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b
    };
};

// const mergeUser = merge<{ name: string }, { age: number }>(
const mergeUser = merge({ name: 'Kerim' }, { age: 34 });
