import * as pulumi from "@pulumi/pulumi";
 import * as kubernetes from "@pulumi/kubernetes";

 const config = new pulumi.Config();
 const envName = config.require("envName");
 const stage = config.require("stage");
 const ns = config.require("namespace");
	export function Create(k8sProvider: any){


const testShopwareDeployment = new kubernetes.apps.v1.Deployment("testShopwareDeployment", {
    apiVersion: "apps/v1",
    kind: "Deployment",
    metadata: {
        annotations: {
            "deployment.kubernetes.io/revision": "2",
            "field.cattle.io/publicEndpoints": "[{\"addresses\":[\"78.46.48.180\"],\"port\":31778,\"protocol\":\"TCP\",\"serviceName\":\"test:shopware-svc\",\"allNodes\":true}]",
            "kubectl.kubernetes.io/last-applied-configuration": `{"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{},"name":"shopware","namespace":"test"},"spec":{"selector":{"matchLabels":{"app":"shopware"}},"strategy":{"rollingUpdate":{"maxSurge":"25%","maxUnavailable":"25%"},"type":"RollingUpdate"},"template":{"metadata":{"labels":{"app":"shopware"}},"spec":{"containers":[{"env":[{"name":"test","value":"2"},{"name":"emptyFiled","value":""},{"name":"test2","value":"2"}],"image":"muellermh/shopware:5.6.4-dev-3","imagePullPolicy":"IfNotPresent","name":"shopware"}]}}}}
`,
        },
        creationTimestamp: "2021-04-17T09:35:41Z",
        generation: 3,
        name: "shopware",
        namespace: ns,
        resourceVersion: "129384429",
        selfLink: "/apis/apps/v1/namespaces/test/deployments/shopware",
        uid: "bfc7ebc7-b5c0-4754-a05c-1df871f60944",
    },
    spec: {
        progressDeadlineSeconds: 600,
        replicas: 1,
        revisionHistoryLimit: 10,
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
                creationTimestamp: undefined,
                labels: {
                    app: "shopware",
                },
            },
            spec: {
                containers: [{
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
                    image: "muellermh/shopware:5.6.4-dev-3",
                    imagePullPolicy: "IfNotPresent",
                    name: "shopware",
                    resources: {},
                    terminationMessagePath: "/dev/termination-log",
                    terminationMessagePolicy: "File",
                }],
                dnsPolicy: "ClusterFirst",
                restartPolicy: "Always",
                schedulerName: "default-scheduler",
                securityContext: {},
                terminationGracePeriodSeconds: 30,
            },
        },
    },
    status: {
        availableReplicas: 1,
        conditions: [
            {
                lastTransitionTime: "2021-04-17T09:35:47Z",
                lastUpdateTime: "2021-04-17T09:35:47Z",
                message: "Deployment has minimum availability.",
                reason: "MinimumReplicasAvailable",
                status: "True",
                type: "Available",
            },
            {
                lastTransitionTime: "2021-04-17T09:35:41Z",
                lastUpdateTime: "2021-04-17T10:04:06Z",
                message: "ReplicaSet \"shopware-6b89966c4b\" has successfully progressed.",
                reason: "NewReplicaSetAvailable",
                status: "True",
                type: "Progressing",
            },
        ],
        observedGeneration: 3,
        readyReplicas: 1,
        replicas: 1,
        updatedReplicas: 1,
    },


 },{ provider: k8sProvider });
 }
