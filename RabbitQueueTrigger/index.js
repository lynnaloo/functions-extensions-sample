module.exports = async function (context, queueItem) {​​
    context.log('Linda JavaScript RabbitMQ trigger function processed work item', queueItem);
}​​;