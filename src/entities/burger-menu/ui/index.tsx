import styles from "./BurgerMenu.module.scss";
import IBurgerMenu from "./burger-menu.interface.ts";

export const BurgerMenu = ({
  className = "",
  isActive,
  setIsActive,
}: IBurgerMenu) => {
  return (
    <button
      className={`${styles.burger} ${className} ${isActive ? styles.active : ""}`}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <span></span>
    </button>
  );
};
