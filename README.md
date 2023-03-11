# @11z/express

A flexible library for building fast API (Application program interface) and maintainable.

> @11z/express is based on [express](https://expressjs.com) framework. `kao`, `fastify ets.` are not supported yet.

## Feature ✨ What so special about @11z/express?

-   Error handler such as 404 exception and global exception ✔
-   Catch async error on all routes ✔
-   `OOP` and `MVC` based routing or functionality are also supported ✔
-   Typescript support out of the box. `cjs`, `umd` are also supported. ✔
-   Route validation ✔
-   Lighter, easier and maintainable ✔

👉 Some of these features are optional.

## Table of contents

-   [Example](#example)
    -   [Start the server](#start-the-server)
    -   [Register route](#register-route)
    -   [With decorator](#with-decorator)
    -   [Attach and register decorated route](#attach-and-register-decorated-route)
-   [Installation](#installation)
-   [Apis](#api)
    -   [@Api](#api)
    -   [@Method](#method)
    -   [@Middleware](#middleware)
    -   [@Params](#params)
    -   [@Validation](#validation)
    -   [@Route](#route)
-   [Router](#router)
-   [Customize](#customize)
-   [Exception](#exception)
-   [The end](#the-end)

<a href="#example"></a>

## Example

> Note: You don’t need to install the express library. everything is included.

<a href="#start-the-server"></a>

#### Start the server:

`./server.ts`

```ts
import express from '@11z/express'

// Initialize express.
const app = express()

// Listen for connections.
app.listen(4000, () => console.log('Server is up! visit: http://localhost:4000'))
```

<a href="#register-route"></a>

#### Register route:

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

<a href="#with-decorator"></a>

#### With decorator:

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

<a href="#attach-and-register-decorated-route"></a>

#### Attach and register decorated route:

`./server.ts`

```ts
import express, { Router } from '@11z/express'
import { ExampleRoute } from './ex.ro.ts'
import { connect } from './database'

// Initialize express.
const app = express()

// Router instance.
const router = new Router(app)

// Attach and register decorated route.
router.attach('/api/v1', [ExampleRoute])

async function __main__() {
    // TODO: Connect to database.
    await connect({ uri: 'DB_URI' })

    // Listen for connections.
    app.listen(4000, () => console.log('Server is up! visit: http://localhost:4000'))
}

// Execute main.
__main__()
```

<a href="#installation"></a>

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

<a href="#api"></a>

### @Api

A class defined with methods for handling one or more requests.

-   @param `url` url path.

Example:

```ts
import { Api } from '@11z/express'

@Api()
export class ExampleApi {}
```

<a href="#method"></a>

### @Method

A specific endpoint for HTTP requests.

-   @param `method` http method type.
-   @param `url` url path.
-   @param `status` status code.

Possible methods:

`@Get(), @Post(), @Put(), @Patch(), @Delete()`

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

<a href="#middleware"></a>

### @Middleware

A function which is called before the route handler.

-   @param `mids` execute any code.

Example:

method middleware

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

Example:

route middleware

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

<a href="#params"></a>

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
        // `req.body` regular use.
        // instead of `req.body` use `@Body() param` with `body` => req.body
        return 'hello world!'
    }
}
```

<a href="#validation"></a>

### @Validation

Validation middleware. A function which is called before the route handler.

-   @param `schema` schema object.

Supported library: `zod`

> Note: With some libraries besides `zod` can also be integrated with routing validation, but you just have to set it up yourself. Our developers are working on it to put everything convenient.

Example:

with zod

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

<a href="#route"></a>

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

<a href="#customize"></a>

## Customize

You can customize some Apis according to your needs.

### @Middleware

Most come with `middleware`. It has to be flexible. Sure, we got it!

Example:

`./api.middleware.ts`

```ts
import { Middleware, UnauthorizedError } from '@11z/express'

// Check if user is not log in.
const Authenticated = () =>
    Middleware([
        (req, res, next) => {
            if (req.isUnAuthenticated()) {
                throw new UnauthorizedError('You are not logged in.')
            }
        }
    ])

// Example usage:
export class ExampleApi {
    @Authenticated()
    public helloWorld(): string {
        return 'hello world!'
    }
}
```

### @Method

> In addition to the 5 common http methods `@Get(), @Post(), @Put(), @Patch(), @Delete()` that we provided, there are some other http methods such as `all, trace, head, options, etc.` that we didn't
> provided. you can customize it to your needs.

Example:

`./api.method.ts`

```ts
import { METHOD_DECORATOR_FACTORY, PathParams } from '@11z/express'

// Head http method.
const Head = (url?: PathParams, status: number = 200) => METHOD_DECORATOR_FACTORY('head', url, status)

// Example usage:
export class ExampleApi {
    @Head()
    public helloWorld(): string {
        return 'hello world!'
    }
}
```

<a href="#router"></a>

## Router

The `Router` is a top-level class used to attach and register decorated route.

```ts
import express, { Router } from '@11z/express'

// Initialize express.
const app = express()

// Router constance.
const router = new Router(app)

// Attach and register decorated route.
router.attach('/', [route, ...])
```

<a href="#exception"></a>

## Exception

No docs description yet.

-   @param `message` response message.

Possible errors:

`CustomError(), UnauthorizedError(), NotFoundError(), ConflictError(), ValidationError(), ForbiddenError()`

Example:

```ts
throw new ConflictError('User is already exist.')
```

<a href="#the-end"></a>

## The end

**@11z/express** build everything Api (Application program interface) lighter, easier and maintainable.
