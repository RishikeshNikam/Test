import React from "react";
import Loadable from "react-loadable";
import CircularProgress from "@material-ui/core/CircularProgress";
import WebsiteLayout from "../WebsiteLayout";

function Loading() {
  return (
    <div align="center">
      <CircularProgress color="secondary" />
    </div>
  );
}

const HomePage = Loadable({
  loader: () => import("../Pages/WebsitePages/HomePage/Home"),
  loading: Loading
});

const AboutUsPage = Loadable({
  loader: () => import("../Pages/WebsitePages/AboutUs/AboutUs"),
  loading: Loading
});

const ContactUs = Loadable({
  loader: () => import("../Pages/WebsitePages/Contact/Contact"),
  loading: Loading
});

const FAQs = Loadable({
  loader: () => import("../Pages/WebsitePages/FAQ/FAQ"),
  loading: Loading
});

const Terms = Loadable({
  loader: () => import("../Pages/WebsitePages/Terms/Terms"),
  loading: Loading
});

const Privacy = Loadable({
  loader: () => import("../Pages/WebsitePages/Privacy/Privacy"),
  loading: Loading
});

const Lender = Loadable({
  loader: () => import("../Pages/WebsitePages/Lender/Lender"),
  loading: Loading
});

const Borrower = Loadable({
  loader: () => import("../Pages/WebsitePages/Borrower/Borrower"),
  loading: Loading
});

const Careers = Loadable({
  loader: () => import("../Pages/WebsitePages/Careers/Careers"),
  loading: Loading
});

const ProfileForm = Loadable({
  loader: () => import("../Pages/WebsitePages/ProfileForm/ProfileForm"),
  loading: Loading
});

const PrintForm = Loadable({
  loader: () => import("../Pages/WebsitePages/PrintForm/PrintForm"),
  loading: Loading
});

const routes = [
  { path: "/Website", exact: true, name: "Home", component: WebsiteLayout },
  {
    path: "/Website/HomePage",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/Website/AboutUs",
    name: "AboutUs",
    component: AboutUsPage
  },
  {
    path: "/Website/SignUp",
    name: "ContactUs",
    component: ContactUs
  },
  {
    path: "/Website/FAQs",
    name: "FAQs",
    component: FAQs
  },
  {
    path: "/Website/Terms",
    name: "Terms",
    component: Terms
  },
  {
    path: "/Website/Privacy",
    name: "Privacy",
    component: Privacy
  },
  {
    path: "/Website/Lender",
    name: "Lender",
    component: Lender
  },
  {
    path: "/Website/Borrower",
    name: "Borrower",
    component: Borrower
  },
  {
    path: "/Website/Careers",
    name: "Careers",
    component: Careers
  },
  {
    path: "/Website/ProfileForm",
    name: "ProfileForm",
    component: ProfileForm
  },
  {
    path: "/Website/PrintForm",
    name: "PrintForm",
    component: PrintForm
  }
];

export default routes;
