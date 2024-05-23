const arr: (string | number)[] = ['one', 'two', 3];
const arr2: Array<string | number> = ['one', 'two', 3];

const stringOrNull: string | null = null;

interface Person {
  id: number;
  name: string;
  isActivated: boolean;
  address?: Address;
}

interface Address {
  street: string;
  zip: string;
  city: string;
  country: Country;
}

interface Country {
  code: string;
  name: string;
}

const person: Person = {
  id: 1,
  name: 'John Doe',
  isActivated: true,
  address: {
    street: 'street 1',
    zip: '12345',
    city: 'hometown',
    country: {
      code: 'DE',
      name: 'Germany',
    },
  },
};

const person2: Person = {
  id: 1,
  name: 'John Doe',
  isActivated: true,
  address: undefined,
};

interface User extends Person {
  password: string;
  role: UserRole;
  onLogin: MyFn;
}

const user: User = {
  id: 1,
  name: 'John Doe',
  isActivated: true,
  password: '1234',
  role: 'admin',
  onLogin: () => true,
  address: {
    street: 'street 1',
    zip: '12345',
    city: 'hometown',
    country: {
      code: 'DE',
      name: 'Germany',
    },
  },
};

type UserRole = 'admin' | 'member' | 'guest';
type MyFn = (param1: number) => boolean;

const myFn: MyFn = (param) => {
  return param > 5;
};

/* ---- GENERICS ---- */

const reverse = <T extends unknown[]>(items: T): T => {
  let result = [];
  let i = items.length;
  while (i--) {
    result.push(items[i]);
  }
  return result as T;
};

const strings = ['one', 'two', 'three'];
const numbers = [1, 2, 3];

const stringsReversed = reverse(strings);
const numbersReversed = reverse(numbers);

const firstChars = stringsReversed.map((s) => s.charAt(0));
const doubled = numbersReversed.map((n) => n * 2);

type UserDTO = Partial<User>;
type UserSessionPayload = Pick<User, 'id' | 'role'>;
type UserCreateDTO = Omit<User, 'id'>;
type UserPatchDTO = Omit<Partial<User>, 'id'>; // also possible: Omit<UserDTO, 'id'>
