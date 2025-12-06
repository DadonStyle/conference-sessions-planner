import { AgendaProvider } from "../../context/AgendaProvider/AgendaProvider";
import { HeaderNav } from "../../components/HeaderNav/HeaderNav";
import styles from "./layout.module.css";

interface ConferenceLayoutProps {
  children: React.ReactNode;
}

const ConferenceLayout = ({ children }: ConferenceLayoutProps) => {
  return (
    <AgendaProvider>
      <div className={styles.layout}>
        <HeaderNav />
        {children}
      </div>
    </AgendaProvider>
  );
};

export default ConferenceLayout;
