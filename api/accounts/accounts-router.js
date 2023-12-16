const router = require("express").Router();
const md = require("./accounts-middleware");
const Account = require("./accounts-model");

router.get("/", async (req, res, next) => {
  try {
    const accounts = await Account.getAll();
    res.json(accounts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", md.checkAccountId, (req, res, next) => {
  res.json(req.account);
});

router.post(
  "/",
  md.checkAccountNameUnique,
  md.checkAccountPayload,
  (req, res, next) => {
    try {
      res.json("post accounts");
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  md.checkAccountId,
  md.checkAccountNameUnique,
  md.checkAccountPayload,
  (req, res, next) => {
    try {
      res.json("update accounts");
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", md.checkAccountId, (req, res, next) => {
  try {
    res.json("delete accounts");
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
