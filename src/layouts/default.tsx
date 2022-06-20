import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Aside } from '../ui/aside/aside';
import { Footer } from '../ui/footer/footer';

export const Default: FC = () => {
  return (
    <div className="app">
      <Aside />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
