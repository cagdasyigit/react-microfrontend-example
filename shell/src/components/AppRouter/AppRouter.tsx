import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('microApps/Dashboard'));
const Groceries = lazy(() => import('microApps/Groceries'));
const Electronics = lazy(() => import('microApps/Electronics'));

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <Suspense>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path={'/groceries'}
        element={
          <Suspense>
            <Groceries />
          </Suspense>
        }
      />
      <Route
        path={'/electronics'}
        element={
          <Suspense>
            <Electronics />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouter;
