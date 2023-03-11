import { Injectable } from '@11z/core'

@Injectable()
export class ExampleService {
    public helloWorld(): string {
        return 'Hello world!'
    }
}
