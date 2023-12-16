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

router.get("/:id", md.checkAccountId, async (req, res, next) => {
  try {
    const account = await Account.getById(req.params.id);
    res.json(account);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  md.checkAccountId,
  md.checkAccountNameUnique,
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
