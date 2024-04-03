import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./tailwind.styles.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Explore } from './account/pages/Explore/index.tsx'
import { Notifications } from './account/pages/Notifications/index.tsx'
import { Profile } from './account/pages/Profile/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
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
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
