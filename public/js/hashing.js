module.exports = function (str){
  var str1 = [];
  str1 = alpha(str);
  return str1;
}
function alpha(str){
  var str1= [];
  var str2 = [];
  var a = str.length;
  for(var i=0;i<a;i++){
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
    else {
          var no = parseInt(str.charAt(i));
          str1 += alpha(makeid(no));
          }
        }
  return str1;
}
function makeid(length) {
   var result           = '';
   var characters       = 'abcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
   for ( var i = 0; i < charactersLength; i++ ) {
     if(i>length && i<(Math.floor(charactersLength-length))){
       result += characters.charAt(i/2);
       i++;
     }
   }
   return result;
}
