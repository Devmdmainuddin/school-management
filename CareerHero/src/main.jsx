import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom";
import { router } from './routes/Routes.jsx';
import { MouseFollower } from "react-mouse-follower";


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <MouseFollower />
    <RouterProvider router={router} />
  </StrictMode>,
)
