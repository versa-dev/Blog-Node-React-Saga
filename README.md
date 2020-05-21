# Senior Full Stack Engineer Take-Home Challenge

![CI](https://github.com/umar-ahmed/treasured-senior-full-stack-challenge/workflows/CI/badge.svg)

## :star2: Getting Started

1. Clone repo
1. Run `yarn install` to install workspace dependencies
1. Run `yarn backend:setup` to create and seed database
1. Run `yarn start` to start up the frontend and backend development servers

## :ballot_box_with_check: To Do (~2 hours)

> **Disclaimer:** Times noted in this section are in "dev" time units. We don't expect you to complete the entire challenge in a single sitting if you don't want to, nor do we want to limit your creativity. However, in order to judge candidates fairly, we give a rough estimate of how much time we expect for it to take to complete each section. Best of luck! :smile:

### Coding (~90 mins)

- [ ] Add support for comment replies (ie. threaded comments). It's up to you how you want to present the replies and whether or not you want to support multiple levels of nesting. However, make sure that you take into account the usability of your comments system.
- [ ] Refactor `App` component to split it up into modular React components.
- [ ] Deploy the application (both frontend and backend) somewhere online at a public URL (we'll be using this to access your submission) and add the URL to the top of this README.

### Follow-up Questions (~30 mins)

After completeing the coding portion of the challenge, please answer the following questions by editing this README:

**What was the most difficult part of the coding challenge for you? What was the easiest?**

_Rearranging the original code to various modules are somewhat difficult but not so much. Without mockup design, making front end was a little challenge but once i decide the mockup myself,it was the easiest._

**If there’s one thing you could change about the starter code that was given to you, what would you change and why?**

_I have already changed the whole code into various modules so it can be reused in the future._

**If a product manager asked you to implement the replies feature for a real product, what questions would you ask them? Explain your rationale.**

1, We should make our application in a more interactive and engaging user experience. We should investigate the user experience at first and their demand at first.

2, In order for real-time functionality we should use cloud web services and APIs. Allowing multiple users to edit in real time as collaborators, without friction or delay, is a key component to its success.

So I'd love to ask product manager to investigate user experience in detail including user interface and other elements and which clouding service we are going to use.
**What considerations would you make if you were asked to modify this comment system to support 1000 comments? How about 1 million? (Be as specific as possible about what changes you would make to the backend, frontend, deployment, etc.)**

1, For backend, we should use multi-threading for making sure that multi users are able to use them. Like slack or chatting system, we should use channels for it. 
2, For database, since we should make sure a lot of data are being loaded and called when loading the system, so we use clouding data base engine not like the one we used for our testing app.
3, For frontend, using async-functionality for fetching data is the best choice like we used redux-saga for our app.
4, When deployment we should consider the compatibility with data base management.

## :file_folder: Project Structure

This project is setup using [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) with the following workspaces:

- **frontend**
  - Contains a CRA-bootstrapped app that connects to the backend REST API
  - Uses `redux` and `redux-saga` to do state management and async
  - Uses `axios` for data fetching (see `services` folder)
- **backend**
  - Contains a simple Express server that serves two resources: `users` and `comments`
  - Data is stored in a SQLite database (schema is defined in the [`setup.js` script](./backend/setup.js)) and is manually seeded with data
  - Database is accessed using [Prisma](https://www.prisma.io/docs/) (but feel free to switch this out with simple SQL queries using the `sqlite3` library or anything else you prefer)

You will also find a pre-defined GitHub Actions workflow at `.github/workflows/build.yml` that builds the frontend React app on each push to the master branch. **Make sure that this workflow is still running successfully when you are done the challenge as we'll be looking at that as well.**

Also, take a look at the scripts in the [package.json](package.json), especially the `backend` ones, as they should make it easier when you are modifying the schema of the database.

## :ship: Docker Sample

In the **backend** folder you will find a dockerfile that provides a sample of you you can run the backend with docker.

You can run the backed in docker with the following commands

```
cd backend
docker build . -t challenge
docker run --detach --name challenge-container --publish 3001:3001 --restart always challenge
```
