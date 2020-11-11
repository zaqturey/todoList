export function showErrorMessage(errorMessage){
  if(errorMessage == "") {
      return errorMessage += " Du har ingen uppgift att göra.<br> Lägg till en uppgift och låt den inte vara tom.";
  }
}

export function removeErrorMessage() {
  return errorMessage = "";
}