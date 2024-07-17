import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { AboutPage, ProjectsPage, NewsletterPage, ContactPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "AboutPage",
    element: <AboutPage/>,
  },
  {
    path: "ProjectsPage",
    element: <ProjectsPage/>,
  },
  {
    path: "NewsletterPage",
    element: <NewsletterPage/>,
  },
  {
    path: "ContactPage",
    element: <ContactPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);