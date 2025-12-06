"use client";

import Link from "next/link";
import { SessionType, TrackType, TimeOfDayType } from "../../types";
import { TRACKS, TIMES_OF_DAY } from "../../constants";
import { useSessionFilters } from "../../hooks/useSessionFilters";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { GeneralCard } from "../../components/GeneralCard/GeneralCard";
import styles from "./page.module.css";

interface SessionsListProps {
  sessions: SessionType[];
}

const SessionsList = ({ sessions }: SessionsListProps) => {
  const {
    filteredSessions,
    track,
    setTrack,
    timeOfDay,
    setTimeOfDay,
    searchQuery,
    setSearchQuery,
  } = useSessionFilters(sessions);

  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <div className={styles.filterGroup}>
          <label>Track:</label>
          <select value={track} onChange={(e) => setTrack(e.target.value as TrackType)}>
            {TRACKS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Time:</label>
          <select
            value={timeOfDay}
            onChange={(e) => setTimeOfDay(e.target.value as TimeOfDayType)}
          >
            {TIMES_OF_DAY.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.sessions}>
        {filteredSessions.map((session) => (
          <Link key={session.id} href={`/sessions/${session.id}`}>
            <GeneralCard>
              <div>{session.title}</div>
              <div>{session.speaker}</div>
              <div>
                {session.time} - {session.endTime}
              </div>
              <div>{session.room}</div>
            </GeneralCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { SessionsList };
