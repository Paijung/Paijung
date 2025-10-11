import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  CreditCard,
  Save,
  Upload
} from 'lucide-react';

export function Settings() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Settings</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage your account settings and preferences.</p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Palette className="h-4 w-4 mr-2" />
            Appearance
          </TabsTrigger>
          <TabsTrigger value="billing">
            <CreditCard className="h-4 w-4 mr-2" />
            Billing
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and profile picture.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Photo
                  </Button>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">JPG, GIF or PNG. Max size of 5MB.</p>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" defaultValue="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" defaultValue="john.doe@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" defaultValue="+1 (555) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself..." rows={4} defaultValue="Product manager and design enthusiast. Passionate about creating user-centric solutions." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, Country" defaultValue="New York, USA" />
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Configure how you receive email notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Project Updates</Label>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Get notified about project status changes</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Comments & Mentions</Label>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Receive notifications when someone mentions you</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Task Assignments</Label>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Get notified when tasks are assigned to you</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Weekly Reports</Label>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Receive weekly activity summaries</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Push Notifications</CardTitle>
              <CardDescription>Manage browser and mobile push notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Desktop Notifications</Label>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Show notifications on desktop</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Mobile Notifications</Label>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Receive push notifications on mobile</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password to keep your account secure.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <Button>Update Password</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Enable 2FA</Label>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Use an authenticator app to generate codes</p>
                </div>
                <Switch />
              </div>
              <Button variant="outline">Setup Authenticator</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Sessions</CardTitle>
              <CardDescription>Manage your active sessions across devices.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900 dark:text-white">MacBook Pro - New York</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">Current session • Last active: Now</p>
                  </div>
                  <Button variant="outline" size="sm">Revoke</Button>
                </div>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900 dark:text-white">iPhone 15 - New York</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">Last active: 2 hours ago</p>
                  </div>
                  <Button variant="outline" size="sm">Revoke</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Tab */}
        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme</CardTitle>
              <CardDescription>Customize the appearance of the application.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="theme">Color Theme</Label>
                <Select defaultValue="light">
                  <SelectTrigger id="theme">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="accentColor">Accent Color</Label>
                <Select defaultValue="blue">
                  <SelectTrigger id="accentColor">
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="purple">Purple</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Language & Region</CardTitle>
              <CardDescription>Set your preferred language and regional settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="est">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">Eastern Time (EST)</SelectItem>
                    <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                    <SelectItem value="cst">Central Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>Manage your subscription and billing information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg">
                <h3 className="text-gray-900 dark:text-white mb-2">Professional Plan</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">$49/month • Billed monthly</p>
                <div className="flex gap-3">
                  <Button>Upgrade Plan</Button>
                  <Button variant="outline">Cancel Subscription</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Manage your payment methods.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center text-white">
                      VISA
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white">•••• •••• •••• 4242</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Expires 12/2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Remove</Button>
                </div>
              </div>
              <Button variant="outline">
                <CreditCard className="h-4 w-4 mr-2" />
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View your past invoices and payments.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: 'Oct 1, 2025', amount: '$49.00', status: 'Paid' },
                  { date: 'Sep 1, 2025', amount: '$49.00', status: 'Paid' },
                  { date: 'Aug 1, 2025', amount: '$49.00', status: 'Paid' },
                ].map((invoice, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <div>
                      <p className="text-gray-900 dark:text-white">{invoice.date}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Professional Plan</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-900 dark:text-white">{invoice.amount}</span>
                      <Button variant="ghost" size="sm">Download</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
