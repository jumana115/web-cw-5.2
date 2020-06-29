let food=  (prompt("enter your order number "));

    switch(food)
  {
    case "1":
     console.log("yor order is pasta");
      break;
    case "2":
        console.log("yor order is shawarma");
      break;
      case "3":
        console.log("yor order is pizza");
      break;
    default:
        console.log("your order is not avilbel");
  }
  let num1 = parseInt(prompt ("enter first number "));
  let num2 = parseInt(prompt ("enter seconed number "));
  let math = prompt ("enter your mathmatics method ");
  if (num1 && num2){
    switch(math) {
        case "+":
         console.log(num1 + num2);
          break;
        case "-":
            console.log(num1 - num2);
          break;
          case "*":
            console.log(num1 * num2);
          break;
          case "/":
            console.log(num1 / num2);
          break;
        default:
            console.log("wrong oprtion");
  }
}
let age=  parseInt(prompt("enter your age  "));
if (age <=6){
    console.log("روضة");
}
if (age <=18 && age >=7 ){
    console.log("مدرسة ");
}
if (age <=25 && age >=19 ){
    console.log("جامعة");
}
if (age>=26)
{
    console.log("خطأ");
}