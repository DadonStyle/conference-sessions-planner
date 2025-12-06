"use client";

import { useRouter } from "next/navigation";
import { SessionType } from "../../../../types";
import { useAgenda } from "../../../../context/AgendaProvider/AgendaProvider";
import { GeneralCard } from "../../../../components/GeneralCard/GeneralCard";
import { Button } from "../../../../components/Button/Button";
import { hasTimeConflict } from "../../../../utils";
import { getSessions } from "../../../../api/sessions";
import styles from "./page.module.css";

interface SessionDetailProps {
  session: SessionType;
}

const SessionDetail = ({ session }: SessionDetailProps) => {
  const router = useRouter();
  const { agenda, isInAgenda, addSession, removeSession } = useAgenda();
  const inAgenda = isInAgenda(session.id);

  const allSessions = getSessions();
  const agendaSessions = allSessions.filter((s) => agenda.includes(s.id));

  const hasConflict = !inAgenda && agendaSessions.some((s) => hasTimeConflict(session, s));

  return (
    <div className={styles.page}>
      <GeneralCard>
        <div>
          {session.title}
          {inAgenda && " - Already going"}
        </div>
        <div>{session.speaker}</div>
        <div>{session.track}</div>
        <div>
          {session.time} - {session.endTime}
        </div>
        <div>{session.room}</div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.descriptionLabel}>Description:</div>
          <div className={styles.descriptionBox}>{session.description}</div>
        </div>
      </GeneralCard>
      <div className={styles.buttons}>
        <Button
          onClick={() => (inAgenda ? removeSession(session.id) : addSession(session.id))}
          disabled={hasConflict}
        >
          {hasConflict ? "Time conflict" : inAgenda ? "Remove from Agenda" : "Add to Agenda"}
        </Button>
        <Button onClick={() => router.push("/")}>Back to Sessions</Button>
      </div>
    </div>
  );
};

export { SessionDetail };
