var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {  });
});

/* GET resume. */
router.get('/resume', function(req, res, next) {
  res.sendFile('Kavel-Rao_Resume.pdf', { root: 'public/files' } );
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {  });
});

router.get('/frogtime', function(req, res, next) {
  res.redirect('https://discord.com/api/oauth2/authorize?client_id=805234968989138974&permissions=116736&scope=bot');
});

module.exports = router;
