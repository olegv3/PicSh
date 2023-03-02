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
