Assignment 1 - REST API Project - Response to Criteria
================================================

Overview
------------------------------------------------

- **Name**: Alison Wu
- **Student number**: n12119831
- **Application name**: SportsMatch
- **Two line description:**: Sports is one of the best ways to make friends and build self-confidence. SportsMatch is an application that allows users to find sports partners and games to play together locally. 

Core criteria
------------------------------------------------

### Containerise the app

- **ECR Repository name:** n12119831-backend-api
- **Video timestamp:** 00:00
- **Relevant files:**
    - Dockerfile
    - docker-compose.yml


### Deploy the container

- **EC2 instance ID:** i-04d3aa52bc49f339f
- **Video timestamp:** 01:30

### User login

- **One line description:** JWT-based authentication with username, password and role-based verification (admin/user).
- **Video timestamp:** 02:40
- **Relevant files:**
    - /src/models/userModel.js
    - /src/controllers/authController.js
    - /src/middleware/verifyToken.js
    - /src/routes/authRoutes.js
    - .env -> for JWT_SECRET

### REST API

- **One line description:** Full REST API with CRUD routes for games and users, using appropriate HTTP methods and status codes.
- **Video timestamp:** 04:22
- **Relevant files:**
    - /src/routes/gameRoutes.js
    - /src/controllers/gameController.js
    - /src/models/game

### Data types

#### First kind

- **One line description:** Game session data (title, venue, time, sport, max players, tags).
- **Type:** Structured
- **Rationale:** Game session data stored in MySQL DB for easy querying and filtering.
- **Video timestamp:** 06:08
- **Relevant files:**
    - /src/models/gameModel.js
	- /src/controllers/gameController.js

#### Second kind

- **One line description:** upload user avatar
- **Type:** Unstructured
- **Rationale:** Image file is stored as raw media in the filesystem. Its metadata (filename, path) is referenced in the database, and the content is non-relational and still lacks a predefined schema.
- **Video timestamp:** 06:30
- **Relevant files:**
    - /src/model/userModel.js
    - /src/routes/userRoutes.js
    - /src/middleware/uploadImage.js

### CPU intensive task

 **One line description:** Uses fluent-ffmpeg to transcode uploaded videos, resizing and changing codec.
- **Video timestamp:** 06:58
- **Relevant files:**
    - /src/controllers/videoController.js
    - /src/routes/videoRoutes.js

### CPU load testing

 **One line description:** Node.js script that simulates sustained load by triggering the /api/cpu-heavy endpoint multiple times.
- **Video timestamp:** 07:49
- **Relevant files:** 
    - /loadTest.js
  

Additional criteria
------------------------------------------------

### Extensive REST API features

- **One line description:** filtering games by using sport's name
- **Video timestamp:** 05:54 - 06:05
- **Relevant files:**
    - /src/controllers/gameController.js

### External API(s)

- **One line description:** Not attempted
- **Video timestamp:**
- **Relevant files:**
    - 

### Additional types of data

- **One line description:** Not attempted
- **Video timestamp:**
- **Relevant files:**
    - 

### Custom processing

- **One line description:** Not attempted
- **Video timestamp:**
- **Relevant files:**
    - 

### Infrastructure as code

- **One line description:** docker-compose.yml file is used for multi-container setup including backend, MySQL and adminer. This simplifies the deployment process and ensures consistent local development and EC2 environments.
- **Video timestamp:** 00:36 - 01:28
- **Relevant files:**
    - /docker-compose.yml

### Upon request

- **One line description:** Not attempted
- **Video timestamp:**
- **Relevant files:**
    - 
