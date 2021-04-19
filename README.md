# functions-test

RabbitMQ Extension

* First read [this](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-rabbitmq).

* [Setup a RabbitMQ Endpoint](https://github.com/Azure/azure-functions-rabbitmq-extension/wiki/Setting-up-a-RabbitMQ-Endpoint)

* Set your queue/endpoint in `host.json`:

```
"queueName": "your-queue",
"connectionString": "<your-connection-string>"
```

* Set your `local.settings.json`:

```
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "rabbitMQConnectionAppSetting": "<connection-string>",
    "AzureWebJobsStorage": "UseDevelopmentStorage=true"
  }
}
```

* Set your queue names in your `function.json` bindings:

```
"queueName": "your-queue",
```

Note: If you are running your function locally, then your Rabbit MQ instance needs to be running locally as well.
