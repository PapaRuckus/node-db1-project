exports.checkAccountPayload = (req, res, next) => {
  console.log("checkAccountPayload");
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  console.log("checkAccountNameUnique");
  next()
}

exports.checkAccountId = (req, res, next) => {
  console.log("checkAccountId");
  next()
}
