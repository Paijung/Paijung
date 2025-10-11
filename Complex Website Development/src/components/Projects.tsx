import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Calendar, 
  Clock,
  Users,
  Paperclip,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Circle
} from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    name: 'E-Commerce Platform Redesign',
    description: 'Complete overhaul of the online shopping experience',
    status: 'In Progress',
    priority: 'High',
    progress: 65,
    dueDate: '2025-11-15',
    team: [
      { name: 'Sarah Wilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah' },
      { name: 'Mike Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike' },
      { name: 'Emily Davis', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily' },
    ],
    tasks: { total: 24, completed: 15 },
    comments: 38,
    attachments: 12,
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjAxNTY1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'iOS and Android native applications',
    status: 'In Progress',
    priority: 'High',
    progress: 45,
    dueDate: '2025-12-01',
    team: [
      { name: 'David Park', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david' },
      { name: 'Lisa Anderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa' },
    ],
    tasks: { total: 32, completed: 14 },
    comments: 52,
    attachments: 18,
    image: 'https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MDE0MTI4NXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    name: 'API Integration Project',
    description: 'Integrating third-party services and APIs',
    status: 'In Review',
    priority: 'Medium',
    progress: 85,
    dueDate: '2025-10-20',
    team: [
      { name: 'James Taylor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james' },
      { name: 'Anna Martinez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=anna' },
      { name: 'Chris Lee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chris' },
    ],
    tasks: { total: 18, completed: 16 },
    comments: 25,
    attachments: 8,
    image: 'https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwMTA3OTg2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    name: 'Marketing Campaign Q4',
    description: 'End of year marketing push across all channels',
    status: 'Planning',
    priority: 'Medium',
    progress: 20,
    dueDate: '2025-10-30',
    team: [
      { name: 'Rachel Green', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rachel' },
      { name: 'Tom Harris', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tom' },
    ],
    tasks: { total: 28, completed: 6 },
    comments: 15,
    attachments: 22,
    image: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjAxNjYyODV8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    name: 'Security Audit',
    description: 'Comprehensive security review and improvements',
    status: 'Completed',
    priority: 'High',
    progress: 100,
    dueDate: '2025-10-05',
    team: [
      { name: 'Kevin Brown', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kevin' },
    ],
    tasks: { total: 15, completed: 15 },
    comments: 42,
    attachments: 6,
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjAxNTY1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 6,
    name: 'Database Migration',
    description: 'Moving to cloud infrastructure',
    status: 'On Hold',
    priority: 'Low',
    progress: 35,
    dueDate: '2025-11-30',
    team: [
      { name: 'Nicole White', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nicole' },
      { name: 'Paul Garcia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=paul' },
    ],
    tasks: { total: 20, completed: 7 },
    comments: 18,
    attachments: 10,
    image: 'https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MDE0MTI4NXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
];

const getStatusBadge = (status: string) => {
  const variants: Record<string, { variant: string; className: string; icon: JSX.Element }> = {
    'In Progress': { 
      variant: 'secondary', 
      className: 'bg-blue-100 text-blue-700 hover:bg-blue-100',
      icon: <Circle className="h-3 w-3 mr-1 fill-blue-700" />
    },
    'In Review': { 
      variant: 'secondary', 
      className: 'bg-purple-100 text-purple-700 hover:bg-purple-100',
      icon: <AlertCircle className="h-3 w-3 mr-1" />
    },
    'Planning': { 
      variant: 'secondary', 
      className: 'bg-orange-100 text-orange-700 hover:bg-orange-100',
      icon: <Circle className="h-3 w-3 mr-1" />
    },
    'Completed': { 
      variant: 'secondary', 
      className: 'bg-green-100 text-green-700 hover:bg-green-100',
      icon: <CheckCircle2 className="h-3 w-3 mr-1" />
    },
    'On Hold': { 
      variant: 'secondary', 
      className: 'bg-gray-100 text-gray-700 hover:bg-gray-100',
      icon: <Circle className="h-3 w-3 mr-1" />
    },
  };

  const config = variants[status] || variants['Planning'];
  return (
    <Badge className={config.className}>
      {config.icon}
      {status}
    </Badge>
  );
};

const getPriorityBadge = (priority: string) => {
  const colors: Record<string, string> = {
    'High': 'bg-red-100 text-red-700 hover:bg-red-100',
    'Medium': 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100',
    'Low': 'bg-gray-100 text-gray-700 hover:bg-gray-100',
  };

  return (
    <Badge className={colors[priority] || colors['Medium']}>
      {priority}
    </Badge>
  );
};

export function Projects() {
  const filterProjects = (status: string) => {
    if (status === 'all') return projects;
    return projects.filter(p => p.status === status);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Projects</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage and track all your projects in one place.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search projects..." 
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Projects ({projects.length})</TabsTrigger>
          <TabsTrigger value="In Progress">In Progress ({filterProjects('In Progress').length})</TabsTrigger>
          <TabsTrigger value="In Review">In Review ({filterProjects('In Review').length})</TabsTrigger>
          <TabsTrigger value="Completed">Completed ({filterProjects('Completed').length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                    <ImageWithFallback 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="secondary" size="icon" className="h-8 w-8 bg-white hover:bg-gray-100">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit Project</DropdownMenuItem>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-gray-900 dark:text-white">{project.name}</CardTitle>
                  </div>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    {getStatusBadge(project.status)}
                    {getPriorityBadge(project.priority)}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Progress</span>
                      <span className="text-gray-900 dark:text-white">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{project.tasks.completed}/{project.tasks.total}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{project.comments}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Paperclip className="h-4 w-4" />
                      <span>{project.attachments}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex -space-x-2">
                      {project.team.map((member, idx) => (
                        <Avatar key={idx} className="h-8 w-8 border-2 border-white dark:border-gray-800">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      ))}
                      {project.team.length > 3 && (
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                          <span className="text-xs text-gray-600 dark:text-gray-300">+{project.team.length - 3}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span className="text-xs">{new Date(project.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {['In Progress', 'In Review', 'Completed'].map((status) => (
          <TabsContent key={status} value={status} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterProjects(status).map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                      <ImageWithFallback 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="h-8 w-8 bg-white hover:bg-gray-100">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit Project</DropdownMenuItem>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-gray-900 dark:text-white">{project.name}</CardTitle>
                    </div>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      {getStatusBadge(project.status)}
                      {getPriorityBadge(project.priority)}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 dark:text-gray-400">Progress</span>
                        <span className="text-gray-900 dark:text-white">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{project.tasks.completed}/{project.tasks.total}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{project.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Paperclip className="h-4 w-4" />
                        <span>{project.attachments}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex -space-x-2">
                        {project.team.map((member, idx) => (
                          <Avatar key={idx} className="h-8 w-8 border-2 border-white dark:border-gray-800">
                            <AvatarImage src={member.avatar} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span className="text-xs">{new Date(project.dueDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
