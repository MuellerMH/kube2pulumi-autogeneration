import * as pulumi from "@pulumi/pulumi";
import * as kubernetes from "@pulumi/kubernetes";

const testShopwareDeployment = new kubernetes.apps.v1.Deployment("testShopwareDeployment", {
    apiVersion: "apps/v1",
    kind: "Deployment",
    metadata: {
        name: "shopware",
        namespace: "test",
    },
    spec: {
        selector: {
            matchLabels: {
                app: "shopware",
            },
        },
        strategy: {
            rollingUpdate: {
                maxSurge: `25%`,
                maxUnavailable: `25%`,
            },
            type: "RollingUpdate",
        },
        template: {
            metadata: {
                labels: {
                    app: "shopware",
                },
            },
            spec: {
                containers: [{
                    image: "muellermh/shopware:5.6.4-dev-3",
                    imagePullPolicy: "IfNotPresent",
                    name: "shopware",
                    env: [
                        {
                            name: "test",
                            value: "2",
                        },
                        {
                            name: "emptyFiled",
                            value: "",
                        },
                        {
                            name: "test2",
                            value: "2",
                        },
                    ],
                }],
            },
        },
    },
});
