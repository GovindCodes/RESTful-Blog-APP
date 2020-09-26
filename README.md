
# RESTful Blog App:pencil:


![Author](https://img.shields.io/badge/author-GovindCodes-green)
![License](https://img.shields.io/badge/license-MIT-brightgreen)
![Platform](https://img.shields.io/badge/platform-Visual%20Studio%20Code-blue)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555)](https://www.linkedin.com/in/govind-kumar-4ba162177/)
 
 ## Introduction:chocolate_bar:

Representational state transfer(REST) is web standards based architecture and uses HTTP Protocol. It revolves around resource where every component is a resource and a resource is accessed by a common interface using HTTP standard methods.:coffee::sweat_smile:

**RESTful Blog App** is a web application developed on RESTful Routing using Node.JS, Express.JS, Embedded JavaScript (EJS) and more.:innocent::metal:

## RESTful Routes with Features:stars::stars:

:beginner:*Features of app is listed in purpose*:beginner:

| Name    | Path            | HTTP Verb | Purpose                                           | Mongoose Method          |
| ------- | --------------- | --------- | ------------------------------------------------- | ------------------------ |
| Index   | /blogs          | GET       | List all blogs                                    | Blog.find()              |
| New     | /blogs/new      | GET       | Show new blog form                                | N/A                      |
| Create  | /blogs          | POST      | Create a new blog, then redirect somewhere        | Blog.create()            |
| Show    | /blogs/:id      | GET       | Show info about one specific blog                 | Blog.findById()          |
| Edit    | /blogs/:id/edit | GET       | Show edit form for one blog                       | Blog.findById()          |
| Update  | /blogs/:id      | PUT       | Update a particular blog, then redirect somewhere | Blog.findByIdAndUpdate() |



## Files Description:eyeglasses:

* **app.js** is the main file that is the heart of our web application and contains the RESTful Routes defined for each event.
* **views** directory contains the relevant pages and parials, the EJS templates, that render on each event.
* **public/css** directory contains neccesary CSS used in web App
* **package.json** file contains the information towards the various dependencies and packages

## Run it locally:computer:

:camera::camera::camera::camera::camera::camera::camera:
*Start with Smile*:smile::smile:

1. Install [NodeJS](https://nodejs.org/en/):arrow_double_down:
2. Install [mongodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/):arrow_double_down:
3. Create a empty file and Open in your favourite code Editor.....shh...[VS Code Editor](https://code.visualstudio.com/download):wink:
4. Open the terminal window and write
```
git clone https://github.com/GovindCodes/RESTful-Blog-APP.git
```
This will files from repository to your local computer.:clock1::relieved::sun_with_face:
5. Next thing to write on terminal is
```
node app.js
```
6.  **HURRAHHH**:boom: You completed all steps successfully go to [localhost:3000](http://localhost:3000/) on your browser and enjoy.

7. ***OHHH WAIT WAIT***, you forgot giving Star to the repository.:star::stuck_out_tongue::stuck_out_tongue_winking_eye:


## Contributing:two_men_holding_hands::two_women_holding_hands:

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project:fork_and_knife:
2. Follow the Steps for running in local machine just change the link in `git clone` by your forked repository link.
2. Create your Feature Branch (``git checkout -b feature/AmazingFeature``):sparkler:
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`):arrow_double_up:
5. Open a Pull Request:arrows_clockwise::bell:

