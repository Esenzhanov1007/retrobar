import { Route, Routes } from "react-router-dom";
import {
  ADMIN_ADVERTISING_PAGE,
  ADMIN_AUTH_PAGE,
  ADMIN_CONTACTS_PAGE,
  ADMIN_INSTITUTION_PAGE,
  ADMIN_PHOTO_PAGE,
  ADMIN_POSTER_PAGE,
  ADMIN_EDIT_PAGE,
  ADMIN_VIDEO_PAGE,
  MAIN_PAGE,
  PHOTO_PAGE,
  VIDEO_PAGE,
  VIDEO_PLAYER_PAGE
} from "../consts/consts";

import AdminAdvertisinPage from "../pages/AdminAdvertisingPage/AdminAdvertisinPage";
import AdminAuthPage from "../pages/AdminAuthPage/AdminAuthPage"
import AdminContactsPage from "../pages/AdminContactsPage/AdminContactsPage";
import AdminEditPage from "../pages/AdminEditPage/AdminEditPage";
import AdminInstitutionPage from "../pages/AdminInstitutionPage/AdminInstitutionPage";
import AdminPhotoPage from "../pages/AdminPhotoPage/AdminPhotoPage";
import AdminPosterPage from "../pages/AdminPosterPage/AdminPosterPage";
import AdminVideoPage from "../pages/AdminVideoPage/AdminVideoPage";
import PhotoPage from "../pages/PhotoPage/PhotoPage";
import {useId} from "react";
import VideoPage from "../pages/VideoPage/VideoPage";
import VideoPlayerPage from "../pages/VideoPlayerPage/VideoPlayerPage";

const MainRoutes = () => {

  const PUBLIC_ROUTES = [
    {
      path: MAIN_PAGE,
      Component: <></>,
      id: useId(),
    },
    {
      path: PHOTO_PAGE,
      Component: <PhotoPage />,
      id: useId(),
    },
  ];

  const PRIVATE_ROUTES = [
    {
      path: ADMIN_AUTH_PAGE,
      Component: <AdminAuthPage />,
      id: useId(),
    },
    {
      path: ADMIN_PHOTO_PAGE,
      Component: <AdminPhotoPage />,
      id: useId(),
    },
    {
      path: ADMIN_VIDEO_PAGE,
      Component: <AdminVideoPage />,
      id: useId(),
    },
    {
      path: ADMIN_ADVERTISING_PAGE,
      Component: <AdminAdvertisinPage />,
      id: useId(),
    },
    {
      path: ADMIN_INSTITUTION_PAGE,
      Component: <AdminInstitutionPage />,
      id: useId(),
    },
    {
      path: ADMIN_CONTACTS_PAGE,
      Component: <AdminContactsPage />,
      id: useId(),
    },
    {
      path: VIDEO_PAGE,
      Component: <VideoPage />,
      id: useId(),
    },
    {
      path: VIDEO_PLAYER_PAGE,
      Component: <VideoPlayerPage />,
      id: useId(),
    },
    {
      path: ADMIN_EDIT_PAGE,
      Component: <AdminEditPage />,
      id: useId(),
    },
    {
      path: ADMIN_POSTER_PAGE,
      Component: <AdminPosterPage  />,
      id: useId(),
    },
  ]

  const isAdmin = true;

  return (
    <>
      <Routes>
        {isAdmin && PRIVATE_ROUTES.map((item) => (
          <Route path={item.path} element={item.Component} key={item.id} />
        ))}
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.path} element={item.Component} key={item.id} />
        ))}
      </Routes>
    </>
  )
}

export default MainRoutes;
