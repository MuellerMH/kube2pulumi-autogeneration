import * as shopware from "shopware";
import * as shopwareSvc from "shopware-svc";
import * as pulumi from "@pulumi/pulumi";
import * as kubernetes from "@pulumi/kubernetes";

const config = new pulumi.Config();

const envName = config.require("envName");
const stage = config.require("stage");
const ns = config.require("namespace")
const eksStack = new pulumi.StackReference("eks-"+envName+"-"+stage);
const eksApigatewayKubeconfig = eksStack.getOutput("kubeconfig");
const k8sProvider = new kubernetes.Provider("provider", {
kubeconfig: eksApigatewayKubeconfig,
});
shopwareSvc.Create(k8sProvider)
shopware.Create(k8sProvider)
