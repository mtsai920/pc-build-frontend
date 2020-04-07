## PC Build Tracker Client

The purpose of this app is to create, update, view, and manage as many PC builds as you want. Although there are better and more well-established sites that already do this, I was excited to create this site because building computers is something I'm really passionate about. I also built the backend of this project, and its repo can be found [here](https://github.com/mtsai920/pc-build-api).

This project, looking back, was pretty fun, but indeed challenging. Building a fullstack application from scratch with almost no starter code was really exciting, and I was able to pick a topic that I was interested in. I encountered plenty of obstacles along the way but ultimately, I feel like I learned a lot from the entire experience.

I started out by building the API. My initial thoughts were, since I had the least amount experience with building APIs, that that would be the hardest part and I would get it out of the way first. But building the backend was actually pretty easy, and it was a lot of the logic on the frontend that proved to be the more difficult challenge. It took longer than I anticipated to set up my relationships between the frontend and the backend correctly, and I ended up rearranging my ERD because I suspected that I wasn't going to finish my project on time.

Once I simplified my tables and backend logic, connecting that to my frontend was fairly straightforward. Utilizing Handlebars in my HTML was definitely tough, as I had almost zero experience with it, but I found it to be really useful. After that, there was a significant amount of effort put into styling and cleaning up the CSS.

There are still a few things I want to fix, mainly:
- Really getting the CSS to another level
- Using modals for my forms
- Adding more columns in the backend for peripherals, cases, etc
- Seeding in my own parts so users can choose from a selection

### Technologies used:
HTML, CSS, JavaScript, jQuery, Bootstrap, Handlebars, Sass, Ruby, Rails

### Wireframes and User Stories
Wireframe can be found [here](https://imgur.com/a/YvTl85V)

As a user, I want to be able to create builds from scratch.
As a user, I want to be able to save builds halfway and come back to them.
As a user, I want to be able to update previous builds.
As a user, I want to be able to delete any builds I have.
As a user, I want to be able to name or rename my builds at any time.
