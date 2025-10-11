import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar as CalendarComponent } from './ui/calendar';
import { ChevronLeft, ChevronRight, Plus, Clock, MapPin, Users, Video } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Team Standup',
    date: new Date(2025, 9, 11),
    time: '9:00 AM - 9:30 AM',
    type: 'Meeting',
    location: 'Conference Room A',
    attendees: 8,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Product Review',
    date: new Date(2025, 9, 11),
    time: '2:00 PM - 3:30 PM',
    type: 'Review',
    location: 'Virtual',
    attendees: 12,
    color: 'bg-purple-500',
  },
  {
    id: 3,
    title: 'Design Workshop',
    date: new Date(2025, 9, 12),
    time: '10:00 AM - 12:00 PM',
    type: 'Workshop',
    location: 'Design Studio',
    attendees: 6,
    color: 'bg-pink-500',
  },
  {
    id: 4,
    title: 'Client Presentation',
    date: new Date(2025, 9, 13),
    time: '3:00 PM - 4:00 PM',
    type: 'Presentation',
    location: 'Virtual',
    attendees: 15,
    color: 'bg-orange-500',
  },
  {
    id: 5,
    title: 'Sprint Planning',
    date: new Date(2025, 9, 14),
    time: '9:00 AM - 11:00 AM',
    type: 'Planning',
    location: 'Conference Room B',
    attendees: 10,
    color: 'bg-green-500',
  },
  {
    id: 6,
    title: 'All Hands Meeting',
    date: new Date(2025, 9, 15),
    time: '1:00 PM - 2:00 PM',
    type: 'Meeting',
    location: 'Main Hall',
    attendees: 45,
    color: 'bg-blue-500',
  },
];

const upcomingEvents = [
  {
    id: 7,
    title: 'Code Review Session',
    date: '2025-10-16',
    time: '11:00 AM',
    type: 'Review',
    participants: ['Mike Chen', 'David Park', 'Chris Lee'],
  },
  {
    id: 8,
    title: 'Marketing Strategy',
    date: '2025-10-17',
    time: '2:00 PM',
    type: 'Strategy',
    participants: ['Emily Davis', 'Lisa Anderson'],
  },
  {
    id: 9,
    title: 'User Testing',
    date: '2025-10-18',
    time: '10:00 AM',
    type: 'Research',
    participants: ['Anna Martinez', 'Sarah Wilson'],
  },
];

export function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 9, 11));

  const getEventsForDate = (selectedDate: Date | undefined) => {
    if (!selectedDate) return [];
    return events.filter(
      event => 
        event.date.toDateString() === selectedDate.toDateString()
    );
  };

  const todaysEvents = getEventsForDate(date);

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Calendar</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your schedule and upcoming events.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Event
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>October 2025</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline">Today</Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            
            {/* Events for Selected Date */}
            <div className="mt-6 space-y-4">
              <h3 className="text-gray-900 dark:text-white">
                Events for {date?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </h3>
              {todaysEvents.length > 0 ? (
                <div className="space-y-3">
                  {todaysEvents.map((event) => (
                    <Card key={event.id} className="border-l-4" style={{ borderLeftColor: event.color.replace('bg-', '#') }}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="text-gray-900 dark:text-white">{event.title}</h4>
                              <Badge variant="secondary">{event.type}</Badge>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <Clock className="h-4 w-4" />
                                <span className="text-xs">{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                {event.location === 'Virtual' ? (
                                  <Video className="h-4 w-4" />
                                ) : (
                                  <MapPin className="h-4 w-4" />
                                )}
                                <span className="text-xs">{event.location}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <Users className="h-4 w-4" />
                                <span className="text-xs">{event.attendees} attendees</span>
                              </div>
                            </div>
                          </div>
                          <div className={`w-3 h-3 rounded-full ${event.color}`} />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-500 dark:text-gray-400">No events scheduled for this day</p>
                    <Button variant="outline" className="mt-4">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Event
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-gray-900 dark:text-white">{event.title}</h4>
                    <Badge variant="secondary" className="text-xs">{event.type}</Badge>
                  </div>
                  <div className="space-y-1 mb-3">
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {event.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3 text-gray-400" />
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      {event.participants.join(', ')}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">This Week</span>
                <span className="text-gray-900 dark:text-white">12 events</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">This Month</span>
                <span className="text-gray-900 dark:text-white">47 events</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Meetings</span>
                <span className="text-gray-900 dark:text-white">28</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Workshops</span>
                <span className="text-gray-900 dark:text-white">8</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {['Meeting', 'Workshop', 'Review', 'Planning', 'Presentation'].map((type, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${['bg-blue-500', 'bg-pink-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500'][idx]}`} />
                  <span className="text-gray-700 dark:text-gray-300">{type}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
