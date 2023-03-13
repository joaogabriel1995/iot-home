import { InfluxDB } from '@influxdata/influxdb-client';
import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
@Injectable()
export class InfluxDbService {
  public connection: InfluxDB | null;
  constructor() {
    this.connection = null;
    this.connect();
  }
  public connect(): void {
    this.connection = new InfluxDB({
      url: process.env.ENV_INFLUXDB_URL || '',
      token: process.env.ENV_INFLUXDB_TOKEN || undefined,
    });
  }
  public async getIdByName(): Promise<string> {
    const response = await fetch(
      `${process.env.ENV_INFLUXDB_URL}/api/v2/orgs?org=${process.env.ENV_INFLUXDB_ORG}`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.ENV_INFLUXDB_TOKEN}`,
        },
      },
    );
    const data = await response.json();
    const id: string = data.orgs[0].id;
    return id;
  }

  public async queryRows(query: string): Promise<string[] | undefined> {
    if (this.connection) {
      const idInflux = await this.getIdByName();
      const queryApi = this.connection.getQueryApi(`${idInflux}`);

      const fluxQuery = query;
      const data: string[] = [];

      return await new Promise((resolve, reject) => {
        const fluxObserver = {
          next(row, tableMeta) {
            const result = tableMeta.toObject(row);
            data.push(result);
            return result;
          },
          error: reject,
          complete() {
            resolve(data);
          },
        };

        queryApi.queryRows(fluxQuery, fluxObserver);
      });
    }
  }
}
