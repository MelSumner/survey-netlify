# survey-netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/d187dc95-8608-436a-a4c0-0cdc0edbe671/deploy-status)](https://app.netlify.com/sites/ember-test-survey/deploys)

I'm trying Ember + Netlify Forms. Will it work? Let's find out.

## Steps so far

- add prember and fastboot
- make sure to use the version of fastboot that is compat with Ember v4+
- make sure to see things about forms being detected in the netlify build log: 
  - <br>![image](https://user-images.githubusercontent.com/4587451/152862713-712ddb5b-cbe8-4bc3-a2b9-85efea0bc6c5.png)
- added `/success` page; added this to the prember list as well as the action in the form

It's currently still not working- filling out the form and pressing submit gives a "page not found" error.

If I manually navigate to /success it is there (although the image I added to that page does _not_ show up), so not sure what is going on just yet.
