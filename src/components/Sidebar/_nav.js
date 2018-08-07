export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer"
    },
    {
      name: "Events",
      url: "/events",
      icon: "icon-calendar"
    },
    {
      name: "Rooms",
      url: "/roomsList",
      icon: "icon-home"
    },
    {
      name: "Sessions",
      url: "/sessions",
      icon: "icon-calendar"
    },
    {
      name: "Attendees",
      url: "/registrationList",
      icon: "icon-user"
    },
    {
      name: "Speakers",
      url: "/speakers",
      icon: "icon-microphone"
    },
    {
      name: "Attendance",
      url: "/attendance",
      icon: "icon-user"
    },

    {
      name: "Sponsors",
      url: "/sponsors",
      icon: "icon-user"
    },
    {
      name: "Dynamic Forms",
      url: "/dynamicForms",
      icon: "icon-question"
    },
    {
      name: "Reports ",
      url: "/reports/",
      icon: "icon-pie",
      children: [
        {
          name: "Event Reports",
          url: "/reports/eventReports",
          icon: "icon-puzzle"
        },
        {
          name: "Session Reports",
          url: "/reports/sessionReports",
          icon: "icon-note"
        },
        {
          name: "Attendee Reports",
          url: "/reports/attendeeReports",
          icon: "icon-note"
        }
      ]
    },
    {
      name: "Static Pages",
      url: "/staticPages/",
      icon: "icon-puzzle",
      children: [
        {
          name: "About Us",
          url: "/staticPages/aboutUs",
          icon: "icon-puzzle"
        },
        {
          name: "About Eternus",
          url: "/staticPages/aboutEternus",
          icon: "icon-note"
        },
        {
          name: "Help Desk",
          url: "/staticPages/helpDesk",
          icon: "icon-note"
        },
        {
          name: "Event Location",
          url: "/staticPages/eventLocation",
          icon: "icon-note"
        }
      ]
    },
    {
      name: "Logout",
      url: "/logout",
      icon: "icon-question"
    }
  ]
};
