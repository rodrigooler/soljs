export interface IId {
  type: string;
  start: number;
  end: number;
  name: string;
}

export interface IDeclarationsItem {
  type: string;
  start: number;
  end: number;
  id: IId;
  init: Init;
}

export interface IKey {
  type: string;
  start: number;
  end: number;
  name: string;
}

export interface IValue {
  type: string;
  start: number;
  end: number;
  value: string;
  raw: string;
}

export interface IParamsItem {
  type: string;
  start: number;
  end: number;
  name: string;
}

export interface ILeft {
  type: string;
  start: number;
  end: number;
  name: string;
}

export interface IRight {
  type: string;
  start: number;
  end: number;
  name: string;
}

export interface IBody {
  type: string;
  start: number;
  end: number;
  operator?: string;
  left?: ILeft;
  right?: IRight;
  name?: string;
}

export interface Init {
  type: string;
  start: number;
  end: number;
  properties?: PropertiesItem[];
  id?: null;
  expression?: boolean;
  generator?: boolean;
  async?: boolean;
  params?: IParamsItem[];
  body?: IBody;
}

export interface PropertiesItem {
  type: string;
  start: number;
  end: number;
  method: boolean;
  shorthand: boolean;
  computed: boolean;
  key: IKey;
  value: IValue;
  kind: string;
}

export interface IBodyItem {
  type: string;
  start: number;
  end: number;
  declarations: IDeclarationsItem[];
  kind: string;
}

export interface IAST {
  type: string;
  start: number;
  end: number;
  body: IBodyItem[];
  sourceType: string;
}
