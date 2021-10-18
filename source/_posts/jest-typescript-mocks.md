---
title: "Mocking Classes with Jest and Typescript"
date: 2021-10-01 00:00:00
tags:
  - Jest
  - TDD
  - Typescript
comments: false
---

An [example](https://github.com/bmitchinson/ts-node-starter/blob/main/src/GetANumber.test.ts) to
demonstrate class mocks and modifying methods of an already mocked class
within a single test. I used these patterns to mock classes in an Express
app in test driven development.

<!-- excerpt -->

_Cross posted on [dev.to](https://dev.to/bmitchinson/mocking-classes-in-jest-typescript-2pc)._

### TLDR

[Example Test](https://github.com/bmitchinson/ts-node-starter/blob/main/src/GetANumber.test.ts)

GetANumber.test.ts mocks a class, and further customizes a class method on that
mocked class for a single test.

### Purpose

It was surprisingly hard to find a recently written article about the
fastest way to setup Jest with some simple class mocks in Typescript. The
following example demonstrates mocking a class and modifying
methods of that mocked class within a single test.

Libraries like jest-ts-auto-mock are not used, cause I was unable to find a way
to get them to work. Could have just been using them wrong but who knows.

I used the following methods to mock classes in an Express app while coding in
test driven development.

### Explanation

Comments are all over in this [Example Repo](https://github.com/bmitchinson/ts-node-starter),
but some highlights are:

- `jest.mock` ends up at the top of the file when it's transpiled.
  Even if you put it under other things, it gets pulled to the top.

```typescript
///////////////////
jest.mock("./Class", mockOne);

it("does a thing", () => {
  expect(class).toBe(one)
})

it("does another thing", () => {
  jest.mock("./Class", mockTwo);
  expect(class).toBe(two)
})
///////////////////

// is really

///////////////////
jest.mock("./Class", mockOne); // this mock is useless
jest.mock("./Class", mockTwo); // as it's immediately replaced

it("does a thing", () => {
  expect(class).toBe(one)
})

it("does another thing", () => {
  expect(class).toBe(two)
})
///////////////////

// You might as well always write `.mock` calls at the top of your file.
```

- The examples mock a class that's a default export. Named exports can also
  be mocked with some modifications.
- `jest.mock('{path_to_custom_class}')` will replace that paths default export
  in the runtime with the defined mock in `__mocks__` dir defined at the same
  level.
- If you'd like to modify a mock / assert things that happened to a mock, you need to import them from the "real" class.
  - Never manually import from `__mocks__`, get the exports of `__mocks__` "through" a normal import.

```typescript
import * as MockNumberGen from "./__mocks__/NumberGen";
import * as NumberGen from "./NumberGen"; // __mocks__/CVEPathData

// Give me the mock class i've defined in __mocks__/{classname} and let me
//    name it mock{ClassName}Constructor
// Give me the mock function i've defined in __mocks__/{classname}
const { default: mockNumberGenConstructor, mockGetOne } =
  // Get these things from the NumberGen class, because I know that jest
  //     has secretly replaced it with the contents of MockNumberGen
  NumberGen as unknown as typeof MockNumberGen;
// Tell typescript that these things are really coming from MockNumberGen,
//     so it should type them as such
```

The full test is [available here](https://github.com/bmitchinson/ts-node-starter/blob/main/src/GetANumber.test.ts)
