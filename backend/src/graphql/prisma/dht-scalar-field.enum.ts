import { registerEnumType } from '@nestjs/graphql';

export enum DhtScalarFieldEnum {
  ukey = 'ukey',
  temperature = 'temperature',
  humidity = 'humidity',
  created_at = 'created_at',
}

registerEnumType(DhtScalarFieldEnum, {
  name: 'DhtScalarFieldEnum',
  description: undefined,
});
