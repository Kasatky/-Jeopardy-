import React from 'react';
import Auth from './features/auth/Auth';
import Navigation from './features/Navigation';

function App(): JSX.Element {
  return (
    <div>
      <Navigation />
      <Auth />
    </div>
  );
}

export default App;
