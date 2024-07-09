type ISeaLevel = {
  height?: number;
  width?: number;
  color?: string;
  className?: string;
};

const DEFAULT_COLOR = "black";
const DEFAULT_HEIGHT = 32;
const DEFAULT_WIDTH = 40;

const SeaLevel = ({
  className,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  color = DEFAULT_COLOR,
}: ISeaLevel) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.5719 31.6261C25.0259 31.6261 22.1872 30.8191 19.1548 28.647C8.84689 21.2648 1.9269 28.2337 1.63801 28.534C1.27229 28.9131 0.669756 28.9232 0.291344 28.5581C-0.0877033 28.1931 -0.097862 27.5905 0.266582 27.2115C0.349121 27.1264 8.63609 18.7702 20.2634 27.0985C30.4653 34.4045 37.9599 24.2229 38.2741 23.7861C38.5821 23.3588 39.1776 23.2623 39.603 23.5683C40.0303 23.875 40.1275 24.4705 39.8208 24.8972C39.7554 24.988 34.8735 31.6248 27.5719 31.6261Z"
          fill={color}
        />
        <path
          d="M27.5719 25.629C25.0259 25.629 22.1872 24.8227 19.1548 22.6506C8.84689 15.2684 1.9269 22.2373 1.63801 22.5376C1.27229 22.9167 0.669756 22.9268 0.291344 22.5617C-0.0877033 22.1967 -0.097862 21.5935 0.266582 21.2151C0.349121 21.1294 8.63609 12.7738 20.2634 21.1021C30.4653 28.4087 37.9599 18.2265 38.2741 17.7897C38.5821 17.3617 39.1776 17.2659 39.603 17.5719C40.0303 17.8786 40.1275 18.4735 39.8208 18.9008C39.7554 18.9916 34.8735 25.6284 27.5719 25.629Z"
          fill={color}
        />
        <path
          d="M33.5391 18.0462C33.2019 18.0462 32.8743 17.8665 32.7022 17.5491C32.4502 17.0868 32.6216 16.5084 33.0832 16.257C36.3029 14.5059 38.2546 11.8195 38.2737 11.7929C38.5816 11.3649 39.1765 11.2684 39.6032 11.5751C40.0305 11.8818 40.1276 12.4767 39.8216 12.904C39.7314 13.0284 37.5918 15.9726 33.9937 17.93C33.8489 18.0087 33.6927 18.0462 33.5391 18.0462Z"
          fill={color}
        />
        <path
          d="M20.548 17.4006C20.3727 17.4006 20.195 17.3524 20.0362 17.2508C19.7442 17.0647 19.4502 16.866 19.1543 16.6539C8.89721 9.30665 1.92706 16.2438 1.63626 16.5428C1.26865 16.9193 0.666742 16.9276 0.290234 16.5625C-0.086908 16.1968 -0.0970667 15.5962 0.266742 15.219C0.349282 15.1333 8.63626 6.77713 20.2635 15.1054C20.5315 15.2971 20.7975 15.4768 21.061 15.6451C21.5042 15.9276 21.6343 16.5168 21.3518 16.96C21.1702 17.2451 20.8623 17.4006 20.548 17.4006Z"
          fill={color}
        />
        <path
          d="M27.3235 18.2926C25.2009 18.2926 23.3527 17.1657 22.7241 15.4882C22.1793 14.0412 21.9768 12.8876 21.9768 11.2336C21.9768 8.26663 24.4784 1.41458 24.7641 0.643149C24.7641 0.642514 24.7647 0.64061 24.766 0.63807C24.766 0.6368 24.7666 0.636165 24.7673 0.634895C24.7692 0.628546 24.7717 0.620927 24.7717 0.620292C24.7774 0.605054 24.7838 0.590451 24.7882 0.580927C24.9895 0.104102 25.8162 -0.123199 26.2974 0.067277C26.7787 0.258388 27.1197 0.799339 27.1197 1.28442C27.1197 1.28442 27.1197 1.28505 27.1197 1.28569C27.1197 1.36061 26.4378 2.9568 28.552 6.92378C29.2365 8.20758 29.9768 9.6152 31.0289 11.1073C31.4663 11.7403 32.2143 13.2082 32.2143 14.2869C32.2143 16.4952 29.9819 18.2926 27.3235 18.2926ZM25.3 4.97965C24.5628 7.32631 23.8816 9.8933 23.8816 11.2336C23.8816 12.6711 24.0397 13.5758 24.507 14.8184C24.853 15.7428 26.0117 16.3879 27.3235 16.3879C28.9038 16.3879 30.2397 15.4254 30.2397 14.2869C30.2397 13.8844 29.8041 12.8888 29.3266 12.1974C28.2339 10.6489 27.3114 9.1733 26.5901 7.81965C26.0136 6.73711 25.5965 5.79489 25.3 4.97965Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default SeaLevel;
