﻿class MyBehaviour extends base implements PolymerElement
{
   @listener("behave")
   onBehave() {
      console.log("behave trigger");
   }
}

@component("my-element")
@behavior(MyBehaviour)
class MyElement extends base implements PolymerElement
{
   @property({ type: String, value: "1024" /*, observer: "testChanged" */})
   test: string; 
     
   @property({ type: String, value: "2048" /*, observer: "testChanged" */ })
   test1: string;   

   //@behavior(MyBehaviour)
   
   /*
   @listener("tap")
   regularTap(e)
   {
      alert("Thank you for tapping");
   }
   */
   //@behavior(MyBehaviour.prototype)

   handleClick()
   {    
      this.test = this.test + "x";
      this.fire("behave");  
   }
  
   @observe("test")
   testChanged(newValue,oldValue)
   {
      console.log(`test has changed from ${oldValue} to ${newValue}`);
   }

   @observe("test,test1")
   test_and_test1_Changed(newTest, newTest1)
   {
      console.log(`test=${newTest}, test1=${newTest1}`);
   }

   /*
   @computed("fullname", "test")
   computeFullName(test)
   {
      return "Douglas Adams [" + test + "]";         
   }
   */
   
   /*
   @property({ name:"fullname", type: String, computed: "test" })
   computefullname(test)
   {
      return "alba: "+test;
   }
   */

   /*
   @property({type: String, computed: "test" })
   fullname(test) {
      return "Douglas Adams [" + test + "]";    
   }
   */

   @computed({ type: String })
   fullname(test) {
      return "Douglas Adams [" + test + "]";    
   }

   /*
   ready()
   {
      
   }
   */
}

 