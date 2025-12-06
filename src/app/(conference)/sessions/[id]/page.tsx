import { use } from "react";
import { getSessionById } from "../../../../api/sessions";
import { SessionDetail } from "./SessionDetail";
import styles from "./page.module.css";

interface SessionDetailPageProps {
  params: Promise<{ id: string }>;
}

const SessionDetailPage = ({ params }: SessionDetailPageProps) => {
  const { id } = use(params);
  const session = getSessionById(id);

  if (!session) {
    return <div className={styles.page}>Not found</div>;
  }

  return <SessionDetail session={session} />;
};

export default SessionDetailPage;
