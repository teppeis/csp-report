csp-report
====

## Usage

```bash
$ npm install
$ npm start
```

Specify `http://localhost:3001/report` as `report-uri` of CSP header.  
ex): `Content-Security-Policy: script-src 'self'; report-uri http://localhost:3001/report`

Open `http://localhost:3001` (CSP Reporter) in your browser.  
When CSP violation is reported, it is dynamically displayed with websocket.

## Demo

`http://localhost:3001/csp-demo` is a CSP violation demo page.
If you open it in a CSP-supported browser, it reports a violation to the CSP Reporter.
