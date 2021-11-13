<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

In this repo you will find a NextJS Application with a Docker Container that is part of an Automatic Workflow that shows how to Deploy correctly to Heroku Database your web-app following the following requirements:

* Create a repository for a web-application using NextJS.

* Then make a Dockerfile with its configuration

* Add a pipeline to the project that should follow the steps Lint, Test, Coverage, Build & Deploy respectively with Github Actions.

* Deploy project to Heroku Database after it passes all the test and requirements.


<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [Next.js](https://nextjs.org/)
* [Node.js](https://reactjs.org/)
* [Docker](https://vuejs.org/)
* [Github Actions](https://angular.io/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

Below you can see a CI/CD Pipeline Draft of the internal behavior.

<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
</div>



### Installation


1. Create your NextJs App.
   ```sh
   npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
   ```
2. Create and Config `Dockerfile` in your Web app.
 
3. Create a Heroku Database and save you HEROKU_API_KEY in the section Secrets of your github account.

4. Create a folder `.github` and inside create your Yaml.file

5. Config your yaml.file with the correct command line arguments of testing, linters, and coverage of your current application.

6. Make a push to the production branch=main to see results.

7. If everything went right now your project has been Dockerized and Deployed correctly to Heroku.



<p align="right">(<a href="#top">back to top</a>)</p>


