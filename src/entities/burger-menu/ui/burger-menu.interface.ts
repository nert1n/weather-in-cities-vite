interface IBurgerMenu {
	isActive: boolean;
	setIsActive: (value: boolean) => void;
	className?: string;
}

export default IBurgerMenu;
