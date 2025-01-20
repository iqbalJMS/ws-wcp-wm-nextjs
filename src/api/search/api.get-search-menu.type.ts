export type T_ApiGetSearchMenuItem = {
  key: string
  title: string
  uri: string
  alias?: string,
  relative: string
  weight: string
  expanded: boolean,
  enabled: boolean,
  uuid?: string,
  options: any[],
}
export type T_ApiGetSearchMenu = T_ApiGetSearchMenuItem & {
  below?: T_ApiGetSearchMenuItem[]
}

