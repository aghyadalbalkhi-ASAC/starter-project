import React from "react";

const AppSupervisorsIcon: React.FC<{ color?: string }> = ({
  color = "#64748B",
}) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2_708)">
        <path
          d="M8.3 3C9.25478 3 10.1705 3.39509 10.8456 4.09835C11.5207 4.80161 11.9 5.75544 11.9 6.75C11.9 7.74456 11.5207 8.69839 10.8456 9.40165C10.1705 10.1049 9.25478 10.5 8.3 10.5C7.34522 10.5 6.42955 10.1049 5.75442 9.40165C5.07928 8.69839 4.7 7.74456 4.7 6.75C4.7 5.75544 5.07928 4.80161 5.75442 4.09835C6.42955 3.39509 7.34522 3 8.3 3ZM7.01469 11.9062H9.58531C9.91719 11.9062 10.2434 11.9414 10.5556 12.0029C10.4966 12.5449 10.7638 13.0459 11.1687 13.3154C10.7019 13.626 10.4178 14.2412 10.6062 14.877C10.7188 15.2549 10.8706 15.624 11.0675 15.9785C11.2644 16.333 11.495 16.6553 11.7537 16.9453C12.1953 17.4404 12.8675 17.4844 13.3625 17.2002V17.2266C13.3625 17.4961 13.4384 17.7686 13.5847 17.9971H2.83531C2.37406 18 2 17.6104 2 17.1299C2 14.2441 4.24437 11.9062 7.01469 11.9062ZM14.2625 9.39258C14.2625 9.1875 14.3891 9.00293 14.5803 8.95898C14.8756 8.88867 15.185 8.85059 15.5 8.85059C15.815 8.85059 16.1244 8.88867 16.4197 8.95898C16.6109 9.00293 16.7375 9.1875 16.7375 9.39258V9.91113C16.7375 10.1396 16.8725 10.3447 17.0637 10.459C17.255 10.5732 17.4884 10.5908 17.6769 10.4766L18.065 10.2451C18.2366 10.1426 18.4503 10.166 18.5853 10.3154C18.7991 10.5527 18.9875 10.8193 19.1506 11.1123C19.3137 11.4053 19.4403 11.71 19.5303 12.0205C19.5894 12.2168 19.4994 12.4219 19.3278 12.5244L18.9228 12.7676C18.74 12.876 18.6416 13.0869 18.6416 13.3066C18.6416 13.5264 18.74 13.7373 18.9228 13.8457L19.3278 14.0889C19.4994 14.1914 19.5866 14.3965 19.5303 14.5928C19.4375 14.9033 19.3109 15.208 19.1506 15.501C18.9903 15.7939 18.7991 16.0605 18.5853 16.2979C18.4503 16.4473 18.2337 16.4707 18.065 16.3682L17.6769 16.1367C17.4884 16.0225 17.2522 16.04 17.0637 16.1543C16.8725 16.2686 16.7375 16.4736 16.7375 16.7021V17.2207C16.7375 17.4258 16.6109 17.6104 16.4197 17.6543C16.1244 17.7246 15.815 17.7627 15.5 17.7627C15.185 17.7627 14.8756 17.7246 14.5803 17.6543C14.3891 17.6104 14.2625 17.4258 14.2625 17.2207V16.7051C14.2625 16.4736 14.1247 16.2686 13.9334 16.1514C13.7422 16.0371 13.5059 16.0195 13.3147 16.1338L12.935 16.3623C12.7634 16.4648 12.5497 16.4414 12.4147 16.292C12.2009 16.0547 12.0125 15.7881 11.8494 15.4951C11.6862 15.2021 11.5597 14.8975 11.4697 14.5869C11.4106 14.3906 11.5006 14.1855 11.6722 14.083L12.0659 13.8457C12.2487 13.7344 12.35 13.5205 12.35 13.3008C12.35 13.0811 12.2516 12.8672 12.0659 12.7559L11.6722 12.5186C11.5006 12.416 11.4134 12.2109 11.4697 12.0146C11.5625 11.7041 11.6862 11.3994 11.8494 11.1064C12.0125 10.8135 12.2009 10.5469 12.4147 10.3096C12.5497 10.1602 12.7634 10.1367 12.935 10.2393L13.3175 10.4678C13.5087 10.582 13.745 10.5645 13.9362 10.4502C14.1303 10.3359 14.2653 10.1279 14.2653 9.89648V9.39258H14.2625ZM16.8528 13.3037C16.8611 13.1134 16.8324 12.9234 16.7682 12.745C16.7041 12.5667 16.6059 12.4037 16.4795 12.266C16.3532 12.1283 16.2014 12.0187 16.0333 11.9438C15.8652 11.8689 15.6843 11.8303 15.5014 11.8303C15.3186 11.8303 15.1376 11.8689 14.9695 11.9438C14.8014 12.0187 14.6496 12.1283 14.5233 12.266C14.397 12.4037 14.2988 12.5667 14.2346 12.745C14.1704 12.9234 14.1417 13.1134 14.15 13.3037C14.1417 13.494 14.1704 13.684 14.2346 13.8624C14.2988 14.0407 14.397 14.2037 14.5233 14.3414C14.6496 14.4791 14.8014 14.5887 14.9695 14.6636C15.1376 14.7385 15.3186 14.7771 15.5014 14.7771C15.6843 14.7771 15.8652 14.7385 16.0333 14.6636C16.2014 14.5887 16.3532 14.4791 16.4795 14.3414C16.6059 14.2037 16.7041 14.0407 16.7682 13.8624C16.8324 13.684 16.8611 13.494 16.8528 13.3037Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2_708">
          <rect
            width="18"
            height="15"
            fill="white"
            transform="translate(2 3)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AppSupervisorsIcon;
