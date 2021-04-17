import * as pulumi from "@pulumi/pulumi";
 import * as kubernetes from "@pulumi/kubernetes";

 const config = new pulumi.Config();
 const envName = config.require("envName");
 const stage = config.require("stage");
 const ns = config.require("namespace");
	export function Create(k8sProvider: any){


const testShopware_svcService = new kubernetes.core.v1.Service("testShopware_svcService", {
    apiVersion: "v1",
    kind: "Service",
    metadata: {
        annotations: {
            "field.cattle.io/publicEndpoints": "[{\"addresses\":[\"78.46.48.180\"],\"port\":31778,\"protocol\":\"TCP\",\"serviceName\":\"test:shopware-svc\",\"allNodes\":true}]",
        },
        creationTimestamp: "2021-04-17T09:35:54Z",
        name: "shopware-svc",
        namespace: ns,
        resourceVersion: "129378386",
        selfLink: "/api/v1/namespaces/test/services/shopware-svc",
        uid: "d3af4695-878f-4807-b29c-e72462ab1d5a",
    },
    spec: {
        clusterIP: "10.43.174.76",
        externalTrafficPolicy: "Cluster",
        ports: [{
            nodePort: 31778,
            port: 8888,
            protocol: "TCP",
            targetPort: 8888,
        }],
        selector: {
            app: "shopware",
        },
        sessionAffinity: "None",
        type: "NodePort",
    },
    status: {
        loadBalancer: {},
    },


 },{ provider: k8sProvider }); 
 }
