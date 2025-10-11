import { 
  LayoutDashboard, 
  BarChart3, 
  FolderKanban, 
  Users, 
  CalendarDays, 
  FileText, 
  Settings, 
  Bell,
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: 'New' },
  { id: 'projects', label: 'Projects', icon: FolderKanban, count: 12 },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ activePage, setActivePage }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [notifications] = useState(5);

  return (
    <div className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white">N</span>
            </div>
            <span className="text-gray-900 dark:text-white">NexaFlow</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Search */}
      {!isCollapsed && (
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search..." 
              className="pl-9 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <Icon className={`h-5 w-5 ${isCollapsed ? 'mx-auto' : ''}`} />
              {!isCollapsed && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {item.badge}
                    </Badge>
                  )}
                  {item.count && (
                    <span className="text-gray-500 dark:text-gray-400">{item.count}</span>
                  )}
                </>
              )}
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="relative">
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {notifications > 0 && !isCollapsed && (
              <div className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">{notifications}</span>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-gray-900 dark:text-white">John Doe</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Admin</p>
            </div>
          )}
          {!isCollapsed && (
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bell className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
