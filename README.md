
# Express graphql mongodb BoilerPlate Template

An Express graphql Boilerplate template with initial graphql setup

## Features & Implemented Module
1. JWT Authentication with graphql
2. Query and mutation for user and JWT authentication
3. Role based access using graphql directive

# Provided Query, Directive and Mutation

    ## Query:
            Users: [User]
            User(email:String): User
            Tests
            Test(name: String!)

    ## Mutation:
             register(userInput: UserInput!)
             login(email:String!,password:String!)  
             createUser(userInput: UserInput)
             updateUser(id: String!,userInput: UserInput)
             addTest(name: String)
             updateTest(id:String,name: String)

    ## Directive:  
             @isAuthenticated
             @hasRoleOf(role:String)
         
## Note
1. If you need to add any schemas or resolvers use the file format "name.graphql" for schema in schema folder and "name.resolvers.js" for resolvers in resolvers folder. Added schemas and resolvers will be added automatically in the Express app.
2. A node interface has been Provided to Implement createdAt and updatedAt


## Run
Copy .env.example to .env and setup your Database information.

``` bash
# install dependencies
yarn

# serve at localhost:4000
yarn start

```
