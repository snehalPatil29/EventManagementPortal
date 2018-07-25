export {
    loginUser,
    logoutUser
} from './auth';

export {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
} from './event';

export {
    getRooms,
    createRoom,
    storeCurrentRoom,
    editRoom,
    deleteRoom
} from './room';

export {
    createAttendee,
    getAttendees,
    getAttendeeData,
    editAttendeeData,
    storeAttendeeData,
    deleteAttendee,
    getAttendeesForEvent
} from './registration';

export {
   getSessionsOfEvent,
   createForm,
   getForms,
   storeCurrentForm,
   editForm,
   deleteForm
} from './questionForms';

export {
    getProfiles,
    createProfile,
    deleteProfile,
    updateProfile
} from './userProfile';

export {
    getAttendanceList
} from './attendance';

export {
    getAboutUsInfo,
    createAboutUsInfo,
    editAboutUsInfo,
    getAboutEternusInfo,
    createAboutEternusInfo,
    editAboutEternusInfo,
    getHelpDeskForEvent,
    createHelpDeskInfo,
    editHelpDeskInfo ,
    getLocationForEvent,
    getEventLocation,
    createEventLocation,
    editEventLocation
} from './staticPages';

export {
    createSession,
    getSessions
} from './session';
   
