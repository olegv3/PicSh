import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import SplashPage from './components/SplashPage/SplashPage';
import AlbumForm from './components/AlbumForm/AlbumForm';
import LogoutConfirm from './components/auth/LogoutConfirm';
import UploadPicture from './components/UploadPicture/UploadPicture';
import ViewImages from './components/UploadPicture/ViewImages';
// import ImageShowRoom from './components/ImageShowRoom/ImageShowRoom';
import ImageShowRoomProfile from './components/ImageShowRoom/ImageShowRoomProfile';
import ImageShowFromAlbumRoom from './components/ImageShowRoom/ImageShowRoomAlbum';
import ImageShowRoomTags from './components/ImageShowRoom/ImageShowRoomTags';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);



  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/login" exact={true}>
        <LoginForm />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path="/users" exact={true} >
            <UsersList />
          </ProtectedRoute>
          <Route path='/people/:userId/photostream/:photoId'>
          <ImageShowRoomProfile />
        </Route>
        <Route path='/people/:userId/albums/:albumId/photos/:photoId'>
          <ImageShowFromAlbumRoom />
        </Route>
          <ProtectedRoute path='/people/:userId/albums/new'>
          <AlbumForm />
        </ProtectedRoute>
        <ProtectedRoute path='/upload'>
          <UploadPicture />
        </ProtectedRoute>
        <Route path="/photos" exact={true}>
          <ViewImages />
        </Route>
        <Route path='/photos/tags/:tag/:photoId'>
          <ImageShowRoomTags />
        </Route>
        {/* <Route path="/photos/:id">
          <ImageShowRoom />
        </Route> */}
        <Route path='/' exact={true} >
          <SplashPage />
        </Route>
        <ProtectedRoute path='/logout-confirm'>
          <LogoutConfirm />
        </ProtectedRoute>
        </Switch>
    </BrowserRouter>
  );
}



export default App;
