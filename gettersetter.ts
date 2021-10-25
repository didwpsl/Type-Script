{
    type CoffeeCup = {
      shots: number;
      hasMilk: boolean;
    }; // 데이터 

    //public : default (if we do not write something the data will be public state)
    //private
    //protected 

    class CoffeeMaker{ //클래스 
    private static BEANS_GRAM_PER_SHOT: number = 7; //class level ENCAPSULATION 
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number){
        this.coffeeBeans = coffeeBeans;
    } //생성자 : 클래스를 가지고 오브젝트를 만들때 항상 호출됨 

    static coffeeMachine(coffeeBeans: number): CoffeeMaker{
        return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number){
        if(beans<0){
            throw new Error('value for beans should be greater than 0!')
        }
        this.coffeeBeans += beans;
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


  class User{
    
      get fullName() : string{
        return `${this.firstName} ${this.lastName}`;
      }
      private internalAge = 4;
      get age(): number{
        return this.internalAge;
      }
      set age(num:number){
        if (num < 0){
          console.log("invalid number")
        }
        this.internalAge = num;
      }
      constructor(private firstName: string, private lastName: string){
        
      }
  }
  const user = new User("Steve", "Jobs");
  user.age = -6;
  console.log(user.fullName);

}
    

