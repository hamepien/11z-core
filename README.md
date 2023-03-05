# @11z/core

11z(core) - lighter, easier and maintainable.

## Feature ✨

-   Typescript dependency injection ✔

## Table of contents

-   [Example](#example)
-   [Installation](#installation)
-   [Apis](#apis)
    -   [@Injectable](#injectable)
    -   [@Inject](#inject)
    -   [@Injector](#injector)
-   [Define injector](#define-injector)
-   [The end](#the-end)

<a href="#example"></a>

## Example

Dependency injection

`./di.ts`

```ts
import { Injectable, Injector, Inject } from '@11z/core'

// Injector service.
@Injectable()
class ExampleService {
    public helloWorld(): string {
        return 'hello world!'
    }
}

// Injector.
class Example {
    constructor(@Inject(ExampleService) private readonly exampleService: ExampleService) {}

    public helloWorld(): string {
        return this.exampleService.helloWorld()
    }
}

// NOTE: Testing purpose.
const example = Injector.get(Example)
console.log(example.helloWorld()) // hello word!
```

<a href="#installation"></a>

## Installation

> You need nodeJs [install](https://nodejs.org).

```txt
# with npm
npm i @11z/core

# installing typescript
1. npm i -D typescript - in this case I'm using npm.
2. npx tsc --init - to create tsconfig.json file.
```

As we all know, the library uses `@decorator` without enabling some additional features. Typescript will complain. You need to enable these additional features of Typescript. In the file
'tsconfig.json' Launch these:

```json
{
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
}
```

That's it. let's get into coding! see [example](#example).

<a href="#apis"></a>

## Apis

We provide all the Apis that you will need to create a flexible and maintainable application.

<a href="#injectable"></a>

### @Injectable

The `@Injectable()` decorator is used to define metadata object.

Example:

`./injectable.ts`

```ts
import { Injectable } from '@11z/core'

@Injectable()
export class ExampleService {}
```

<a href="#inject"></a>

### @Inject

The `@Inject()` decorator is used to mark parameter as dependency.

Example:

`./inject.ts`

```ts
import { Inject } from '@11z/core'
import { ExampleService } from './injectable'

export class Example {
    constructor(@Inject(ExampleService) private readonly exampleService: ExampleService) {}
}
```

<a href="#injector"></a>

### @Injector

A top-level class used to resolve injector value.

Example:

`./injector.ts`

```ts
import { Injector } from '@11z/core'
import { Example } from './inject'

// Resolve Example injector value.
Injector.get(Example)
```

<a href="#define-injector"></a>

## Define injector

The `defineInjector` function is used to define metadata object.

Example:

```ts
import { defineInjector } from '@11z/core'

export class Example {}

// Define injector.
defineInjector(Example)
```

<a href="#the-end"></a>

## The end

**11z** - lighter, easier and maintainable.
