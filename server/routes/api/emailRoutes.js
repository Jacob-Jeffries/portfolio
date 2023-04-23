const router = require('express').Router();

// Route /api/email
router.post('/', (req, res) => {
  try {
    console.log('Email Route');
    return res.status(200).json(req.body)
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;