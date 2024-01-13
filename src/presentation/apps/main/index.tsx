import { RouterProvider } from '@tanstack/react-router';
import { router } from '@routes';

export function MainApp() {
  return (
    <RouterProvider router={router}  />
  )
} 
