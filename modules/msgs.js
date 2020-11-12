export function showErrorMessage(errorMessage, errorMasages){
  if(errorMessage == "") {
    errorMessage += " Du har ingen uppgift att göra.<br> Lägg till en uppgift och låt den inte vara tom.";
      errorMasages.innerHTML = errorMessage;
  }
}

export function removeErrorMessage(errorMessage, errorMasages) {
  errorMessage = "";
  errorMasages.innerHTML = errorMessage;
}