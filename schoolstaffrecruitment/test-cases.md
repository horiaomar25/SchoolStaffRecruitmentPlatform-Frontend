# Test Cases - Playwright E2E Testing

## Login Functionality

### Test Case: Successful Login

- **Steps:**
  1. Navigate to '[https:](http://localhost:3000/)'
  2. Enter valid username and password
  3. Click login button
EXPECTED: User sees loading page and redirected to the dashboard.

### Test Case: Unsuccessful Login
- **Steps:**
 1.Navigate to '[https:](http://localhost:3000/)'
 2.Enter invalid username and password.
 3.Click login
 EXPECTED: User to see Unsuccessful Login message


### Test Case: Successful Logout

- **Steps:**
  1. Navigate to '[https:](http://localhost:3000/dashboard)'
  2. Click logout button.
  3. Modal will appear to confirm logout.
  3. Click yes on logout modal. 
EXPECTED: User redirected to the login page.