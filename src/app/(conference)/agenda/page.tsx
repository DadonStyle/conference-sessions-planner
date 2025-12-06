"use client";

import { getSessions } from "../../../api/sessions";
import { useAgenda } from "../../../context/AgendaProvider/AgendaProvider";
import { GeneralCard } from "../../../components/GeneralCard/GeneralCard";
import { hasTimeConflict } from "../../../utils";
import styles from "./page.module.css";

const AgendaPage = () => {
  const { agenda } = useAgenda();
  const allSessions = getSessions();
  const agendaSessions = allSessions.filter((session) => agenda.includes(session.id));

  if (agendaSessions.length === 0) {
    return <div className={styles.page}>No sessions in agenda</div>;
  }

  const findConflicts = (sessionId: string) => {
    const session = agendaSessions.find((s) => s.id === sessionId);
    if (!session) return [];

    return agendaSessions.filter(
      (s) => s.id !== sessionId && hasTimeConflict(session, s)
    );
  };

  return (
    <div className={styles.page}>
      {agendaSessions.map((session) => {
        const conflicts = findConflicts(session.id);
        const hasConflicts = conflicts.length > 0;

        return (
          <GeneralCard key={session.id}>
            <div>{session.title}</div>
            <div>{session.speaker}</div>
            <div>
              {session.time} - {session.endTime}
            </div>
            <div>{session.room}</div>
            {hasConflicts && (
              <div className={styles.warning}>
                Time conflict with: {conflicts.map((c) => c.title).join(", ")}
              </div>
            )}
          </GeneralCard>
        );
      })}
    </div>
  );
};

export default AgendaPage;
