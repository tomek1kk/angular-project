export class FormValue {
  constructor(
    public mainLimit: number,
    public mainRetention: number,
    public type: CalculationType
  ) {}
}

export enum CalculationType {
  Simple,
  Complex
}
