import { Api, Get } from '../index'

@Api('/ex')
export class ExampleApi {
    @Get()
    public helloWord(): string {
        return 'Hello word'
    }
}

@Api('/ex2')
export class ExampleApi2 {
    @Get()
    public helloWord(): string {
        return 'Hello word 2'
    }
}
