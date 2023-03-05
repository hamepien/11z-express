import express, { Route } from '../index'
import { CatApi } from './cat.api'

@Route([CatApi], { router: express.Router() })
export class CatRoute {}
