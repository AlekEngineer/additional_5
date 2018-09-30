module.exports = function check(str, bracketsConfig) {
    const open = [];
    const close = [];
    const stack = [];
    let check = 0;
    for (let i=0; i<bracketsConfig.length; i++) { //выделяем откр/закр скобки
      open.push(bracketsConfig[i][0]);
      close.push(bracketsConfig[i][1]);
    };  
    const str1 = str.split(''); //"разобрали" строку 
    for ( let i=0; i<str1.length; i++){ //проверяем строку посимвольно
      for( let j=0;j<open.length; j++){
        if(open[j]==close[j] && str1[i]==close[j]){ //частный случай: добрались до открытая==закрытая
          if(str1[i]==close[stack[stack.length-1]]){ 
            stack.pop(j);
            check--;
          }
          else{
            stack.push(j);
            check++;
          }
        }
        else if(str1[i]==open[j]){ 
          stack.push(j); //пополнили стек
          check++;
        }
        else if(str1[i]==close[j]){
          if(j==stack.pop()){ //проверка соответствия закрывающей скобки
            check--; //закрывающую скобку из стека
          }
          else return false;
        }
      }
      if(check<0) return false; //чек пар открытых/закрытых скобок
    }
    if(check==0) return true;
    else return false;
}
