{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }; // 데이터 

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class Machine implements CoffeeMaker{ //클래스 
  private static BEANS_GRAM_PER_SHOT: number = 7; //class level ENCAPSULATION 
  private coffeeBeans: number = 0; // instance (object) level

  private constructor(coffeeBeans: number){
      this.coffeeBeans = coffeeBeans;
  } //생성자 : 클래스를 가지고 오브젝트를 만들때 항상 호출됨 

  static coffeeMachine(coffeeBeans: number): Machine{
      return new Machine(coffeeBeans);
  }


  fillCoffeeBeans(beans: number){
      if(beans<0){
          throw new Error('value for beans should be greater than 0!')
      }
      this.coffeeBeans += beans;
  }
  private grindBeans(shots: number){
    console.log(`grinding beans for ${shots}`);
    if (this.coffeeBeans < shots * Machine.BEANS_GRAM_PER_SHOT){
      throw new Error('Not enough coffee beans!');
    }
    this.coffeeBeans -= shots * Machine.BEANS_GRAM_PER_SHOT;
  }

  private preheat(): void{
    console.log('heating up......');
  }

  private extract(shots: number): CoffeeCup{
    console.log(`Pulling ${shots} shots.......`);
    return{
      shots,
      hasMilk: false,
    };
  }

 makeCoffee(shots: number) :CoffeeCup{
    this.grindBeans(shots);
    this.preheat();
    return this.extract(shots);
  }
}

const maker: Machine = Machine.coffeeMachine(32);
maker.fillCoffeeBeans(32);
maker.makeCoffee(2);

const maker2: CoffeeMaker = Machine.coffeeMachine(32);
//fillcoffeeBeans 사용불가 
maker2.makeCoffee(2);

}


  
