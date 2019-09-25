import React from 'react';
import Layout from './components/layouts/Layout/Layout';
import BurgerBuilder from './components/features/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
