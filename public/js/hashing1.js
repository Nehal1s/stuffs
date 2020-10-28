module.exports = function (str){
  var str1 = [];
  var a = str.length;
  return alpha(str);
}
function alpha(str){
  var str1;
  for(var i=0;i<a;i++){
    console.log(str[i]);
    if(str[i]=='a') str1 += "._";
    else if(str[i]=='b') str1 += "-...";
    else if(str[i]=='c') str1 += "-.-.";
    else if(str[i]=='d') str1 += "-..";
    else if(str[i]=='e') str1 += ".";
    else if(str[i]=='f') str1 += "..-.";
    else if(str[i]=='g') str1 += "--.";
    else if(str[i]=='h') str1 += "....";
    else if(str[i]=='i') str1 += "..";
    else if(str[i]=='j') str1 += ".---";
    else if(str[i]=='k') str1 += "-.-";
    else if(str[i]=='l') str1 += ".-..";
    else if(str[i]=='m') str1 += "--";
    else if(str[i]=='n') str1 += "-.";
    else if(str[i]=='o') str1 += "---";
    else if(str[i]=='p') str1 += ".--.";
    else if(str[i]=='q') str1 += "--.-";
    else if(str[i]=='r') str1 += ".-.";
    else if(str[i]=='s') str1 += "...";
    else if(str[i]=='t') str1 += "-";
    else if(str[i]=='u') str1 += "..-";
    else if(str[i]=='v') str1 += "...-";
    else if(str[i]=='w') str1 += ".--";
    else if(str[i]=='x') str1 += "-..-";
    else if(str[i]=='y') str1 += "-.--";
    else if(str[i]=='z') str1 += "--..";
    else str1 += str[i];
  }
  logg();
  return str1;
}


function logg(){
  console.log('in unexported function');
}
