import { useState } from "react";
import styles from "./ManagerPanel.module.scss";

import { UserSettings } from "./components/UserSettings/UserSettings";

export const ManagerPanel = () => {
  const [value, setValue] = useState<any>({});

  return (
    <div className={styles.wrapper}>
      <p>Панель менеджера</p>
      <div className={styles.tools}>
        {new Array(4).fill("_").map((_, i) => (
          <UserSettings
            value={value[i] ? value[i] : [0, 0]}
            setValue={setValue}
            index={i}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
