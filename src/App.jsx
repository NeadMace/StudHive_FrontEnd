import Layout from './components/background/layout.jsx'
import IndexPage from './pages/index/App.jsx'
import ProjectPage from './pages/project/App.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Layout >
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/project" element={<ProjectPage />} />
          </Routes>
        </Layout>
      </Router>
  )
}

export default App
