export class Calc {
  private company = 'my company';
  
  constructor() {}
  calcSelary(rate: number, days: number = 20, bonus?: number): number {
    if (bonus) {
      return rate * days + bonus;
    }
    return rate * days;
  }

  static showName(): void {
    console.log('static method');
  }
}
