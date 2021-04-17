import * as pulumi from "@pulumi/pulumi";
import * as kubernetes from "@pulumi/kubernetes";

const config = new pulumi.Config();
const envName = config.require("envName");
const stage = config.require("stage");
const ns = config.require("namespace");
export function Create(k8sProvider: any){
  const testShopware_svcService = new kubernetes.core.v1.Service(envName+"shopware-svc-"+stage, {
    apiVersion: "v1",
    kind: "Service",
    metadata: {
        name: "shopware-svc",
        namespace: ns,
    },
    spec: {
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
 },{ provider: k8sProvider });
}
