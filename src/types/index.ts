export interface SessionType {
  id: string;
  title: string;
  speaker: string;
  track: "Frontend" | "Backend" | "DevOps" | "AI";
  time: string;
  endTime: string;
  room: string;
  description: string;
  timeOfDay: "Morning" | "Afternoon" | "Evening";
}

export interface AgendaContextType {
  agenda: string[];
  addSession: (id: string) => void;
  removeSession: (id: string) => void;
  isInAgenda: (id: string) => boolean;
}

export type TrackType = "All" | "Frontend" | "Backend" | "DevOps" | "AI";
export type TimeOfDayType = "All" | "Morning" | "Afternoon" | "Evening";
