import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // <Svg viewBox="0 0 24 24" {...props}>
    //   <path d="M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z"
    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z"
    //   />
    //   <path d="M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" />
    // </Svg>

    <svg height="30" viewBox="0 -46 512 512" width="30" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m120 180c-66.167969 0-120 53.832031-120 120s53.832031 120 120 120 120-53.832031 120-120-53.832031-120-120-120zm0 210c-49.625 0-90-40.375-90-90s40.375-90 90-90 90 40.375 90 90-40.375 90-90 90zm0 0" fill="#75dfee"/><path d="m120 255c-24.8125 0-45 20.1875-45 45s20.1875 45 45 45 45-20.1875 45-45-20.1875-45-45-45zm0 60c-8.269531 0-15-6.730469-15-15s6.730469-15 15-15 15 6.730469 15 15-6.730469 15-15 15zm0 0" fill="#75dfee" /><path d="m482 262.980469v-52.980469c0-33.085938-26.914062-60-60-60h-30v-75c0-8.269531 6.730469-15 15-15v-30c-24.8125 0-45 20.1875-45 45v75h-65.839844l-36-120h24.839844v-30h-240v30h30v95.738281c-25.347656 6.554688-49.171875 18.578125-69.550781 35.410157l19.101562 23.132812c26.769531-22.105469 60.667969-34.28125 95.449219-34.28125 82.710938 0 150 67.289062 150 150v45h63.257812c7.164063 42.511719 44.226563 75 88.742188 75 49.625 0 90-40.375 90-90 0-26.59375-11.597656-50.527344-30-67.019531zm-377-142.34375v-90.636719h123.839844l36 120h-45.457032c-28.5-18.945312-62.671874-30-99.382812-30-5.019531 0-10.023438.21875-15 .636719zm149.039062 59.363281h167.960938c16.542969 0 30 13.457031 30 30v35.148438c-9.386719-3.328126-19.484375-5.148438-30-5.148438h-132.296875c-7.925781-22.347656-20.140625-42.679688-35.664063-60zm43.445313 90h57.496094c-11.113281 12.398438-18.839844 27.886719-21.722657 45h-33.257812v-15c0-10.21875-.867188-20.238281-2.515625-30zm124.515625 120c-33.085938 0-60-26.914062-60-60s26.914062-60 60-60 60 26.914062 60 60-26.914062 60-60 60zm0 0" fill="#75dfee"/><path d="m437 330c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15 6.714844-15 15-15 15 6.714844 15 15zm0 0" fill="#75dfee"/></svg>
  );
};

export default Icon;
