import * as pulumi from "@pulumi/pulumi";
 import * as kubernetes from "@pulumi/kubernetes";

 const config = new pulumi.Config();
 const envName = config.require("envName");
 const stage = config.require("stage");
 const ns = config.require("namespace");
	export function Create(k8sProvider: any){


const testDefault_token_zj4pvSecret = new kubernetes.core.v1.Secret("testDefault_token_zj4pvSecret", {
    apiVersion: "v1",
    data: {
        "ca.crt": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN3akNDQWFxZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFTTVJBd0RnWURWUVFERXdkcmRXSmwKTFdOaE1CNFhEVEl3TURJeE1ERTRORFl4TWxvWERUTXdNREl3TnpFNE5EWXhNbG93RWpFUU1BNEdBMVVFQXhNSAphM1ZpWlMxallUQ0NBU0l3RFFZSktvWklodmNOQVFFQkJRQURnZ0VQQURDQ0FRb0NnZ0VCQUs4OEkxMHgwdVJpCkFTdG1PZWFQZSt3SGhWdEplTXBIL0J5NVcwMGUybldzRHFiaVN0TU9OMksxY0NaWWh1L0J1UWJVVXJnMHdnTTQKS1ovaW5xbFJvc01XM2V4WUVEQzlaU285bWRGMURrMEVMZkhmazlQT0M3MGFnbG9aSXJMVnZCSkh2aG5JeG0zeAplTnBpSm80L2I3TkRmVmI2aUhJaFE5N1F0Y0V2R3FFRjdTaytjLzI4eElZRkJ2d2dtVlJDTnE4ejZISDA5NmE5Cm5uZjFFT2VkcUNPWVhXa1dzRUtSZXBGbDNkWGN5eWs3dUlidmVwTTJNUU5MQkZQWWVyN0NQbDh2Nk1mckF3Q0cKZGo3SUFNSnZTd2VjRm4yeUFZL2JYZ2JtOTJ5NktUT1Z2Wm5PRGtaREU2R0t0YW81RXUyRENKZURpWmhFMzRyaQpXeFV3V0RHSGJjRUNBd0VBQWFNak1DRXdEZ1lEVlIwUEFRSC9CQVFEQWdLa01BOEdBMVVkRXdFQi93UUZNQU1CCkFmOHdEUVlKS29aSWh2Y05BUUVMQlFBRGdnRUJBRUJIUTF6MnNhQlNBbkxvVi9lU2lpY0J3SlF5V0xqZk9iVWwKZFlGTVlrcG90ZS92VjllR1NRU0R0dVNDSGdPY3VrOUE1cERRaUp3ZGZ0NXpIR1hYSXlmNGl5YlBqSFdtY3hZUAoxeExCM0FRc0oraDRXa1RVM1dkQmppK2VxcWhKV0ZreTZ0UFB2OUxYV0lyR2lWM0d2S3QvQXdSK2l5TnBEZnJHCjFsd0l1VnBJR3lrQXJ5dmUrUGlhNUllcCtSQ2Jjd3VEY0NPUXZsL1RKZlcrTDBkdVJybFdkVzJyYXczRUlTQmEKa29nU21mdmNXUk1OWFpxUWo2Sy9LZEd2SnAyVWw2K0E5bVJhT2p5aUZvSFlLU3loVEEwL1dxVS9aWTZxOG5ldwp5ZTdmQU54YytBb1cxNmcvdmgrWWc3c3pEeEtVY3llZForRW5xSmFpcHB3QytTMVFLeFE9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K",
        namespace: "dGVzdA==",
        token: "ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNklteHJaVWhKWDE5QmVsZGlObDgxUzNwMFpFMHRhMmxXUzE5VU5VSnJOVFZIWDNjeVZtUlZjMFZGWmxraWZRLmV5SnBjM01pT2lKcmRXSmxjbTVsZEdWekwzTmxjblpwWTJWaFkyTnZkVzUwSWl3aWEzVmlaWEp1WlhSbGN5NXBieTl6WlhKMmFXTmxZV05qYjNWdWRDOXVZVzFsYzNCaFkyVWlPaUowWlhOMElpd2lhM1ZpWlhKdVpYUmxjeTVwYnk5elpYSjJhV05sWVdOamIzVnVkQzl6WldOeVpYUXVibUZ0WlNJNkltUmxabUYxYkhRdGRHOXJaVzR0ZW1vMGNIWWlMQ0pyZFdKbGNtNWxkR1Z6TG1sdkwzTmxjblpwWTJWaFkyTnZkVzUwTDNObGNuWnBZMlV0WVdOamIzVnVkQzV1WVcxbElqb2laR1ZtWVhWc2RDSXNJbXQxWW1WeWJtVjBaWE11YVc4dmMyVnlkbWxqWldGalkyOTFiblF2YzJWeWRtbGpaUzFoWTJOdmRXNTBMblZwWkNJNkltTmlNREV6WlRsbExUbGtNMlV0TkRaa01DMWhaREk1TFdaalptTm1NamxtTlRNNU9DSXNJbk4xWWlJNkluTjVjM1JsYlRwelpYSjJhV05sWVdOamIzVnVkRHAwWlhOME9tUmxabUYxYkhRaWZRLmpQbjZ2UnM2a244YXhZby1QYTdMbzdPMDctS3BhSEVCcExpOEtJQ1lQV2x2UDNxWUpjdlZzajl0ajNIeU40X2xpenlQN2hsdFd6c2RJV09HVVJJbVhfSzNROEhZY3BkcVVWRnRObTVUMU9BM2xxR3pKMTcyRmJPT2NjZGd4QXlxS3V6OXFhRk5WUjhrOG1ReWk2WlhZcVU0d2poMnNYaXFLOFZMUTFIX3VlaEh1MWJtX0xVT01qbUZYQS1GSVNndGRWNmxPYjd3MWNOQVpiVGF1SjlaV2daeHJPRkpwZmZoTmp5MDB0LVhGUHJ0bndhcHc2ZzBkNDhiOFZjYkxOZ1R5RkZxWjYxckVWMTJIRkYtU2YwRWNfUldodjE4Z01tdHNHaTRpLWlBM0JyMEswc3Y3Z05WWnNic2hOd25kSkp3QWY1R2N6bHZJWE5WbFRSanA0OC02UQ==",
    },
    kind: "Secret",
    metadata: {
        annotations: {
            "kubernetes.io/service-account.name": "default",
            "kubernetes.io/service-account.uid": "cb013e9e-9d3e-46d0-ad29-fcfcf29f5398",
        },
        creationTimestamp: "2021-04-17T09:27:48Z",
        name: "default-token-zj4pv",
        namespace: ns,
        resourceVersion: "129376609",
        selfLink: "/api/v1/namespaces/test/secrets/default-token-zj4pv",
        uid: "a3188607-e4e0-4cae-807f-fe596a3e9cec",
    },
    type: "kubernetes.io/service-account-token",


 },{ provider: k8sProvider }); 
 }
