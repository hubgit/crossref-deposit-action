const core = require('@actions/core');
const FormData = require('form-data');
const fs = require('fs');
const fetch = require('node-fetch');

// https://support.crossref.org/hc/en-us/articles/214960123-Using-HTTPS-to-POST-Files

const form = new FormData();
form.append('operation', 'doMDUpload');
form.append('login_id', core.getInput('username'));
form.append('login_passwd', core.getInput('password'));
form.append('fname', fs.createReadStream(core.getInput('input')));

const endpoint = core.getInput('endpoint')
core.debug(`Submitting to ${endpoint}`);

fetch(endpoint, {
  method: 'POST',
  body: form,
}).then(async res => {
  const output = await res.text();
  core.setOutput('output', output);

  core.debug(`Status: ${res.statusCode}`);

  if (!res.ok) {
    core.setFailed(res.statusText);
  }
}).catch(error => {
  core.setFailed(error.message);
})
