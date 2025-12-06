import styles from "./GeneralCard.module.css";

interface GeneralCardProps {
  children: React.ReactNode;
}

const GeneralCard = ({ children }: GeneralCardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export { GeneralCard };
