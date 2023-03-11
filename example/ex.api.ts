import { object, string } from 'zod'
import { Api, Get, ValidateRequest, Validation } from '../index'
import { ExampleService } from './ex.sev'

@Api('/ex')
export class ExampleApi {
    constructor(private readonly exampleService: ExampleService) {}

    @Get()
    @Validation(object<ValidateRequest>({ query: object({ botName: string().optional() }) }))
    public async helloWord() {
        return this.exampleService.helloWorld()
    }
}

@Api('/ex2')
export class ExampleApi2 {
    @Get()
    public helloWord(): string {
        return 'Hello word 2!'
    }
}
