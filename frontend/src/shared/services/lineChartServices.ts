interface IlineChartService {
  formatDatetime: (datetime: string) => string
}

export class LineChartService implements IlineChartService {
  constructor() {}
  formatDatetime = (datetime: string) => {
    const dataHora = new Date(datetime)
    const horas = String(dataHora.getHours()).padStart(2, '0')
    const minutos = String(dataHora.getMinutes()).padStart(2, '0')
    const segundos = String(dataHora.getSeconds()).padStart(2, '0')
    const string_temp = `${horas}:${minutos}`
    return string_temp
  }
}
