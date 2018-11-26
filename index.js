function takeANumber (katzDeliLine, name){
  var place = katzDeliLine.length;
  katzDeliLine.push(name);
  
  return "Welcome, " + name + ". You are number " + place + " in line.";
}

function nowServing (katzDeliLine){
 if (katzDeliLine.length > 0){
   katzDeliLine.shift();
   return `Currently serving ${katzDeliLine[0]}.`;
   
 } else {
   return "There is nobody waiting to be served!";
 }
}

function currentLine(katzDeliLine){
  var number = [];
  
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  
  } else{
    for (let i = 0; i < katzDeliLine.length; i++){
      number.push(`${i + 1}. ${katzDeliLine[i]}`);
    }
    
    return `The line is currently: ${number.join(', ')}`;
  }
}