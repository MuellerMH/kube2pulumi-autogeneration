import * as pulumi from "@pulumi/pulumi";
 import * as kubernetes from "@pulumi/kubernetes";

 const config = new pulumi.Config();
 const envName = config.require("envName");
 const stage = config.require("stage");
 const ns = config.require("namespace");
	export function Create(k8sProvider: any){


const testDefaultServiceAccount = new kubernetes.core.v1.ServiceAccount("testDefaultServiceAccount", {
    apiVersion: "v1",
    kind: "ServiceAccount",
    metadata: {
        creationTimestamp: "2021-04-17T09:27:48Z",
        name: "default",
        namespace: ns,
        resourceVersion: "129376610",
        selfLink: "/api/v1/namespaces/test/serviceaccounts/default",
        uid: "cb013e9e-9d3e-46d0-ad29-fcfcf29f5398",
    },
    secrets: [{
        name: "default-token-zj4pv",
    }],


 },{ provider: k8sProvider }); 
 }
