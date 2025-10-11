import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  ShoppingCart, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Download
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  AreaChart, 
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const revenueData = [
  { month: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
  { month: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
  { month: 'Mar', revenue: 5000, expenses: 3800, profit: 1200 },
  { month: 'Apr', revenue: 4500, expenses: 3908, profit: 592 },
  { month: 'May', revenue: 6000, expenses: 4800, profit: 1200 },
  { month: 'Jun', revenue: 7500, expenses: 3800, profit: 3700 },
];

const userGrowthData = [
  { date: 'Mon', users: 120 },
  { date: 'Tue', users: 180 },
  { date: 'Wed', users: 140 },
  { date: 'Thu', users: 220 },
  { date: 'Fri', users: 280 },
  { date: 'Sat', users: 190 },
  { date: 'Sun', users: 160 },
];

const productData = [
  { name: 'Product A', value: 400, color: '#3b82f6' },
  { name: 'Product B', value: 300, color: '#8b5cf6' },
  { name: 'Product C', value: 300, color: '#ec4899' },
  { name: 'Product D', value: 200, color: '#f59e0b' },
];

const recentActivities = [
  { id: 1, user: 'Sarah Wilson', action: 'completed task', project: 'Website Redesign', time: '2 min ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah' },
  { id: 2, user: 'Mike Chen', action: 'uploaded files to', project: 'Mobile App', time: '15 min ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike' },
  { id: 3, user: 'Emily Davis', action: 'commented on', project: 'API Integration', time: '1 hour ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily' },
  { id: 4, user: 'David Park', action: 'created new', project: 'Marketing Campaign', time: '3 hours ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david' },
  { id: 5, user: 'Lisa Anderson', action: 'updated status in', project: 'Q4 Planning', time: '5 hours ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa' },
];

const projectProgress = [
  { name: 'Website Redesign', progress: 85, status: 'On Track', color: 'bg-blue-500' },
  { name: 'Mobile App v2.0', progress: 60, status: 'In Progress', color: 'bg-purple-500' },
  { name: 'API Integration', progress: 40, status: 'At Risk', color: 'bg-orange-500' },
  { name: 'Marketing Campaign', progress: 95, status: 'Almost Done', color: 'bg-green-500' },
];

export function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Dashboard Overview</h1>
          <p className="text-gray-500 dark:text-gray-400">Welcome back! Here's what's happening with your business today.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Activity className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-gray-500 dark:text-gray-400">Total Revenue</CardTitle>
            <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-gray-900 dark:text-white mb-2">$45,231.89</div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <TrendingUp className="h-3 w-3 mr-1" />
                +20.1%
              </Badge>
              <span className="text-gray-500 dark:text-gray-400 text-xs">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-gray-500 dark:text-gray-400">New Users</CardTitle>
            <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-gray-900 dark:text-white mb-2">+2,350</div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <TrendingUp className="h-3 w-3 mr-1" />
                +15.3%
              </Badge>
              <span className="text-gray-500 dark:text-gray-400 text-xs">from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-gray-500 dark:text-gray-400">Total Orders</CardTitle>
            <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-gray-900 dark:text-white mb-2">1,429</div>
            <div className="flex items-center gap-2">
              <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                <TrendingDown className="h-3 w-3 mr-1" />
                -5.2%
              </Badge>
              <span className="text-gray-500 dark:text-gray-400 text-xs">from yesterday</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-gray-500 dark:text-gray-400">Active Projects</CardTitle>
            <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <Activity className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-gray-900 dark:text-white mb-2">12</div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +3
              </Badge>
              <span className="text-gray-500 dark:text-gray-400 text-xs">new this month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue, expenses, and profit trends</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Download Report</DropdownMenuItem>
                  <DropdownMenuItem>Share</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="expenses" stackId="2" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                <Area type="monotone" dataKey="profit" stackId="3" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>Daily active users this week</CardDescription>
              </div>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">+12.5%</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Product Distribution</CardTitle>
            <CardDescription>Sales by product category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={productData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {productData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {productData.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: product.color }} />
                    <span className="text-gray-700 dark:text-gray-300">{product.name}</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">{product.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Project Progress</CardTitle>
            <CardDescription>Current project completion status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {projectProgress.map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">{project.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className={`h-2 ${project.color}`} />
                <Badge variant="secondary" className="text-xs">{project.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest team updates and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.avatar} />
                    <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-gray-900 dark:text-white">
                      <span>{activity.user}</span>{' '}
                      <span className="text-gray-500 dark:text-gray-400">{activity.action}</span>{' '}
                      <span className="text-blue-600 dark:text-blue-400">{activity.project}</span>
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
