"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

export function Holendar() {
  const [view, setView] = useState("week")
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Meeting with Client",
      start: new Date("2023-08-07T10:00:00"),
      end: new Date("2023-08-07T11:00:00"),
      allDay: false,
    },
    {
      id: 2,
      title: "Dentist Appointment",
      start: new Date("2023-08-08T14:30:00"),
      end: new Date("2023-08-08T15:00:00"),
      allDay: false,
    },
    {
      id: 3,
      title: "Vacation",
      start: new Date("2023-08-15"),
      end: new Date("2023-08-20"),
      allDay: true,
    },
  ])
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder-user.jpg",
  })
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
  })
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-6 h-6" />
          <h1 className="text-lg font-bold">Homodoro</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setView("day")}>
            <CalendarDaysIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setView("week")}>
            <CalendarDaysIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setView("month")}>
            <CalendarIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setView("settings")}>
            <CogIcon className="w-5 h-5" />
          </Button>
        </div>
      </header>
      {view === "day" && (
        <div className="flex-1 p-6">
          <Calendar
            mode="day"
            events={events}
            onEventClick={(event) => console.log(event)}
            onEventCreate={(event) => setEvents([...events, event])}
            onEventUpdate={(event) => setEvents(events.map((e) => (e.id === event.id ? event : e)))}
            onEventDelete={(event) => setEvents(events.filter((e) => e.id !== event.id))}
          />
        </div>
      )}
      {view === "week" && (
        <div className="flex-1 p-6">
          <Calendar
            mode="week"
            events={events}
            onEventClick={(event) => console.log(event)}
            onEventCreate={(event) => setEvents([...events, event])}
            onEventUpdate={(event) => setEvents(events.map((e) => (e.id === event.id ? event : e)))}
            onEventDelete={(event) => setEvents(events.filter((e) => e.id !== event.id))}
          />
        </div>
      )}
      {view === "month" && (
        <div className="flex-1 p-6">
          <Calendar
            mode="month"
            events={events}
            onEventClick={(event) => console.log(event)}
            onEventCreate={(event) => setEvents([...events, event])}
            onEventUpdate={(event) => setEvents(events.map((e) => (e.id === event.id ? event : e)))}
            onEventDelete={(event) => setEvents(events.filter((e) => e.id !== event.id))}
          />
        </div>
      )}
      {view === "settings" && (
        <div className="flex-1 p-4">
          <div className="max-w-md mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="w-16 h-16 border">
                <AvatarImage src="/placeholder-user.jpg" alt={profile.name} />
                <AvatarFallback>{profile.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg font-bold">{profile.name}</h2>
                <p className="text-muted-foreground">{profile.email}</p>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="avatar" className="block text-sm font-medium mb-1">
                  Avatar
                </label>
                <Input
                  id="avatar"
                  type="file"
                  onChange={(e) => setProfile({ ...profile, avatar: e.target.files[0] })}
                />
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-bold mb-2">Notifications</h3>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={notifications.email}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          email: checked,
                        })
                      }
                    />
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={notifications.push}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          push: checked,
                        })
                      }
                    />
                    <label htmlFor="push" className="text-sm font-medium">
                      Push Notifications
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={notifications.sms}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          sms: checked,
                        })
                      }
                    />
                    <label htmlFor="sms" className="text-sm font-medium">
                      SMS
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CogIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}
