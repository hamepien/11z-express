import { object, string } from 'zod'
import { Api, Get, ValidateRequest, Validation } from '../index'

@Api('/ex')
export class ExampleApi {
    @Get()
    @Validation(object<ValidateRequest>({ query: object({ botName: string() }) }))
    public async helloWord() {
        return 'Hello world!'
    }
}

@Api('/ex2')
export class ExampleApi2 {
    @Get()
    public helloWord(): string {
        return 'Hello word 2!'
    }
}
