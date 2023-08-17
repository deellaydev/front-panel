import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import styles from "./UserSettings.module.scss";
import "react-range-slider-input/dist/style.css";
import RangeSlider from "react-range-slider-input";
import { getColor } from "../../../../utils/getColor";

interface UserSettingsProps {
  color?: string;
  value: [number, number];
  setValue: Dispatch<SetStateAction<[number, number]>>;
  index: number;
}

export const UserSettings = ({ color, value, setValue, index }: UserSettingsProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.borderColor = getColor();
    }
  }, [inputRef.current, color]);

  return (
    <div className={styles.wrapper}>
      <input className={styles.toolsInput} ref={inputRef} />
      <RangeSlider
        className={styles.range}
        defaultValue={value}
        step={1}
        value={value}
        max={20}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
        onInput={(e: [number, number]) => setValue((prev) => ({ ...prev, index: [0, e[1]] }))}
      />
      <input
        className={styles.numberInput}
        type="number"
        value={value[1]}
        onChange={(e) => setValue((prev) => ({ ...prev, index: [0, +e.target.value] }))}
        min={0}
        max={20}
      />
    </div>
  );
};
