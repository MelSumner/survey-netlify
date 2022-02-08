# survey-netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/d187dc95-8608-436a-a4c0-0cdc0edbe671/deploy-status)](https://app.netlify.com/sites/ember-test-survey/deploys)

I'm trying Ember + [Netlify Forms](https://docs.netlify.com/forms/setup/). Will it work? Let's find out.

## Steps so far

- added [prember](https://github.com/ef4/prember) and [ember-cli-fastboot](https://github.com/ember-fastboot/ember-cli-fastboot)
- used the version of fastboot that is compat with Ember v4+ (in this case, [v3.2.0-beta.5](https://github.com/ember-fastboot/ember-cli-fastboot/releases/tag/v3.2.0-beta.5))
- ensured forms were being detected in the Netlify build log: 
  - <br>![image](https://user-images.githubusercontent.com/4587451/152862713-712ddb5b-cbe8-4bc3-a2b9-85efea0bc6c5.png)
- added `/success` page 
  - added this to the prember list in `ember-cli-build.js` 
  - added this to the `action` attribute value on the `form` in the `index.hbs` template file
- used [ember-cli-netlify](https://github.com/shipshapecode/ember-cli-netlify) and added `.netlifyredirects` file
- **essential step:** Netlify adds a hidden field but fastboot gets in there and regenerates the page, which takes out the hidden field that Netlify added. So add it to the form markup, right inside the `<form>` element: `<input type='hidden' name='form-name' value='survey-22' aria-label="leave this one alone it is just for netlify" />`


## Current Status

It works!!
- ✅ the [site loads](https://ember-test-survey.netlify.app/)
- ✅ filling out the form and pressing submit gives a "page not found" error.
- ✅ manually navigating to [/success](https://ember-test-survey.netlify.app/success/) works
- ✅ images on the `/success` page show up
