type IWind = {
  height: number;
  width: number;
  color?: string;
  className?: string;
};

const DEFAULT_COLOR = "black";
const DEFAULT_HEIGHT = 23;
const DEFAULT_WIDTH = 19;

const Wind = ({
  className,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  color = DEFAULT_COLOR,
}: IWind) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 23 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7028 10.737C15.6297 10.737 15.5579 10.7355 15.4857 10.7319L0.479243 10.737C0.214807 10.737 0.00104167 10.5093 0.00104167 10.2275C0.00104167 9.94624 0.214807 9.71801 0.479243 9.71801L15.5068 9.71341C15.5857 9.7165 15.644 9.71801 15.7033 9.71801C17.9547 9.71801 19.7861 7.76664 19.7861 5.36799C19.7861 2.96982 17.9546 1.01845 15.7033 1.01845C13.4525 1.01845 11.621 2.96982 11.621 5.36799C11.621 5.95796 11.73 6.52962 11.9438 7.06663C12.0476 7.32594 11.9337 7.62505 11.6913 7.73509C11.448 7.84615 11.1668 7.72438 11.0639 7.4661C10.7991 6.80225 10.6647 6.09662 10.6647 5.36855C10.6647 2.40839 12.9251 0 15.7034 0C18.4817 0 20.7426 2.40887 20.7426 5.36855C20.742 8.3287 18.4811 10.737 15.7028 10.737ZM23 15.3067C23 13.2698 21.4449 11.6129 19.5331 11.6129C19.4829 11.6129 19.4332 11.6139 19.404 11.6159L0.478722 11.6129C0.214733 11.6129 0.000520835 11.8406 0.000520835 12.1224C0.000520835 12.4036 0.214733 12.6319 0.478722 12.6319L19.4245 12.6344L19.5331 12.6319C20.9175 12.6319 22.0436 13.8317 22.0436 15.3067C22.0436 16.7817 20.9175 17.9815 19.5331 17.9815C18.1487 17.9815 17.0226 16.7817 17.0226 15.3067C17.0226 14.9435 17.0896 14.5924 17.221 14.2622C17.3248 14.0034 17.211 13.7038 16.9686 13.5938C16.7256 13.4827 16.445 13.6035 16.3412 13.8628C16.1585 14.3192 16.0663 14.8054 16.0663 15.3061C16.0663 17.3431 17.6213 19 19.5332 19C21.4449 19 23 17.3436 23 15.3067ZM0.478722 8.74696L6.08358 8.7449L6.1931 8.74696C7.7219 8.74696 8.9661 7.42123 8.9661 5.79244C8.9661 4.16364 7.72183 2.83791 6.1931 2.83791C4.66385 2.83791 3.41958 4.16364 3.41958 5.79244C3.41958 6.19286 3.49324 6.58162 3.63952 6.94748C3.74279 7.20632 4.02449 7.32555 4.2669 7.21646C4.50984 7.10587 4.62315 6.80685 4.51936 6.54801C4.4242 6.30907 4.37591 6.05531 4.37591 5.79244C4.37591 4.72507 5.19072 3.85684 6.19303 3.85684C7.19481 3.85684 8.0097 4.72499 8.0097 5.79244C8.0097 6.85988 7.19489 7.72803 6.19303 7.72803L6.09407 7.72597L0.478201 7.72803C0.214212 7.72803 0 7.95626 0 8.23753C0.000520835 8.5192 0.214807 8.74696 0.478722 8.74696ZM7.73142 14.1817C7.73142 13.9 7.51766 13.6722 7.25322 13.6722H0.478722C0.214733 13.6722 0.000520835 13.9 0.000520835 14.1817C0.000520835 14.4634 0.214733 14.6912 0.478722 14.6912H7.25322C7.51766 14.6912 7.73142 14.4634 7.73142 14.1817Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Wind;
