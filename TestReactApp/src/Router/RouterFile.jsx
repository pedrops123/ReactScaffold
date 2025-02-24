import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { pages } from '../Pages/PagesModule';

    const routes = createBrowserRouter(
    [
        { path: '/', element: <pages.HomeComponent/>  },
        { path: 'meus-trabalhos', element: <pages.WorksComponent/>  },
        { path: 'contato', element: <pages.TestePage/>  }
    
    ]
);

const Routes = () => <RouterProvider router={routes}></RouterProvider>

export default Routes;