export const fluxgetMeanByTimeWindow = (
  timeRangeStartCalc: string,
  windowPeriod: string,
  _field: string,
) => {
  const query = `from(bucket: "${process.env.ENV_INFLUXDB_BUCKET}")
  |> range(start: -${timeRangeStartCalc})
  |> filter(fn: (r) => r["_measurement"] == "dht11")
  |> filter(fn: (r) => r["_field"] == "${_field}")
  |> filter(fn: (r) => r["sensor_ukey"] == "1")
  |> aggregateWindow(every: ${windowPeriod}, fn: mean, createEmpty: false, timeSrc: "_start")
  |> yield(name: "mean")`;
  console.log(query);
  return query;
};
