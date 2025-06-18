# Test Cases - Playwright E2E Testing

## Login Functionality

### Test Case: Successful Login - DONE
- **Steps:**
1. Navigate to '[https:](http://localhost:3000/)'
2. Enter valid username and password
3. Click login button
4. EXPECTED: User sees loading page and redirected to the dashboard.

### Test Case: Unsuccessful Login - DONE
- **Steps:**
 1. Navigate to '[https:](http://localhost:3000/)'
 2. Enter invalid username and password.
 3. Click login
 4. EXPECTED: User to see Unsuccessful Login message


### Test Case: Successful Logout - DONE
- **Steps:**
1. Navigate to '[https:](http://localhost:3000/dashboard)'
2. Click logout button.
3. Modal will appear to confirm logout. Use state with Playwright to check visibility.
4. Click yes on logout modal. 
5. EXPECTED: User redirected to the login page.

### Test Case: Error Message with incorrect login.- DONE
- **Steps:**
1. Enter incorrect username.
2. Enter incorrect password.
3. Click login button.
4. EXPECTED: User should see a message indicating incorrect login and to try again.

### Test Case: Enter only input such as username only, should recieve message to complete both inputs. - DONE
- **Steps:**
1. Enter username.
2. Click login button.

### Test Case: Password hidden
- **Steps:**
1. Enter username.
2. Write in password.
EXPECTED: Check that attribute of password.

### Test case: Keyboard accessibility 
- **Steps:**
1. Enter username
2. Enter password
3. Press Enter
EXPECTED: redirect to dashboard as you are authenicated.