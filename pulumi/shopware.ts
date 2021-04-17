import * as pulumi from "@pulumi/pulumi";
import * as kubernetes from "@pulumi/kubernetes";

const config = new pulumi.Config();
const envName = config.require("envName");
const stage = config.require("stage");
const ns = config.require("namespace");
export function Create(k8sProvider: any){
  const testShopwareDeployment = new kubernetes.apps.v1.Deployment(envName+"-shopware-deployment-"+stage, {
    apiVersion: "apps/v1",
    kind: "Deployment",
    metadata: {
        name: "shopware",
        namespace: ns,
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
 },{ provider: k8sProvider });
}
