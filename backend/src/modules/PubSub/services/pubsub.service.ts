import { connect } from 'mqtt';
import { MQTTPubSub } from 'graphql-mqtt-subscriptions';
import { PubSub } from 'graphql-subscriptions';
import { ConfigModule } from '@nestjs/config';

export async function getStorageModule() {
  await ConfigModule.envVariablesLoaded;
  const url = `mqtt://${process.env.HOST_BROKER}:${process.env.PORT_BROKER}`;
  const username = `${process.env.USER_BROKER}`;
  const password = `${process.env.PWD_BROKER}`;
  return { url, username, password };
}

const mqttPubSub = getStorageModule().then(({ password, url, username }) => {
  const client = connect(url, {
    username: username,
    password: password,
    reconnectPeriod: 1000,
  });
  const mqttPubSub = new MQTTPubSub({
    client,
  });
  return mqttPubSub;
});
const pubSub = new PubSub();
export { mqttPubSub, pubSub };
