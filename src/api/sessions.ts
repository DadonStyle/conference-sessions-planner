import { SessionType } from "../types";
import sessionsData from "../data/sessions.json";

export const getSessions = (): SessionType[] => {
  return sessionsData as SessionType[];
};

export const getSessionById = (id: string): SessionType | undefined => {
  return (sessionsData as SessionType[]).find((session) => session.id === id);
};
