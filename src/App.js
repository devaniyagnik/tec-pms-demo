import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import { Layout } from 'antd';
import Dashboard from './pages/dashboard';
import Header from './components/header';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Layout className="site-layout" style={{ width: '100%',background:"#FFFFFF" }}>
          <Header />
          <Content  style={{padding:"32px"}}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/feed" element={<Feed />} />
                     <Route path="/projects/project1" element={<Project1 />} />
                     <Route path="/projects/project2" element={<Project2 />} />
                     <Route path="/workspace" element={<Workspace />} />
                     <Route path="/chat" element={<Chat />} />
                     <Route path="/calendar" element={<Calendar />} />
                     <Route path="/inbox" element={<Inbox />} />
                     <Route path="/reports" element={<Reports />} /> */}
            </Routes>
          </Content>

        </Layout>

      </div>
    </Router>
  );
};

export default App;
