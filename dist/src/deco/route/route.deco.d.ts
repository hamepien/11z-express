import { Router as ExRouter } from 'express';
/**
 * No docs description yet.
 *
 * @param Apis api handlers.
 * @param routeOptions route options.
 * @returns
 */
export declare function Route<T = unknown>(Apis: T[], routeOptions: {
    router: ExRouter;
}): ClassDecorator;
