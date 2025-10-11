import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  AreaChart, 
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart,
  Scatter,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { TrendingUp, Users, Eye, MousePointer, Clock, Globe, Download, Filter } from 'lucide-react';

const performanceData = [
  { month: 'Jan', pageViews: 12000, uniqueVisitors: 4000, bounceRate: 42, avgSessionTime: 245 },
  { month: 'Feb', pageViews: 15000, uniqueVisitors: 5200, bounceRate: 38, avgSessionTime: 280 },
  { month: 'Mar', pageViews: 18000, uniqueVisitors: 6100, bounceRate: 35, avgSessionTime: 310 },
  { month: 'Apr', pageViews: 22000, uniqueVisitors: 7800, bounceRate: 32, avgSessionTime: 340 },
  { month: 'May', pageViews: 26000, uniqueVisitors: 8900, bounceRate: 30, avgSessionTime: 365 },
  { month: 'Jun', pageViews: 31000, uniqueVisitors: 10200, bounceRate: 28, avgSessionTime: 380 },
];

const conversionData = [
  { stage: 'Visitors', value: 10000, color: '#3b82f6' },
  { stage: 'Sign-ups', value: 7500, color: '#8b5cf6' },
  { stage: 'Active Users', value: 5000, color: '#ec4899' },
  { stage: 'Paying Customers', value: 2500, color: '#10b981' },
  { stage: 'Retention', value: 2000, color: '#f59e0b' },
];

const deviceData = [
  { subject: 'Desktop', A: 120, fullMark: 150 },
  { subject: 'Mobile', A: 98, fullMark: 150 },
  { subject: 'Tablet', A: 86, fullMark: 150 },
  { subject: 'Smart TV', A: 45, fullMark: 150 },
  { subject: 'Wearable', A: 25, fullMark: 150 },
];

const trafficSources = [
  { source: 'Organic Search', sessions: 45234, percentage: 42, color: '#3b82f6' },
  { source: 'Direct', sessions: 23456, percentage: 22, color: '#8b5cf6' },
  { source: 'Social Media', sessions: 18234, percentage: 17, color: '#ec4899' },
  { source: 'Referral', sessions: 12345, percentage: 11, color: '#10b981' },
  { source: 'Email', sessions: 8765, percentage: 8, color: '#f59e0b' },
];

const geographicData = [
  { country: 'United States', users: 32450, revenue: '$125,430' },
  { country: 'United Kingdom', users: 18230, revenue: '$78,230' },
  { country: 'Germany', users: 15670, revenue: '$65,120' },
  { country: 'Canada', users: 12340, revenue: '$52,340' },
  { country: 'Australia', users: 9870, revenue: '$41,230' },
  { country: 'France', users: 8760, revenue: '$38,760' },
  { country: 'Japan', users: 7650, revenue: '$34,560' },
  { country: 'India', users: 6540, revenue: '$28,340' },
];

export function Analytics() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Analytics Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Deep insights into your application performance and user behavior.</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="30">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="365">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-500 dark:text-gray-400">Page Views</CardTitle>
              <Eye className="h-5 w-5 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-gray-900 dark:text-white mb-1">124,567</div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <TrendingUp className="h-3 w-3 mr-1" />
                +23.5%
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-500 dark:text-gray-400">Unique Visitors</CardTitle>
              <Users className="h-5 w-5 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-gray-900 dark:text-white mb-1">42,234</div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <TrendingUp className="h-3 w-3 mr-1" />
                +18.2%
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-500 dark:text-gray-400">Avg. Session Time</CardTitle>
              <Clock className="h-5 w-5 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-gray-900 dark:text-white mb-1">6m 23s</div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.3%
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-500 dark:text-gray-400">Bounce Rate</CardTitle>
              <MousePointer className="h-5 w-5 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-gray-900 dark:text-white mb-1">28.4%</div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                -5.2% Lower
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
          <CardDescription>Track key metrics over time</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="views">
            <TabsList className="mb-4">
              <TabsTrigger value="views">Page Views</TabsTrigger>
              <TabsTrigger value="visitors">Unique Visitors</TabsTrigger>
              <TabsTrigger value="bounce">Bounce Rate</TabsTrigger>
              <TabsTrigger value="session">Session Time</TabsTrigger>
            </TabsList>
            
            <TabsContent value="views">
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Area type="monotone" dataKey="pageViews" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
            
            <TabsContent value="visitors">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Line type="monotone" dataKey="uniqueVisitors" stroke="#8b5cf6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
            
            <TabsContent value="bounce">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Bar dataKey="bounceRate" fill="#ec4899" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            
            <TabsContent value="session">
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Area type="monotone" dataKey="avgSessionTime" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Funnel */}
        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
            <CardDescription>User journey through the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={conversionData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis dataKey="stage" type="category" stroke="#6b7280" width={120} />
                <Tooltip />
                <Bar dataKey="value">
                  {conversionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Device Analytics */}
        <Card>
          <CardHeader>
            <CardTitle>Device Usage</CardTitle>
            <CardDescription>Platform performance across devices</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={deviceData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" stroke="#6b7280" />
                <PolarRadiusAxis stroke="#6b7280" />
                <Radar name="Usage" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors come from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }} />
                      <span className="text-gray-700 dark:text-gray-300">{source.source}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-500 dark:text-gray-400">{source.sessions.toLocaleString()}</span>
                      <span className="text-gray-900 dark:text-white w-12 text-right">{source.percentage}%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full transition-all" 
                      style={{ width: `${source.percentage}%`, backgroundColor: source.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Geographic Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Geographic Distribution</CardTitle>
            <CardDescription>Top countries by users and revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {geographicData.map((country, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white">{country.country}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">{country.users.toLocaleString()} users</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900 dark:text-white">{country.revenue}</p>
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
