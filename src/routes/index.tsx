import { createBrowserRouter } from "react-router-dom";
import AppWrapper from "../layouts/AppWrapper";
import NotFound from "../pages/notfound";
import { Home } from "../pages/home";
import { DashBoardWrapper } from "../layouts/DashBoardWrapper";
import Blog from "../pages/blog";
import Faq from "../pages/faq";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import ResumesTemplates from "../pages/templates/resumes/ResumesTemplates";
import CoverLetterTemplates from "../pages/templates/coverletter/CoverLetterTemplates";
import EditorWrapper from "../layouts/EditorWrapper";
import ResumeEditor from "../pages/editor";
import Pricing from "../pages/pricing";
import AuthWrapper from "../layouts/AuthWrapper";
import Resume from "../pages/dashboard/user";
import AdminDashboard from "../pages/dashboard/admin";
import BlogDetails from "../pages/blog/BlogDetails";
import Blogs from "../pages/dashboard/admin/blog";
import CreateBlog from "../pages/dashboard/admin/blog/CreateBlog";
import Vienna from "../components/resumeTemplates/vienna/Vienna";
import { PDFViewer } from "@react-pdf/renderer";
import ViennaPDF from "../components/resumeTemplates/vienna/ViennaPDF";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      // for dashboard
      {
        path: "/dashboard",
        element: <Resume />,
      },

      {
        path: "/resumes-template",
        element: <ResumesTemplates />,
      },
      {
        path: "/cover-latter-template",
        element: <CoverLetterTemplates />,
      },
    ],
  },

  {
    path: "auth",
    element: <AuthWrapper />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },

  {
    path: "edit",
    element: <EditorWrapper />,
    children: [
      {
        path: "resume/:id",
        element: <ResumeEditor />,
      },
    ],
  },
  {
    path: "admin",
    element: <DashBoardWrapper />,
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },
      // for admin blog post
      {
        path: "create-blog",
        element: <CreateBlog />,
      },
    ],
  },
  {
    path: "/demo",
    element: <Vienna />,
  },
  {
    path: "/demopdf",
    element: (
      <PDFViewer width={1000} height={1300}>
        <ViennaPDF />
      </PDFViewer>
    ),
  },
]);

export default router;
