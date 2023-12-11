import { LiveProvider } from "@refinedev/core";
import { Client } from "graphql-ws";
import {
    generateCreatedSubscription,
    generateDeletedSubscription,
    generateUpdatedSubscription,
} from "../utils";

const generateSubscription = (
    client: Client,
    { callback, params, meta }: any,
    type: string,
) => {
    const generatorMap: any = {
        created: generateCreatedSubscription,
        updated: generateUpdatedSubscription,
        deleted: generateDeletedSubscription,
    };

    const { resource, filters, subscriptionType, id, ids } = params ?? {};

    const generator = generatorMap[type];

    const { operation, query, variables, operationName } = generator({
        ids,
        id,
        resource,
        filters,
        meta,
        subscriptionType,
    });

    const onNext = (payload: any) => {
        callback(payload.data[operation]);
    };

    const unsubscribe = client.subscribe(
        { query, variables, operationName },
        {
            next: onNext,
            error: console.error,
            complete: () => null,
        },
    );

    return unsubscribe;
};

export const liveProvider = (client: Client): LiveProvider => {
    return {
        subscribe({ callback, params, meta }) {
            const { resource, subscriptionType } = params ?? {};

            if (!meta) {
                throw new Error(
                    "[useSubscription]: `meta` is required in `params` for graphql subscriptions",
                );
            }

            if (!subscriptionType) {
                throw new Error(
                    "[useSubscription]: `subscriptionType` is required in `params` for graphql subscriptions",
                );
            }

            if (!resource) {
                throw new Error(
                    "[useSubscription]: `resource` is required in `params` for graphql subscriptions",
                );
            }

            const unsubscribes: any[] = [];

            if (params?.subscriptionType === "useList") {
                const createdUnsubscribe = generateSubscription(
                    client,
                    { callback, params, meta },
                    "created",
                );

                // const updatedUnsubscribe = generateSubscription(
                //     client,
                //     { callback, params },
                //     "updated",
                // );

                // const deletedUnsubscribe = generateSubscription(
                //     client,
                //     { callback, params },
                //     "deleted",
                // );

                unsubscribes.push(createdUnsubscribe);
                // unsubscribes.push(updatedUnsubscribe);
                // unsubscribes.push(deletedUnsubscribe);
            }

            if (params?.subscriptionType === "useOne") {
                const updatedUnsubscribe = generateSubscription(
                    client,
                    { callback, params, meta },
                    "updated",
                );

                unsubscribes.push(updatedUnsubscribe);
            }

            const unsubscribe = () => {
                unsubscribes.forEach((unsubscribe) => unsubscribe());
            };

            return unsubscribe;
        },
        unsubscribe(unsubscribe) {
            unsubscribe();
        },
    };
};
