import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes/routes.ts';
import Layout from './Layout/DedaultAndMain/DedaultAndMain.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';
import Error from './pages/Error/Error.tsx'
import ServicesPage from './pages/ServicesPage/ServicesPage.tsx';
import TransportationPage from './pages/TransportationPage/TransportationPage.tsx';
import AboutCompanyPage from './pages/AboutCompanyPage/AboutCompanyPage.tsx';
import ContactsPage from './pages/ContactsPage/ContactsPage.tsx';
import CalculatingPage from './pages/CalculatingPage/CalculatingPage.tsx';
import AgreePage from './pages/AgreePage/AgreePage.tsx';
import { store } from './redux/configure-store.ts';
import { Provider } from 'react-redux';


import './18i.ts';
import { Suspense } from 'react';

const router = createBrowserRouter([
  {
    path: routes.DEFAULT_PATH,
    element: <Layout />,
    children: [
      {
        path: routes.DEFAULT_PATH,
        element: <MainPage />
      },
      {
        path: routes.SERVICE_PATH,
        element: <ServicesPage />
      },
      {
        path: routes.TRANTHPORTATION_PATH,
        element: <TransportationPage />
      },
      {
        path: routes.ABOUT_COMPANY_PATH,
        element: <AboutCompanyPage />
      },
      {
        path: routes.CONTACTS_PAGE,
        element: <ContactsPage />
      },
      {
        path: routes.CALCULATING_PAGE,
        element: <CalculatingPage />
      },
      {
        path: routes.AGREEMENT_PAGE,
        element: <AgreePage />
      }
    ]
  },
  {
    path: routes.ERROR_PATH,
    element: <Error />
  },

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense >
  </Provider>
)
