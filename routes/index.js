var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'CSP Report' });
});

router.get('/csp-demo', function(req, res) {
  var nonce = new Date().valueOf();
  var cspHeaderName = 'Content-Security-Policy';
  console.log(req.query);
  if (req.query.unsafeInline) {
    cspHeaderValue = "script-src 'self' 'nonce-" + nonce + "' 'unsafe-inline' ajax.googleapis.com; report-uri /report";
  } else {
    cspHeaderValue = "script-src 'self' 'nonce-" + nonce + "' ajax.googleapis.com; report-uri /report";
  }
  res.header(cspHeaderName, cspHeaderValue);
  var cspHeader = cspHeaderName + ': ' + cspHeaderValue;
  res.render('csp-demo', {title: 'CSP Violation Demo', nonce: nonce, cspHeader: cspHeader});
});

module.exports = router;
