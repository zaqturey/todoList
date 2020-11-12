export function showErrorMessage(errMsg){
  if(errMsg == "") {
      return errMsg += " Du har ingen uppgift att göra.<br> Lägg till en uppgift och låt den inte vara tom.";
  }
}

export function removeErrorMessage() {
  return errMsg = "";
}