import { useEffect, useRef, useState } from "react";
import styles from "./TranslationLine.module.scss";

export const TranslationLine = () => {
  const [translations, setTranslations] = useState<string[]>([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ipsum turpis.",
  ]);
  const [isLocked, setIsLocked] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  const handleChangeStep = (value: string, index: number) => {
    translations[index] = value;
    setTranslations([...translations]);
  };

  const handleChangeValue = (value: string, index: number) => {
    translations[index] = value;
    setTranslations([...translations]);
  };

  return (
    <div className={styles.wrapper} ref={divRef}>
      <audio controls />
      <textarea
        className={styles.firstInput}
        value={translations[0]}
        onChange={(e) => handleChangeValue(e.target.value, 0)}
      />
      <button className={styles.button} onClick={() => handleChangeStep(translations[0], 1)}>
        Next step
      </button>
      <textarea
        className={styles.secondInput}
        value={translations[1]}
        onChange={(e) => handleChangeValue(e.target.value, 1)}
      />
      <button className={styles.button} onClick={() => handleChangeStep(translations[1], 2)}>
        Next step
      </button>
      <textarea
        className={styles.thirdInput}
        value={translations[2]}
        onChange={(e) => handleChangeValue(e.target.value, 2)}
      />
      <button className={styles.button} onClick={() => handleChangeStep(translations[2], 3)}>
        Next step
      </button>
      <textarea
        className={styles.fourthInput}
        value={translations[3]}
        onChange={(e) => handleChangeValue(e.target.value, 3)}
      />
      <button
        className={styles.button}
        onClick={() => {
          console.log(`Submit russian translate: ${translations[1]}`);
          console.log(`Submit english translate: ${translations[3]}`);
          setIsLocked(true);
        }}
      >
        Submit
      </button>
    </div>
  );
};
