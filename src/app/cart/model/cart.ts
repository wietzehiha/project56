export class Cart {
  constructor(
    public id: number,
    public type: string,
    public price: number,
    public videokaart: any,
    public processor: any,
    public memory: any,
    public totaal: number
  ){}
}
