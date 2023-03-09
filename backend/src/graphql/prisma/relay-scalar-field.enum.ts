import { registerEnumType } from '@nestjs/graphql';

export enum RelayScalarFieldEnum {
  ukey = 'ukey',
  status_relay = 'status_relay',
  created_at = 'created_at',
}

registerEnumType(RelayScalarFieldEnum, {
  name: 'RelayScalarFieldEnum',
  description: undefined,
});
