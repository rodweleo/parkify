import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./tailwind.styles.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Explore } from './account/pages/Explore/index.tsx'
import { Notifications } from './account/pages/Notifications/index.tsx'
import { Profile } from './account/pages/Profile/index.tsx'
import { ErrorPage } from './account/pages/Error/ErrorPage.tsx'
import { ParkingSpots } from './account/pages/parking-spots/index.tsx'
import { ParkingSpot } from './account/pages/parking-spots/parking-spot.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "explore",
        element: <Explore />
      },
      {
        path: "notifications",
        element: <Notifications />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "parking-spots",
        element: <ParkingSpots />
      },
      {
        path: "parking-spots/:id",
        element: <ParkingSpot />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
