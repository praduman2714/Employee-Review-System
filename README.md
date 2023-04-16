# Employee-Review-System
A full stack, app used for reviewing employee.
Hoisted Link : https://employereviewsystem.onrender.com


### Description

A full stack app, in which the admin, can assign the employees, to review each other on the basic of there work. The admin has special power, to make any other employee
as the new admin. Admin can also make the new employee, and they can also assing, the reviewer and revieweee. The admin can see the current employee, and according to the
review, the admin can remove the employee. The review given to the employee, is always going to be store in the database.


### Tech Stack

Node , Express, Mongodb , EJS , javaScript , html, css

### How to setup the project on local system

  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory.

After reaching the project directory you have to run the following the command.
   ```` 
        npm install 
        npm start || nodemon index.js
   ````

#### If you want to make an employee as admin then use the secret key : monkey.

### Features

  You can review the employees. The admin has the special power to assing, the task to employee, remove the employee, add new admin, and also employee;
  
  
  # HomePage / Admin View
  ![ERSAdminView](https://user-images.githubusercontent.com/66240716/232205244-793cf6dd-d3a4-421c-a8bd-c4368fbac1b5.png)
  
  # Home page / Employee view
  ![ERSEmploye](https://user-images.githubusercontent.com/66240716/232205272-389d5bf8-75d2-4030-9e42-b95649e44d83.png)
  
  # Sign-Up
  ![ErsSignUp](https://user-images.githubusercontent.com/66240716/232205283-4b90e28a-4a6d-4bca-b217-d9a016ab49dc.png)

  # Sign-In
  ![ERSSignIn](https://user-images.githubusercontent.com/66240716/232205296-b1aa2aff-994b-408c-97ae-ce634fdb8234.png)

  # Forget Password
  ![ERSforgetPass](https://user-images.githubusercontent.com/66240716/232205317-9ff9fb7a-d6e1-41ef-a459-964215ad2bcc.png)
  
  # Assign Task
  ![ERSAssign](https://user-images.githubusercontent.com/66240716/232205361-4ac255bd-3470-4c62-af2e-41645d516daf.png)

  # Employee List
  ![ERSEmployeView](https://user-images.githubusercontent.com/66240716/232205392-1f5e173e-549d-4601-99d4-f70cf9d00756.png)

  

### Folder Structure

```
Employee Review System
    |
    |               |--->css
    |--->assets---->|--->images
    |             
    |
    |               |--->flashMiddleware.js
    |--->config---->|--->mongoose.js
    |               |--->passport-local-Stradegy.js
    |
    |                  |-->admin_controller.js
    |--->controllers-->|-->home_controller.js
    |                  |-->review_controller.js
    |                  |-->user_controller.js
    |
    |               |-->review.js
    |--->models---->|
    |               |-->user.js
    |
    |              
    |               |-->admin.js
    |--->routes---->|-->index.js
    |               |-->review.js
    |               |-->user.js
    |
    |              |--->_header.ejs
    |              |---> addEmployee.ejs
    |              |---> admin.ejs
    |              |---> employe.ejs
    |--->views---->|--->forget_password.ejs
    |              |--->home.ejs
    |              |--->layout.ejs
    |              |--->sign_in.ejs
    |              |--->sign_up.ejs
    |
    |-->node_modules
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json
    
    ````
