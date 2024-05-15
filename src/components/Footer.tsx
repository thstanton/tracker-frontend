import { FaGithub } from "react-icons/fa";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer items-center p-4">
      <aside className="grid-flow-col items-center">
        <a href="https://www.tim-stanton.dev" className="link" target="_blank">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 418 248"
            xmlSpace="preserve"
            className="h-10 w-10 text-black"
          >
            <g>
              <path
                d="M113.3,242.6h-44c-4.3,0-7.5-1-9.5-3c-2-2-3-5.2-3-9.5V99.5H19.6c-4.3,0-7.5-1-9.5-3c-2-2-3-5.2-3-9.5V54.1
		c0-2.4,0.3-4.3,1-6c0.6-1.6,1.6-3,2.9-4.1l35-29.6c0.9-0.7,2.1-1.3,3.7-1.8c1.5-0.4,3.2-0.7,5-0.7H198c4.3,0,7.5,1,9.5,3
		c2,2,3,5.2,3,9.5v32.9c0,2.4-0.3,4.3-1,6c-0.6,1.6-1.6,3-2.9,4.1l-35.3,29.3c-0.7,0.7-1.9,1.4-3.4,1.9c-1.5,0.5-3.2,0.8-5,0.8h-2.2
		v101c0,2.4-0.3,4.3-1,6c-0.6,1.6-1.6,3-2.9,4.1l-35.3,29.3c-0.7,0.7-1.9,1.4-3.4,1.9C116.7,242.3,115.1,242.6,113.3,242.6z
		 M148.3,210.3c3.4,0,5.9-0.8,7.5-2.3c1.5-1.5,2.3-4,2.3-7.5V67.1H198c3.4,0,5.9-0.8,7.5-2.3c1.5-1.5,2.3-4,2.3-7.5V24.5
		c0-3.4-0.8-5.9-2.3-7.5c-1.5-1.5-4-2.3-7.5-2.3H54.6c-3.4,0-5.9,0.8-7.5,2.3c-1.5,1.5-2.3,4-2.3,7.5v32.9c0,3.4,0.8,5.9,2.3,7.5
		c1.5,1.5,4,2.3,7.5,2.3h39.9v133.3c0,3.4,0.8,5.9,2.3,7.5c1.5,1.5,4,2.3,7.5,2.3H148.3z M124.9,185.8V41.9H69.3v-2.7h114.1v2.7
		h-55.7v143.9H124.9z"
              />
              <path
                d="M231.1,242.6c-4.3,0-7.5-1-9.5-3c-2-2-3-5.2-3-9.5v-31.8c0-2.4,0.3-4.3,1-6c0.6-1.6,1.6-3,2.9-4.1l27.2-22.8
		c-9.6-2.9-17.2-7.8-22.7-14.8c-5.5-7-8.3-17-8.3-30V92.1c0-8.1,1.4-15.4,4.1-21.7c2.7-6.3,6.6-11.7,11.7-16l35.3-29.6
		c4.9-4,11-7.1,18.2-9.4c7.2-2.3,15.5-3.4,24.7-3.4h76c4.3,0,7.5,1,9.5,3c2,2,3,5.2,3,9.5v32.3c0,2.4-0.3,4.3-1,6
		c-0.6,1.6-1.6,3-2.9,4.1l-24.4,20.4c11.4,2.5,20.6,7.3,27.6,14.3c7,7,10.5,17.8,10.5,32.5v28.5c0,8.1-1.4,15.4-4.1,21.7
		c-2.7,6.3-6.7,11.7-11.9,16l-35,29.3c-5.1,4.2-11.2,7.4-18.5,9.6c-7.2,2.3-15.4,3.4-24.4,3.4H231.1z M352,210.3
		c17.4,0,31.1-4.1,41.1-12.4c10-8.2,15.1-20,15.1-35.4V134c0-15.2-3.9-26.1-11.7-32.6c-7.8-6.5-18-10.7-30.7-12.5l-40.5-5.4
		c-2.4-0.2-4.2-1.1-5.4-2.7c-1.3-1.6-1.9-3.6-1.9-6c0-2.4,0.6-4.3,1.9-5.8c1.3-1.5,3.1-2.3,5.4-2.3h63.3c3.4,0,5.9-0.8,7.5-2.3
		c1.5-1.5,2.3-4,2.3-7.5V24.5c0-3.4-0.8-5.9-2.3-7.5c-1.5-1.5-4-2.3-7.5-2.3h-76c-17.6,0-31.3,4.1-41.3,12.4
		c-10,8.2-14.9,20.1-14.9,35.4V91c0,15.2,3.8,26.1,11.5,32.6c7.7,6.5,17.9,10.7,30.6,12.5l40.7,5.7c2.4,0.2,4.1,1,5.3,2.4
		c1.2,1.5,1.8,3.7,1.8,6.8c0,2.2-0.6,4-1.8,5.6c-1.2,1.5-2.9,2.3-5.3,2.3h-73.1c-3.4,0-5.9,0.8-7.5,2.3c-1.5,1.5-2.3,4-2.3,7.5v31.8
		c0,3.4,0.8,5.9,2.3,7.5c1.5,1.5,4,2.3,7.5,2.3H352z M374,39.2v2.7h-60.3c-7.6,0-13.7,2.1-18.2,6.2c-4.5,4.2-6.8,9.4-6.8,15.8v22.3
		c0,6.3,1.3,10.8,3.8,13.3c2.5,2.5,5.9,4.2,10,4.9l57.3,11.7c5.4,1.1,9.9,3.4,13.4,7.1c3.5,3.6,5.3,10.1,5.3,19.6v15.8
		c0,8-2.7,14.5-8.1,19.7c-5.4,5.2-12.8,7.7-22,7.7h-67.6v-2.7h67.6c8.3,0,15-2.3,20-6.9c5-4.6,7.5-10.5,7.5-17.8v-15.8
		c0-8.5-1.5-14.3-4.5-17.5c-3-3.2-7-5.3-12.1-6.4L302,107.1c-4.7-0.9-8.6-2.8-11.5-5.6c-3-2.8-4.5-7.9-4.5-15.3V63.9
		c0-7.2,2.5-13.2,7.6-17.8c5.1-4.6,11.8-6.9,20.1-6.9H374z"
              />
            </g>
          </svg>
        </a>
        <div className="text-center">
          Made by{" "}
          <a
            href="https://www.tim-stanton.dev"
            className="link"
            target="_blank"
          >
            Tim Stanton
          </a>
        </div>
      </aside>

      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://www.linkedin.com/in/thstanton/"
          className="link"
          target="_blank"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
        <a href="https://github.com/thstanton" className="link" target="_blank">
          <FaGithub className="h-6 w-6" />
        </a>
        <a href="mailto:thstanton@proton.me" className="link" target="_blank">
          <FaEnvelope className="h-6 w-6" />
        </a>
      </nav>
    </footer>
  );
}