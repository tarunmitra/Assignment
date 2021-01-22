function kilometerToMeter(kilometer){
   var meter = kilometer * 1000;
   return meter;
}
var result = kilometerToMeter(10);





function budgetCalculator(watch, phone, laptop){
   var totalPrice = (watch*50) + (phone*100) + (laptop*500);
   return totalPrice;
}
var totalProduct = budgetCalculator(5,3,2);





function hotelCost(day){
   cost = 0;
   if(day <= 10){
      cost = day * 100;
   }
   else if(day <= 20){
      var firstPart = 10 * 100;
      var remaining = day - 10;
      var secondPart = remaining * 80;
      cost = firstPart + secondPart;
   }
   else{
      var firstPart = 10 * 100;
      var secondPart = 10 * 80;
      var remaining = day - 20;
      var thirdPart = remaining * 50;
      cost = firstPart + secondPart + thirdPart;
   }
   return cost;
}

var count = hotelCost(10);







function megaFriend(names){
      var maxWord = names[0];
      for(var i = 0; i < names.length; i++){
         var element = names[i];
         if(element.length > maxWord.length){
            maxWord = element;
         }
      
      }
      return maxWord;
  }
  var higestName = megaFriend(["Taru", "Tarun Mitra", "Tarun mitra tarun", "abu", "salim"]);

  