# PicShr

[PicShr](https://picshr.onrender.com) is a clone of Flickr. It is a photo sharing website where users can upload photos, view photos, and comment on photos. Users can also create albums and add photos to albums. All photos are stored in AWS S3 buckets and linked to Amazon Cloudfront for fast loading times. I also used my personal photos for this project.

## Getting started
1. Clone this repository (only this branch)

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

# Wiki Link

- [Database Schema](https://github.com/olegv3/PicShr/wiki/Database-Schema)
- [Feature List](https://github.com/olegv3/PicShr/wiki/Features)
- [User Stories](https://github.com/olegv3/PicShr/wiki/User-Stories)
- [Wireframes](https://github.com/olegv3/PicShr/wiki/Wireframes))

# Frameworks, Platforms, and Libraries used

- Python - backend
- JavaScript - frontend
- AWS S3 - photo storage
- AWS Cloudfront - photo delivery
- React - frontend component
- Redux - frontend state management
- Flask - backend
- SQLAlchemy - backend
- HTML - frontend
- CSS - styling


# Home Page / Splash Page
You can access the Login Page, Signup Page, and View All Photos here. There is also a demo user button for you to check how the website works.
![image](https://user-images.githubusercontent.com/60666752/222484426-5b2f1118-fc54-4d93-ae03-b62f34742811.png)

# Sign Up Page
You can sign up here to create an account. Then you can login and start uploading photos and creating albums.
![image](https://user-images.githubusercontent.com/60666752/222486149-5f78b43f-5ca9-4812-a480-9a902f90d577.png)

# Photos Page
Here you can view all the photos uploaded by all users. You can also click on the photo to view the photo.
![image](https://user-images.githubusercontent.com/60666752/222486595-0f578856-70c3-4091-81fb-cc358e72f622.png)

# Photos Page Dark Mode
Same as above but in dark mode.
![image](https://user-images.githubusercontent.com/60666752/222486942-1f537c57-25cf-489c-9499-4d998d17cefb.png)

# Single Photo Page
Here you can view the photo and all the comments on the photo. You can also add a comment to the photo if you are logged in and do not own the photo. You can also edit and delete your own comments. If you are the owner of the photo, you can also edit and delete the photo.
![image](https://user-images.githubusercontent.com/60666752/222487678-5c06fdc3-513c-4a24-9083-bce5f7efc514.png)

# Comments
Here you can see the comments on the photo. You can also add a comment to the photo if you are logged in and do not own the photo. You can also edit and delete your own comments.
![image](https://user-images.githubusercontent.com/60666752/222488247-a35f6604-ae82-4e88-b93c-ba5001fa67a1.png)

# Users Photo Page
Here you can view all the photos uploaded by the user. You can also click on the photo to view the photo.
![image](https://user-images.githubusercontent.com/60666752/222488624-5dbbc495-cc3f-4aa1-b9b9-6dc842aa8a22.png)

# Albums Page
Here you can view all the albums created by the user. You can also click on the album to view the album and all the photos in the album.
![image](https://user-images.githubusercontent.com/60666752/222488982-dd328825-e528-424f-980f-eefd7f5a57d4.png)

# Upload Photo
If you are logged in, you can upload a photo here. You can also add a title and description to the photo.
![image](https://user-images.githubusercontent.com/60666752/222489406-db96e754-abf1-4d7b-8d0a-4daac7f01539.png)

# Create New Album
If you are logged in, you can create a new album here. You can also add a title and description to the album.
![image](https://user-images.githubusercontent.com/60666752/222489726-af1d5840-2593-4957-b24b-51be59486f85.png)

# Edit Album
If you are logged in and the owner of the album, you can edit the album here. You can also add a title and description to the album.
![image](https://user-images.githubusercontent.com/60666752/222489779-2c30a0ea-e1b4-42fc-826c-7378ead68e58.png)


# Getting Started
- Download the zip file or clone the repository
- Run npm install in the root directory
- cd into backend, run npm install, then npm start to start the backend server
- cd into out of the backend and into the frontend directory, run npm install, then npm start to start the frontend application

# Contact Info
- Email: olegv3@gmail.com



## Deployment through Render.com

First, refer to your Render.com deployment articles for more detailed
instructions about getting started with [Render.com], creating a production
database, and deployment debugging tips.

From the [Dashboard], click on the "New +" button in the navigation bar, and
click on "Web Service" to create the application that will be deployed.

Look for the name of the application you want to deploy, and click the "Connect"
button to the right of the name.

Now, fill out the form to configure the build and start commands, as well as add
the environment variables to properly deploy the application.

### Part A: Configure the Start and Build Commands

Start by giving your application a name.

Leave the root directory field blank. By default, Render will run commands from
the root directory.

Make sure the Environment field is set set to "Python 3", the Region is set to
the location closest to you, and the Branch is set to "main".

Next, add your Build command. This is a script that should include everything
that needs to happen _before_ starting the server.

For your Flask project, enter the following command into the Build field, all in
one line:

```shell
# build command - enter all in one line
npm install --prefix react-app &&
npm run build --prefix react-app &&
pip install -r requirements.txt &&
pip install psycopg2 &&
flask db upgrade &&
flask seed all
```

This script will install dependencies for the frontend, and run the build
command in the __package.json__ file for the frontend, which builds the React
application. Then, it will install the dependencies needed for the Python
backend, and run the migration and seed files.

Now, add your start command in the Start field:

```shell
# start script
gunicorn app:app
```

_If you are using websockets, use the following start command instead for increased performance:_

`gunicorn --worker-class eventlet -w 1 app:app`

### Part B: Add the Environment Variables

Click on the "Advanced" button at the bottom of the form to configure the
environment variables your application needs to access to run properly. In the
development environment, you have been securing these variables in the __.env__
file, which has been removed from source control. In this step, you will need to
input the keys and values for the environment variables you need for production
into the Render GUI.

Click on "Add Environment Variable" to start adding all of the variables you
need for the production environment.

Add the following keys and values in the Render GUI form:

- SECRET_KEY (click "Generate" to generate a secure secret for production)
- FLASK_ENV production
- FLASK_APP app
- SCHEMA (your unique schema name, in snake_case)
- REACT_APP_BASE_URL (use render.com url, located at top of page, similar to
  https://this-application-name.onrender.com)

In a new tab, navigate to your dashboard and click on your Postgres database
instance.

Add the following keys and values:

- DATABASE_URL (copy value from Internal Database URL field)

_Note: Add any other keys and values that may be present in your local __.env__
file. As you work to further develop your project, you may need to add more
environment variables to your local __.env__ file. Make sure you add these
environment variables to the Render GUI as well for the next deployment._

Next, choose "Yes" for the Auto-Deploy field. This will re-deploy your
application every time you push to main.

Now, you are finally ready to deploy! Click "Create Web Service" to deploy your
project. The deployment process will likely take about 10-15 minutes if
everything works as expected. You can monitor the logs to see your build and
start commands being executed, and see any errors in the build process.

When deployment is complete, open your deployed site and check to see if you
successfully deployed your Flask application to Render! You can find the URL for
your site just below the name of the Web Service at the top of the page.

[Render.com]: https://render.com/
[Dashboard]: https://dashboard.render.com/
