### Requirements (MVP)
- [Business rules](#business_rules)
- [Use cases](#use_cases)
- [Entities](#entities)

---

#### **Business rules** 
* A meeting should have a title and a date
* Each meeting should be linked to one client and one project
* Each client might have multiple projects 

---

#### **Use cases**
* Log in with username and password
* Navigate the app by clicking the routes in the side bar
* Create and delete a client meeting
* Select one day from the calendar and edit a client meeting
* Be notified about the next client meeting listed in the calendar
* Add a client to the client's list 
* Add a project to the project's list 
* See all the tasks related to each project (remaining, left, done)
* Check progress stats in the timeline 

---

#### **Entities** 
- Meeting
    - id
    - title
    - publishAt
    - clientId
    - projectId
    - createdAt
    - updatedAt
        
- Client
    - id
    - name
    - projects
    - createdAt
    - updatedAt

- Project
    - id
    - name
    - description
    - meetings
    - clientId
    - createdAt
    - updatedAt
         