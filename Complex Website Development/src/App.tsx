import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Analytics } from './components/Analytics';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Calendar } from './components/CalendarView';
import { Settings } from './components/Settings';
import { Reports } from './components/Reports';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'projects':
        return <Projects />;
      case 'team':
        return <Team />;
      case 'calendar':
        return <Calendar />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
}
