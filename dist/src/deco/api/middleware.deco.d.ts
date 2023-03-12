import { Middleware, NonSafe } from '../../utils/types';
/**
 * A function which is called before the route handler.
 *
 * @param mids execute any code.
 * @returns
 */
export declare function Middleware(mids: Middleware[] | NonSafe[]): Function;
