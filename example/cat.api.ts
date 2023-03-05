import { Api, Get, ValidateRequest, Validation } from '../index'
import { CatService } from './cat.se'
import zod from 'zod'

@Api('/cats')
export class CatApi {
    constructor(private readonly catService: CatService) {}

    @Get()
    @Validation(zod.object<ValidateRequest>({ query: zod.object({ name: zod.string() }) }))
    public cat(): string {
        return this.catService.cat()
    }
}
