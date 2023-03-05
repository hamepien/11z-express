import express, { Route } from '../index'
import { ExampleApi, ExampleApi2 } from './ex.api'

@Route([ExampleApi], { router: express.Router() })
export class ExampleRoute {}

@Route([ExampleApi2], { router: express.Router() })
export class ExampleRoute2 {}
