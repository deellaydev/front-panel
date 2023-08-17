import { TranslationLine } from "./components/TranslationLine/TranslationLine";
import styles from "./StaffPanel.module.scss";

const StaffPanel = () => {
  return (
    <div className={styles.wrapper}>
      <TranslationLine />
      <TranslationLine />
      <TranslationLine />
      <TranslationLine />
    </div>
  );
};

export default StaffPanel;
