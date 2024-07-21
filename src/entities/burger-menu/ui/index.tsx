import IBurgerMenu from "./burger-menu.interface.ts";
import styles from "./BurgerMenu.module.scss";

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
