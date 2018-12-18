var express = require('express');
var router = express.Router();
var query = require('../mysql');
/* GET home page. */
router.get('/api/get/train_tickets', function(req, res, next) {
    var date = req.query.date;
    if (!date) {
        res.json({ code: 3, msg: '没有时间' })
    } else {
        query('select * from train where date_format(time,"%Y-%m-%d")=?', [date], function(err, results) {
            if (err) {
                res.json({ code: 0, msg: err })
            } else {
                res.json({ code: 1, data: results })
            }
        })
    }
});

module.exports = router;