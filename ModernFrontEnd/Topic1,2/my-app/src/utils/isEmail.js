export function isEmail(emailAdress) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // if (emailAdress.match(regex)) return true;
  // if (regex.test(emailAdress.trim())) return true;

  return regex.test(emailAdress.trim());
}
