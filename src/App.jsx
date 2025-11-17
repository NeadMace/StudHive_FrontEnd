import Layout from './components/background/layout.jsx'
import IndexPage from './pages/index/App.jsx'
import ProjectsPage from './pages/project/App.jsx'
import ProjectPage from './pages/project/CardProject.jsx'
import CreateProjectPage from './pages/project/CeateProject.jsx'
import ProfilePage from './pages/profile/App.jsx'
import ChatPage from './pages/chat/App.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Layout >
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/project" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/chats" element={<ChatPage />} />  
            <Route path="/create-project" element={<CreateProjectPage />} />
          </Routes>
        </Layout>
      </Router>
  )
}

export default App
