module.exports = function check(str, bracketsConfig) {
    const open = []; //виды открывающих скобок
    const close = []; //виды закрывающих скобок
    for (let i=0; i<bracketsConfig.length; i++) { //выделяем откр/закр скобки
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
   };  
   const str1 = str.split(''); //"разобрали" строку 
   for (let i = 0; i < open.length; i++) { //переименуем одинаковые скобки 
    if (open [ i ] == close [ i ]){
     open [i] = i + "op";
     close [i] = i + "cl";
    };  
 };
      let stek = [],
       closeIndex = 0,
       openIndex = 0;

for (let i = 0; i < str1.length; i++) { //проверим строку посимвольно
  openIndex = open.indexOf(str1[i]); //открывающие скобки в стек
  if (openIndex !== -1) {
      stek.push(openIndex);  
      continue;
  }

  closeIndex = close.indexOf(str1[i]); //ищем и чекаем закрывающие скобки открывающей
  if (closeIndex !== -1) {
      
      openIndex = stek.pop();
      if (closeIndex != openIndex) {
          return false;
      }
  }
}
if (stek.length !== 0) { // чек открытых/закрытых скобок
   return false;
  }
  return true;
}
