export const fluxRelayLastData = () => {
  const query = `from(bucket: "${process.env.ENV_INFLUXDB_BUCKET}")
  |> range(start:0)
  |> filter(fn: (r) => r["_measurement"] == "relay")
  |> filter(fn: (r) => r["_field"] == "OnOff")
  |> filter(fn: (r) => r["relay_ukey"] == "1")
  |> last()`;
  return query;
};
