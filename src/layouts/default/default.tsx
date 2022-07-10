import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Aside } from '../../ui/aside/aside';
import { Footer } from '../../ui/footer/footer';

export const Default: FC = () => {
  const [isAsideVisible, setAsideVisible] = useState(false);

  return (
    <div className="app">
      <Aside isVisible={isAsideVisible} />
      <main className="main">
        <Outlet />
      </main>
      <Footer onAsideButtonClick={() => setAsideVisible(!isAsideVisible)} />
    </div>
  );
};
