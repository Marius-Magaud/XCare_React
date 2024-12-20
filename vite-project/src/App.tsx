import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Query_Logs from "./pages/query_logs/query_logs.tsx";
import Query_process from "./pages/query_process/query_process.tsx";
import Versioning_Process from "./pages/versioning_process/versioning_process.tsx";
import Mapping from "./pages/mapping/mapping.tsx";
import Alerts_mailbox from "./pages/alerts_mailbox/alerts_mailbox.tsx";
import Statistics from "./pages/statistics/statistics.tsx";
import Statistics_Treemap from "./pages/statistics_treemap/statistics_treemap.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/query-logs" element={<Query_Logs/>} />
        <Route path="/query-process" element={<Query_process/>}/>
        <Route path="/versioning-process" element={<Versioning_Process/>}/>
        <Route path="/mapping" element={<Mapping/>}/>
        <Route path="/alerts-mailbox" element={<Alerts_mailbox/>}/>
        <Route path="/statistics" element={<Statistics/>}/>
        <Route path="/statistics-treemap" element={<Statistics_Treemap/>}/>

      </Routes>
    </Router>
  );
}

export default App
