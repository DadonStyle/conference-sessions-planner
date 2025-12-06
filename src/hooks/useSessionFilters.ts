import { useState, useMemo } from "react";
import { SessionType, TrackType, TimeOfDayType } from "../types";
import { useDebounce } from "./useDebounce";

export function useSessionFilters(sessions: SessionType[]) {
  const [track, setTrack] = useState<TrackType>("All");
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDayType>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 300);

  const filteredSessions = useMemo(() => {
    return sessions.filter((session) => {
      const matchesTrack = track === "All" || session.track === track;
      const matchesTimeOfDay = timeOfDay === "All" || session.timeOfDay === timeOfDay;
      const matchesSearch =
        debouncedSearch === "" ||
        session.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        session.speaker.toLowerCase().includes(debouncedSearch.toLowerCase());

      return matchesTrack && matchesTimeOfDay && matchesSearch;
    });
  }, [sessions, track, timeOfDay, debouncedSearch]);

  return {
    filteredSessions,
    track,
    setTrack,
    timeOfDay,
    setTimeOfDay,
    searchQuery,
    setSearchQuery,
  };
}
