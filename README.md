# Intro
This application provides new user interface to view news of ycombinator.
This uses https://github.com/HackerNews/API to obtain the data. This is also deployed on a server and publicly accessible using the link https://hackernews.hasnuzama.me


# Run locally
- Clone the repo
- Make sure `npm` is installed on your machine. If not you can download and install from the link https://nodejs.org/en/download/
- Run `npm install` to install all dependencies.
- Run `npm start` to start the development server.

# Run with docker
- Build docker image: `docker build . -t hasnuzama/hacker-news`
- Cross check if image is built successfully or not: `docker images`
- Run the docker container: `docker run -d -p 8000:80 hasnuzama/hacker-news`

# Pending things
- Need to write unit tests
- Need to update the comments page (currently not showing child comments)
- Need to fix image shown for each feed time. (Currently it is hard coded)
- A bit of styling
