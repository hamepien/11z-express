import { Injectable } from '@11z/core'

@Injectable()
export class CatService {
    public cat(): string {
        return 'meow'
    }
}
