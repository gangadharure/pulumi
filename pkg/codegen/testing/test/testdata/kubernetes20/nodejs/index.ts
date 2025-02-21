// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));


// Export sub-modules:
import * as core from "./core";
import * as helm from "./helm";
import * as types from "./types";

export {
    core,
    helm,
    types,
};
pulumi.runtime.registerResourcePackage("kubernetes", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:kubernetes") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
