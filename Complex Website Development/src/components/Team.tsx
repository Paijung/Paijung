import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Plus, 
  Search, 
  Mail, 
  Phone, 
  MapPin, 
  MoreVertical,
  Star,
  Clock,
  CheckCircle,
  Award,
  TrendingUp
} from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Wilson',
    role: 'Senior Product Designer',
    department: 'Design',
    email: 'sarah.wilson@company.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    status: 'Active',
    joinDate: '2023-01-15',
    projects: 8,
    tasksCompleted: 142,
    performance: 95,
    skills: ['UI/UX', 'Figma', 'Prototyping', 'User Research'],
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Lead Developer',
    department: 'Engineering',
    email: 'mike.chen@company.com',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, USA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike',
    status: 'Active',
    joinDate: '2022-08-20',
    projects: 12,
    tasksCompleted: 256,
    performance: 92,
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Marketing Manager',
    department: 'Marketing',
    email: 'emily.davis@company.com',
    phone: '+1 (555) 345-6789',
    location: 'Chicago, USA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily',
    status: 'Active',
    joinDate: '2023-03-10',
    projects: 6,
    tasksCompleted: 98,
    performance: 88,
    skills: ['SEO', 'Content Marketing', 'Analytics', 'Social Media'],
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Full Stack Developer',
    department: 'Engineering',
    email: 'david.park@company.com',
    phone: '+1 (555) 456-7890',
    location: 'Austin, USA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
    status: 'Active',
    joinDate: '2022-11-05',
    projects: 10,
    tasksCompleted: 187,
    performance: 90,
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Product Manager',
    department: 'Product',
    email: 'lisa.anderson@company.com',
    phone: '+1 (555) 567-8901',
    location: 'Seattle, USA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa',
    status: 'On Leave',
    joinDate: '2021-06-12',
    projects: 15,
    tasksCompleted: 312,
    performance: 94,
    skills: ['Product Strategy', 'Roadmapping', 'Agile', 'Data Analysis'],
  },
  {
    id: 6,
    name: 'James Taylor',
    role: 'DevOps Engineer',
    department: 'Engineering',
    email: 'james.taylor@company.com',
    phone: '+1 (555) 678-9012',
    location: 'Boston, USA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james',
    status: 'Active',
    joinDate: '2023-02-18',
    projects: 7,
    tasksCompleted: 124,
    performance: 91,
    skills: ['Kubernetes', 'CI/CD', 'Terraform', 'Monitoring'],
  },
  {
    id: 7,
    name: 'Anna Martinez',
    role: 'UX Researcher',
    department: 'Design',
    email: 'anna.martinez@company.com',
    phone: '+1 (555) 789-0123',
    location: 'Los Angeles, USA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=anna',
    status: 'Active',
    joinDate: '2022-09-25',
    projects: 9,
    tasksCompleted: 165,
    performance: 89,
    skills: ['User Testing', 'Analytics', 'Surveys', 'Wireframing'],
  },
  {
    id: 8,
    name: 'Chris Lee',
    role: 'Backend Developer',
    department: 'Engineering',
    email: 'chris.lee@company.com',
    phone: '+1 (555) 890-1234',
    location: 'Denver, USA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chris',
    status: 'Active',
    joinDate: '2023-04-08',
    projects: 5,
    tasksCompleted: 89,
    performance: 87,
    skills: ['Java', 'Spring Boot', 'MySQL', 'Redis'],
  },
];

const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Product'];

export function Team() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Team Members</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your team and view their performance metrics.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Member
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Total Members</p>
                <p className="text-gray-900 dark:text-white">{teamMembers.length}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Active Projects</p>
                <p className="text-gray-900 dark:text-white">{teamMembers.reduce((acc, m) => acc + m.projects, 0)}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Tasks Completed</p>
                <p className="text-gray-900 dark:text-white">{teamMembers.reduce((acc, m) => acc + m.tasksCompleted, 0)}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <Star className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Avg Performance</p>
                <p className="text-gray-900 dark:text-white">
                  {Math.round(teamMembers.reduce((acc, m) => acc + m.performance, 0) / teamMembers.length)}%
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search team members..." 
            className="pl-10"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="All">
        <TabsList>
          {departments.map((dept) => (
            <TabsTrigger key={dept} value={dept}>
              {dept}
              {dept !== 'All' && ` (${teamMembers.filter(m => m.department === dept).length})`}
            </TabsTrigger>
          ))}
        </TabsList>

        {departments.map((dept) => {
          const filteredMembers = dept === 'All' 
            ? teamMembers 
            : teamMembers.filter(m => m.department === dept);

          return (
            <TabsContent key={dept} value={dept} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map((member) => (
                  <Card key={member.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={member.avatar} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-gray-900 dark:text-white mb-1">{member.name}</CardTitle>
                            <CardDescription>{member.role}</CardDescription>
                            <Badge 
                              className={`mt-2 ${
                                member.status === 'Active' 
                                  ? 'bg-green-100 text-green-700 hover:bg-green-100' 
                                  : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'
                              }`}
                            >
                              {member.status}
                            </Badge>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Send Message</DropdownMenuItem>
                            <DropdownMenuItem>Assign Task</DropdownMenuItem>
                            <DropdownMenuItem>Edit Details</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Mail className="h-4 w-4" />
                          <span className="text-xs truncate">{member.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Phone className="h-4 w-4" />
                          <span className="text-xs">{member.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <MapPin className="h-4 w-4" />
                          <span className="text-xs">{member.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Clock className="h-4 w-4" />
                          <span className="text-xs">Joined {new Date(member.joinDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-gray-900 dark:text-white">{member.projects}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">Projects</p>
                          </div>
                          <div>
                            <p className="text-gray-900 dark:text-white">{member.tasksCompleted}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">Tasks</p>
                          </div>
                          <div>
                            <p className="text-gray-900 dark:text-white">{member.performance}%</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">Performance</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-400 mb-2 text-xs">Performance</p>
                        <Progress value={member.performance} className="h-2" />
                      </div>

                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-400 mb-2 text-xs">Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button variant="outline" className="flex-1">
                          <Mail className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                        <Button className="flex-1">View Profile</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
