/* eslint-disable max-len*/
function validateEmail(email) {
  // Email Regex
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateString(str) {
  // Simple String Regex
  const re = /^([A-Za-z0-9_\.@\-])+$/;
  return re.test(str);
}
/* eslint-enable max-len*/

export {
  validateEmail,
  validateString
};
