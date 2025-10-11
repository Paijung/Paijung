import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { 
  Download, 
  FileText, 
  TrendingUp, 
  TrendingDown,
  Filter,
  Calendar,
  DollarSign,
  Users,
  ShoppingCart
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  AreaChart, 
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const salesData = [
  { month: 'Jan', sales: 65000, target: 60000, growth: 8.3 },
  { month: 'Feb', sales: 59000, target: 60000, growth: -9.2 },
  { month: 'Mar', sales: 80000, target: 70000, growth: 35.6 },
  { month: 'Apr', sales: 81000, target: 75000, growth: 1.3 },
  { month: 'May', sales: 95000, target: 80000, growth: 17.3 },
  { month: 'Jun', sales: 105000, target: 85000, growth: 10.5 },
];

const recentReports = [
  {
    id: 1,
    name: 'Q3 Financial Report',
    type: 'Financial',
    date: '2025-10-08',
    size: '2.4 MB',
    status: 'Ready',
  },
  {
    id: 2,
    name: 'User Acquisition Analysis',
    type: 'Marketing',
    date: '2025-10-07',
    size: '1.8 MB',
    status: 'Ready',
  },
  {
    id: 3,
    name: 'Product Performance Review',
    type: 'Product',
    date: '2025-10-06',
    size: '3.1 MB',
    status: 'Ready',
  },
  {
    id: 4,
    name: 'Customer Satisfaction Survey',
    type: 'Survey',
    date: '2025-10-05',
    size: '892 KB',
    status: 'Processing',
  },
  {
    id: 5,
    name: 'Sales Team Performance',
    type: 'Sales',
    date: '2025-10-04',
    size: '1.5 MB',
    status: 'Ready',
  },
];

const topProducts = [
  { name: 'Premium Plan', revenue: '$125,430', units: 1234, growth: 15.3 },
  { name: 'Enterprise Solution', revenue: '$98,230', units: 456, growth: 22.1 },
  { name: 'Starter Package', revenue: '$67,890', units: 2345, growth: -5.2 },
  { name: 'Professional Suite', revenue: '$54,320', units: 876, growth: 8.7 },
  { name: 'Basic Plan', revenue: '$43,210', units: 3456, growth: 12.4 },
];

const customerMetrics = [
  { metric: 'Total Customers', value: '12,453', change: '+12.5%', trend: 'up' },
  { metric: 'New Customers', value: '1,234', change: '+8.3%', trend: 'up' },
  { metric: 'Churn Rate', value: '2.1%', change: '-0.8%', trend: 'down' },
  { metric: 'Customer Lifetime Value', value: '$2,450', change: '+15.2%', trend: 'up' },
];

export function Reports() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Reports & Analytics</h1>
          <p className="text-gray-500 dark:text-gray-400">Generate and view detailed business reports.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <TrendingUp className="h-3 w-3 mr-1" />
                +15.3%
              </Badge>
            </div>
            <p className="text-gray-900 dark:text-white mb-1">$485,230</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">Total Revenue</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8.2%
              </Badge>
            </div>
            <p className="text-gray-900 dark:text-white mb-1">8,367</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">Total Orders</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5%
              </Badge>
            </div>
            <p className="text-gray-900 dark:text-white mb-1">12,453</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">Active Users</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                <FileText className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                {recentReports.length} New
              </Badge>
            </div>
            <p className="text-gray-900 dark:text-white mb-1">{recentReports.length}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">Reports Ready</p>
          </CardContent>
        </Card>
      </div>

      {/* Sales Performance */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Sales Performance</CardTitle>
              <CardDescription>Monthly sales vs targets</CardDescription>
            </div>
            <Select defaultValue="6m">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1m">Last Month</SelectItem>
                <SelectItem value="3m">Last 3 Months</SelectItem>
                <SelectItem value="6m">Last 6 Months</SelectItem>
                <SelectItem value="1y">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#3b82f6" name="Actual Sales" />
              <Bar dataKey="target" fill="#e5e7eb" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>6-month revenue analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Area type="monotone" dataKey="sales" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Growth Rate</CardTitle>
                <CardDescription>Month-over-month growth percentage</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Line type="monotone" dataKey="growth" stroke="#8b5cf6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
              <CardDescription>Best performing products by revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Units Sold</TableHead>
                    <TableHead>Growth</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProducts.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-gray-900 dark:text-white">{product.name}</TableCell>
                      <TableCell>{product.revenue}</TableCell>
                      <TableCell>{product.units.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {product.growth > 0 ? (
                            <>
                              <TrendingUp className="h-4 w-4 text-green-600" />
                              <span className="text-green-600">+{product.growth}%</span>
                            </>
                          ) : (
                            <>
                              <TrendingDown className="h-4 w-4 text-red-600" />
                              <span className="text-red-600">{product.growth}%</span>
                            </>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={product.growth > 10 ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-gray-100 text-gray-700 hover:bg-gray-100'}>
                          {product.growth > 10 ? 'Trending' : 'Stable'}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customerMetrics.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-gray-500 dark:text-gray-400 mb-2">{item.metric}</p>
                      <p className="text-gray-900 dark:text-white mb-2">{item.value}</p>
                      <div className="flex items-center gap-2">
                        {item.trend === 'up' ? (
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {item.change}
                          </Badge>
                        ) : (
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            <TrendingDown className="h-3 w-3 mr-1" />
                            {item.change}
                          </Badge>
                        )}
                        <span className="text-gray-500 dark:text-gray-400 text-xs">vs last month</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="documents" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Reports</CardTitle>
                  <CardDescription>Generated reports and documents</CardDescription>
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="text-gray-900 dark:text-white">{report.name}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{report.type}</Badge>
                      </TableCell>
                      <TableCell>{new Date(report.date).toLocaleDateString()}</TableCell>
                      <TableCell>{report.size}</TableCell>
                      <TableCell>
                        <Badge className={report.status === 'Ready' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'}>
                          {report.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" disabled={report.status !== 'Ready'}>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
