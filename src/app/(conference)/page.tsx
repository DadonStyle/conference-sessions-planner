import { getSessions } from "../../api/sessions";
import { SessionsList } from "./SessionsList";

const HomePage = () => {
  const sessions = getSessions();

  return <SessionsList sessions={sessions} />;
};

export default HomePage;
