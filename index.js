function saturdayFun(todo) {
    if(typeof todo === 'undefined') {
      return `This Saturday, I want to roller-skate!`
    }
    else{
      return `This Saturday, I want to ${todo}!`
    }  
  }
  function mondayWork(todo) {
    if(typeof todo === 'undefined') {
        return `This Monday, I will go to the office.`
    }else{
        return `This Monday, I will ${todo}.`
        }
    }
    
const wrapAdjective = function(wrapper= "*") {
    const message = function (string = "special"){
        return `You are ${wrapper}${string}${wrapper}!`;
    };
    return message;
}
const result = wrapAdjective("||")
result("a hard worker");

    
  