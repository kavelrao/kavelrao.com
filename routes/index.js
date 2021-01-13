var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {  });
});

/* GET resume. */
router.get('/resume', function(req, res, next) {
  res.sendFile('resume.pdf', { root: 'public/files' } );
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {  });
});

module.exports = router;
