# Requirements to run this project locally

Nodejs - 19.7

# How to Setup in local machine

Step 1: clone the repository from github link:https://github.com/anujkkheria/draganddropworkflow

`To Clone run git clone `

step 2: Open command prompt(cmd)/powershell and navigate to project folder

Step 3: run npm install

step 4: Download fake_currency_dataset(large data set cant be stored in github) from [Kaggle](https://www.kaggle.com/datasets/mdladla/fake-currency-data)

step 5: extract the file into the public/Data folder

# Run the project in local machine.

step 1 : In Cmd inside the project folder run the command `npm run dev` to start the development server

step 2 : Click on the link to open the web application

Tasks Structure and approach

Since mulitiple flows have to be created and multiple users to be handled using local storage the flow for the process is planned as following

Login screen this will only have username for now,(creates a key to save FlowIds and names)

After Entering and saving this will route to Flow creation and view Section to view available flows and create new flows(each new flow will generate new flowids each id will be used to navigate save and retrive a flow instance from local storage)

selecting a flow will move you to workflow creation section which on saving will save the flow with the flowId as Key

Work Flow Section:

The workflow section consits of side bar which contains all the nodetypes which can be dragged over to add nodes in the workflow

Node Types:
1.Data -> they have the data set as their label and can be dragged into the workflow to use their data 2. Operational node -> they have a sub category which choses the function they have on the run button

Use of COntext

Flow context: controls the creation deletion and controls changes and retrival of flow instance on the node

User context: user Login and Data storage in local storage and retrival
