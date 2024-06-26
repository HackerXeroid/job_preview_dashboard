import styles from "./JobTabHeader.module.css";

function JobsTabHeader() {
  return (
    <nav className="border border-gray h-18 flex items-center">
      <ul className="flex self-stretch gap-18 ml-25">
        <li className="self-stretch flex items-center">
          <button
            className={`text-grayText text-xl self-stretch ${styles.btnActive}`}
          >
            Job preview
          </button>
        </li>
        <li className="flex items-center self-stretch">
          <button className="self-center text-grayText text-xl">
            Applicants
          </button>
        </li>
        <li className="flex items-center self-stretch">
          <button className="self-stretch text-grayText text-xl">Match</button>
        </li>
        <li className="self-stretch flex items-center">
          <button className="text-grayText text-xl self-stretch">
            Messages
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default JobsTabHeader;
