import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Auth } from './layouts/auth';
import { Default } from './layouts/default';
import { LoginPage } from './pages/auth/login/login';
import { PageAll } from './pages/all/all';
import { PageScheduleDate } from './pages/schedule/date';
import { PageProjectId } from './pages/project/id';
import { PageFilterTrash } from './pages/filter/trash/trash';
import { ApolloProvider } from './apollo-provider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider>
        <Routes>
          <Route path="/" element={<Default />}>
            <Route index element={<div />} />
            <Route path="/schedule/:date" element={<PageScheduleDate />} />
            <Route path="/project/:id" element={<PageProjectId />} />
            <Route path={'/filter/trash'} element={<PageFilterTrash />} />
            <Route path="/all" element={<PageAll />} />
          </Route>
          <Route element={<Auth />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
