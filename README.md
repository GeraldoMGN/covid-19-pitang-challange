# covid-19-pitang-challenge

## What is this?
This is a demo project. It's a simple system for COVID-19 vaccination scheduling, scheduling consultation and outcome update.

## How it works?
The user/health worker can schedule the vaccination by providing the patient name, birth date, time and day of vaccination. If there is a opening at that time it will be scheduled, taking account the patient's age (priority if more than 65 years old).
There is a listing page where the user can see the schedule, and update the outcome, if the patient attended and was vaccinated.

## How to run?
### Front-end
``` bash
cd frontend
```
Install dependencies:
```bash
yarn install
# or 
npm i
```
Run project:
```bash
yarn start
# or 
npm start
```
To run tests:
```bash
yarn test
# or 
npm test
```

### Back-end
``` bash
cd backend
```
Install dependencies:
```bash
yarn install
# or 
npm i
```
Run project:
```bash
yarn start
# or 
npm start
```
To run tests:
```bash
yarn test
# or 
npm test
```

## Tools used
### Front-end
- React;
- Axios, for easy communication with the back-end;
- Formik, for form validation;
- React Router, for routing;
- Bootstrap 5, for easy styling, layout and responsiveness;
- SASS, for advanced styling;
- React-testing-library, for testing;
- Prop-types and ESLint, for code correctness;
- React-datepicker;
### Back-end
- Node.js;
- Express, as web framework;
- ESLint, for code correctness;
- Jest and supertest, for testing;
