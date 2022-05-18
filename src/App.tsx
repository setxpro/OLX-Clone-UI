import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Layout from './Components/Layout';
import { GetRoutes } from './Routes';
import { Container } from './Styles/AppStyle'; // **

const App: React.FC = () => {
  return (
    <Layout>
      <Header/>
      <GetRoutes/>
      <Footer/>
    </Layout>
  );
}

export default App;