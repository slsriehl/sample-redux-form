#Sample React App
##Node/Express Back-End, React Redux Front-End Using Redux Form
##Not Built from Starter Package

This app is intended as a 'clone-and-run' example of my work and so includes no database or session store.  Info is read and written from text and JSON files in 'data'.

When the user isn't logged in, pages are templated with Express Handlebars.  On login, the React bundle loads.

'Global' packages are installed locally and run with npm scripts to avoid true global installations.

Quickstart: npm run build:start
Play around: npm run watch
Others: see package.json scripts

Username is janeausten, password is 'foobar1234!'

Operations:
* Login
* Logout
* Change: Name, email, phone number, password
* Take survey - Form populated from JSON & dynamically generated with Redux Form
* See all survey results
* 'Delete' survey results

Future Plans:
* Add user timezone support reflected in reports
* PDF completed surveys with NightmareJS & Express Handlebars
* Download PDFs
* Upload PDFs from back-end to dynamically generated S3 bucket with short-lived dynamically generated IAM user
* Upload images from front-end to dynamically generated S3 bucket with short-lived dynamically generated IAM user
* Incorporate a Google API
* Email report to user with nodemailer if email has been set
* Text part of report to user with twilio if phone number has been set
* Add tests
