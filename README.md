# @11z/express

A flexible library for building fast API (Application program interface) and maintainable.

> @11z/express is based on [express](https://expressjs.com) framework. `kao`, `fastify ets.` are not supported yet.

## Feature ✨ What so special about @11z/express?

-   Error handler such as 404 exception and global exception ✔
-   Catch async error on all routes ✔
-   OOP based routing or functional is also supported ✔
-   Typescript support out of the box. `cjs`, `umd` are also supported ✔
-   Route validation based on `zod`, `yup`... ✔

👉 Some of these features are optional.

## Table of contents

-   [Example](#example)
    -   [Start the server](#start-the-server)
    -   [Register route](#register-route)
    -   [With decorator](#with-decorator)
    -   [Attach and register decorated route](#attach-and-register-decorated-route)
-   [Installation](#installation)
-   [Apis](#api)
-   [Exception](#exception)

## Example

> Note: You don’t need to install the express library. everything are included.

Start the server:

`./server.ts`

```ts
import express from '@11z/express'

// Initialize express.
const app = express()

app.listen(4000, () => console.log('Server is up! visit: http://localhost:4000'))
```

Register route:

`./server.ts`

```ts
import express from '@11z/express'

// Initialize express.
const app = express()

// Register route.
app.get('/', (_req, res) => {
    res.status(200).send('OK')
}) // visit: http://localhost:4000 => OK

// Listen for connections.
app.listen(4000, () => console.log('Server is up! visit: http://localhost:4000'))
```

With decorator:

`./ex.api.ts`

```ts
import { Api, Get } from '@11z/express'

@Api()
export class ExampleApi {
    @Get()
    public helloWorld(): string {
        return 'hello world!'
    }
}
```

`./ex.ro.ts`

```ts
import express, { Route } from '@11z/express'
import { ExampleApi } from './cat.api.ts'

@Route([ExampleApi], { router: express.Router() })
export class ExampleRoute {}
```

Attach and register decorated route:

`./server.ts`

```ts
import express, { Router } from '@11z/express'
import { ExampleRoute } from './ex.ro.ts'

// Initialize express.
const app = express()

// Router instance.
const router = new Router(app)

// Attach and register decorated route.
router.attach('/api/v1', [ExampleRoute])

// Listen for connections.
app.listen(4000, () => console.log('Server is up! visit: http://localhost:4000'))
```

## Installation

> You need nodeJs [install](https://nodejs.org).

```txt
# with npm
npm i @11z/express
npm i @11z/core

# installing typescript
1. npm i -D typescript - in this case I'm using npm.
2. npx tsc --init - to create tsconfig.json file.
```

As we know the library is using `@decorator` without enabling some additional features. typescript will complaining. You have to enable the additional feature of typescript. in `tsconfig.json` file
enable these:

```json
{
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
}
```

That's it. let's get into coding! see [example](#example).

## Apis

We provided all the apis that you will need to build a flexible application and maintainable.

### @Api

A class defined with methods for handling one or more requests.

-   @param `url` url path.

Example:

```ts
import { Api } from '@11z/express'

@Api()
export class ExampleApi {}
```

### @Method

A specific endpoint for HTTP requests.

-   @param `method` http method type.
-   @param `url` url path.
-   @param `status` status code.

Possible methods:

`@All(), @Get(), @Post(), @Put(), @Patch(), @Delete(), @Options(), @Head(), @Trace(), @Connect()`

Example:

```ts
import { Get } from '@11z/express'

export class ExampleApi {
    @Get()
    public helloWorld(): string {
        return 'hello world!'
    }
}
```

### @Middleware

A function which is called before the route handler.

-   @param `mids` execute any code.

Example: method middleware.

```ts
import { Middleware } from '@11z/express'

export class ExampleApi {
    @Middleware([
        (req, res, next) => {
            console.log('mid mounted before route bound.')
            next()
        }
    ])
    public helloWorld(): string {
        return 'hello world!'
    }
}
```

Example: route middleware.

```ts
import { Middleware } from '@11z/express'

@Middleware([
    (req, res, next) => {
        console.log('mid mounted before route bound.')
        next()
    }
])
export class ExampleRoute {}
```

### @Params

A named URL segments that are used to capture the values specified at their position in the URL.

-   @param `name` request type.

Possible params:

`@Req(), @Res(), @Next(), @Params(), @Query(), @Body(), @Cookies(), @Headers(), @Ctx()`

Example:

```ts
import { Req, Request, Body } from '@11z/express'

export class ExampleApi {
    public helloWorld(@Req() req: Request, @Body() body: object): string {
        return 'hello world!'
    }
}
```

### @Validation

Validation middleware. A function which is called before the route handler.

-   @param `schema` schema object.

Example:

```ts
import { ValidateRequest, Validation } from '@11z/express'
import { object, string } from 'zod'

export class ExampleApi {
    @Validation(object<ValidateRequest>({ body: object({ name: string() }) }))
    public helloWorld(): string {
        return 'hello world!'
    }
}
```

### @Route

No docs description yet.

-   @param `Apis` api handlers.
-   @param `routeOptions` route options.

Example:

```ts
import express, { Route } from '@11z/express'

@Route([], { router: express.Router() })
export class ExampleRoute {}
```

## Exception

No docs description yet.

-   @param `message` response message.

Possible errors:

`CustomError(), UnauthorizedError(), NotFoundError(), ConflictError(), ValidationError(), ForbiddenError()`

Example:

```ts
throw new ConflictError('User is already exist.')
```
