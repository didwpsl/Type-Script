// 객체 지향으로 커피 만들기 
{
    type CoffeeCup = {
      shots: number;
      hasMilk: boolean;
    }; // 데이터 

    class CoffeeMaker{ //클래스 
    static BEANS_GRAM_PER_SHOT: number = 7; //class level 
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number){
        this.coffeeBeans = coffeeBeans;
    } //생성자 : 클래스를 가지고 오브젝트를 만들때 항상 호출됨 

    static coffeeMachine(coffeeBeans: number): CoffeeMaker{
        return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number) :CoffeeCup{
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false
      }; //메소드 
    }

  }

  const maker = new CoffeeMaker(28); //생성자 호출 
  console.log(maker);

  CoffeeMaker.coffeeMachine(3);
}
    
  