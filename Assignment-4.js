
// Problem:1  radianToDegree

function radianToDegree(radian) {
  if (typeof radian == 'number') {
    const pi = Math.PI;
    const degree = radian * (180/pi);

    return degree.toFixed(2);
  }
  return 'Please enter a valid numbers only.';
}



// Problem:2  isJavaScriptFile 

function isJavaScriptFile(fileExtention) {
  if (typeof fileExtention == 'string') {
    if (fileExtention.endsWith('.js')) {
      return true;
    } else {
      return false;
    }
  }
  return 'Error: Please enter a valid file name which must be a string.';
}



// Problem 3: oilPrice

function oilPrice(diesel, petrol, octane) {
  if ((typeof diesel == 'number') && (typeof petrol == 'number') && (typeof octane == 'number')) {
    
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
  
    const totalDieselPrice = dieselPrice * diesel;
    const totalPetrolPrice = petrolPrice * petrol;
    const totalOctanePrice = octanePrice * octane;
    
    const totalCost = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
  
    return totalCost;
  }
    return "Error: It's accept must be three valid Numbers."
}



// Problem 4: publicBusFare

function publicBusFare(passengers) {
  const busSit = 50;
  const microBusSit = 11;
  const publicBusTicketPrice = 250;

  let remainPassenger = 0;
   
  if (passengers >= busSit) {

    const busPassengers = Math.floor(passengers / busSit) * busSit;
    remainPassenger = passengers - busPassengers;
    const microbusPassengers = Math.floor(remainPassenger / microBusSit) * microBusSit;
    remainPassenger = remainPassenger - microbusPassengers;
    const publicBusTicketCost = remainPassenger * publicBusTicketPrice;
    
    return publicBusTicketCost;

  } else if(passengers < busSit && passengers > microBusSit){

    const microbusPassengers = passengers % microBusSit;
    const publicBusTicketCost = microbusPassengers * publicBusTicketPrice;

    return publicBusTicketCost;
  } else if (passengers === microBusSit) {
    const microbusPassengers = passengers % microBusSit;
    const publicBusTicketCost = microbusPassengers * publicBusTicketPrice;

    return publicBusTicketCost;
  } else {
    return "Please enter a positive numbers only.";
  }
}



// Problem 5: isBestFriend

function isBestFriend(object1, object2) {
  if ((typeof object1 == 'object') && (typeof object2 == 'object')) {

    const objectValue1 = Object.values(object1);
    const objectValue2 = Object.values(object2);

    for (let i = 0; i < objectValue1.length; i++){
      for (let j = 0; j < objectValue2.length; j++){
        if (objectValue1[i] == objectValue2[j + 1] && objectValue1 [i + 1] == objectValue2[j]) {
          return true;
        }
        return false;
      }
    }
  }
  return 'This mathod will accept two valid object.';
}
 








