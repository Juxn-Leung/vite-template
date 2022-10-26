import type { AxiosResponse } from 'axios'
import vtServer from '@/utils/request'

export function machineList (): Promise<AxiosResponse<any>> {
  return vtServer({
    url: '/sys/machineInfo/list',
    method: 'post',
    data: {}
  })
}

export interface machineListType {
  machineType: string,
  mechanismVer: string,
  osId: string,
  sn: string,
  network: string,
  id: number,
  ip: string,
  machineName: string,
  place: string
}
