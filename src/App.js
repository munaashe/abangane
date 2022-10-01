import * as React from 'react';
import { useRoutes } from 'react-router-dom';

//Admin Route
import PrivateRoute from './routes/PrivateRoute';

//code splitting
const Loader = (Component) => (props) =>
(
  <React.Suspense fallback={<div>Loading ...</div>} >
    <Component {...props} />
  </React.Suspense>
);

//Layouts
const GeneralLayout = Loader(React.lazy(() => import('../src/layouts/GeneralLayout')));
const AdminLayout = Loader(React.lazy(() => import('../src/layouts/AdminLayout')));

//Public Pages
const Home = Loader(React.lazy(() => import('../src/pages/home')));
const About = Loader(React.lazy(() => import('../src/pages/about')));
const Blog = Loader(React.lazy(() => import('../src/pages/blog')));
const Trustees = Loader(React.lazy(() => import('../src/pages/trustees')));
const Article = Loader(React.lazy(() => import('../src/pages/article')));

//Admin Pages
const BlogArticles = Loader(React.lazy(() => import('../src/admin/blog')));
const Gallery = Loader(React.lazy(() => import('../src/admin/gallery')));
const AddArticle = Loader(React.lazy(() => import('../src/admin/add/AddArticle')));
const AddPicture = Loader(React.lazy(() => import('../src/admin/add/AddPicture')));

//Login Page
const Login = Loader(React.lazy(() => import('../src/admin/login')));

//Error Page
const Error = Loader(React.lazy(() => import('../src/pages/error')));



function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <GeneralLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'blog',
          element: <Blog />,
        },
        {
          path: 'blog/:id',
          element: <Article />
        },
        {
          path: 'trustees',
          element: <Trustees />
        },
      ]
    },
    {
      path: 'umngane',
      element: <PrivateRoute><AdminLayout /></PrivateRoute>,
      children: [
        {
          path: '',
          element: <BlogArticles />
        },
        {
          path: 'blog-articles',
          element: <BlogArticles />
        },
        {
          path: 'gallery',
          element: <Gallery />
        },
        {
          path: 'add-article',
          element: <AddArticle />
        },
        {
          path: 'add-picture',
          element: <AddPicture />
        }
      ]
    },
    {
      path: 'umongameli',
      element: <Login />
    },
    {
      path: '*',
      element: <Error />
    }
  ])
  return element;
}

export default App;
