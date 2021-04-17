NAMESPACE=test

.PHONY: k2p
k2p:
	-rm *.ts*
	-rm *.yaml*
	-touch callFunctions.ts
	-echo 'import * as pulumi from "@pulumi/pulumi";\n import * as kubernetes from "@pulumi/kubernetes";\n\nconst config = new pulumi.Config();\n\nconst envName = config.require("envName");\nconst stage = config.require("stage");\nconst ns = config.require("namespace")\nconst eksStack = new pulumi.StackReference("eks-"+envName+"-"+stage);\nconst eksApigatewayKubeconfig = eksStack.getOutput("kubeconfig");\nconst k8sProvider = new kubernetes.Provider("provider", {\nkubeconfig: eksApigatewayKubeconfig,\n});' |cat - callFunctions.ts > /tmp/out && mv /tmp/out callFunctions.ts
	-for p in `kubectl get  -n ${NAMESPACE} -o=name pvc,configmap,serviceaccount,secret,ingress,service,deployment,statefulset,hpa,job,cronjob`; \
		do echo "deployment $$p"; \
		kubectl get $$p -n ${NAMESPACE} -o yaml > $$(basename $$p).yaml; \
		sed -i -e 's/ - name: emptyFiled//g' $$(basename $$p).yaml; \
		kube2pulumi typescript -f $$(basename $$p).yaml; \
		sed -i -e 's/});//g' index.ts; \
		echo 'import * as pulumi from "@pulumi/pulumi";\n import * as kubernetes from "@pulumi/kubernetes";\n\n const config = new pulumi.Config();\n const envName = config.require("envName");\n const stage = config.require("stage");\n const ns = config.require("namespace");\n	export function Create(k8sProvider: any){\n' |cat - index.ts > /tmp/out && mv /tmp/out index.ts; \
		echo '\n },{ provider: k8sProvider }); \n }' >> index.ts; \
		mv index.ts $$(basename $$p).ts; \
		sed -i -e '10d;11d' $$(basename $$p).ts; \
		sed -i -e 's/namespace: \"${NAMESPACE}\",/namespace: ns,/g' $$(basename $$p).ts; \
		echo "$$(basename $$p).Create(k8sProvider)" >> callFunctions.ts; \
		echo "import * as $$(basename $$p) from \"$$(basename $$p)\";"|cat - callFunctions.ts > /tmp/out && mv /tmp/out callFunctions.ts; \
	done
	mv callFunctions.ts index.ts
	-rm *.ts-e
	-rm *.yaml*
