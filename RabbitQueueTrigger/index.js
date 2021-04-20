module.exports = async function (context, item) {
    context.log('Azure Function processed this work item from RabbitMQ: ', item);
};