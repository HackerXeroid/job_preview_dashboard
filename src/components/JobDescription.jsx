import styles from "./JobDescription.module.css";
import LocationIcon from "/map-icon.svg";
import RevenueIcon from "/revenue-icon.svg";
import FigmaIcon from "/figma.png";
import AdobeIllustratorIcon from "/adobe_illustrator.png";
import AdobeXDIcon from "/adobe_xd.png";
import AtlassianLogo from "/atlassian-logo.jpg";
import DeleteIcon from "/bin-icon.svg";
import PencilIcon from "/pencil-icon.svg";
import ApplicantsIcon from "/applicants-icon.svg";
import MessagesIcon from "/messages-icon.svg";
import MatchesIcon from "/matches-icon.svg";
import ViewsIcon from "/views-icon.svg";
import QuoteAuthorImage from "/quote-author.png";

function JobDescription() {
  return (
    <div className="flex">
      {/* Job Container */}
      <div className={`pt-9 pl-25 w-4/5`}>
        <div className="mb-6">
          {/* Job Heading */}
          <div className="flex gap-3 items-center mb-6">
            <h2 className="font-bold text-4xl">Senior Product Designer</h2>
            <span className="w-1 h-1 rounded-full bg-graySeparator"></span>
            <p className="text-grayText text-sm">posted 2 days ago</p>
            <div className="border border-grayBorderStatus rounded-full flex items-center gap-1.5 p-1.5">
              <span className="w-1.5 h-1.5 block rounded-full bg-greenStatus"></span>
              <span className="text-greenStatus text-xs font-medium">
                Active
              </span>
            </div>
          </div>

          {/* Job subheading */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center">
              <img src={LocationIcon} className="w-4" />
              <p className={`${styles.h4Text} text-xl`}>Delaware, USA</p>
            </div>

            {/* Dot separator */}
            <span className="block w-1 h-1 rounded-full bg-graySeparator"></span>

            <div className="flex gap-2 items-center">
              <img src={RevenueIcon} className="w-4" />
              <p className={`${styles.h4Text} text-xl`}>$300k-$400k</p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <span className="-ml-25 block w-screen h-0.25 -z-10 bg-gray" />

        {/* Job Requirements */}
        <div className="grid grid-cols-4 pt-8 pb-6">
          <div>
            <h4 className={`${styles.jobSkillsColor} text-sm mb-2`}>
              Skills Required
            </h4>

            {/* Skill Badge Container */}
            <div className="flex flex-col items-start gap-3">
              {/* Skill Badge */}
              <div className={`${styles.skillBadge} py-1 px-1.5 gap-1 flex`}>
                <img src={FigmaIcon} className="w-4 object-cover" />
                <span className="text-xs">Figma</span>
              </div>

              <div className={`${styles.skillBadge} py-1 px-1.5 gap-1 flex`}>
                <img src={AdobeIllustratorIcon} className="w-4 object-cover" />
                <span className="text-xs">Adobe Illustrator</span>
              </div>

              <div className={`${styles.skillBadge} py-1 px-1.5 gap-1 flex`}>
                <img src={AdobeXDIcon} className="w-4 object-cover" />
                <span className="text-xs">Adobe XD</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className={`${styles.jobSkillsColor} text-sm mb-2`}>
              Preferred Language
            </h4>
            <p>English</p>
          </div>

          <div>
            <h4 className={`${styles.jobSkillsColor} text-sm mb-2`}>Type</h4>
            <p>Full time</p>
          </div>

          <div>
            <h4 className={`${styles.jobSkillsColor} text-sm mb-2`}>
              Years of Experience
            </h4>
            <p>3+ Years of Experience</p>
          </div>
        </div>

        {/* Separator */}
        <span className="-ml-25 block w-screen h-0.25 -z-10 bg-gray" />
        {/* Job Details */}
        <div className="pt-8 leading-7 text-[#3D3D3D] w-2/5 mb-8">
          <h4 className={`${styles.jobSkillsColor} text-sm mb-2`}>
            About the job
          </h4>
          <ol className="list-decimal list-inside">
            <li>Handle the UI/UX research design</li>
            <li>
              Work on researching on latest web applications designs & trends
            </li>
            <li>Work on conceptualizing and visualizing</li>
            <li>
              Work on creating graphics content and other graphic related works
            </li>
          </ol>
          <h5>Benefits:</h5>
          <ul className="list-disc list-inside pl-3">
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>
          <h5>Schedule:</h5>
          <ul className="list-disc list-inside pl-3">
            <li>Day Shift</li>
          </ul>
          <h5>Supplemental pay types:</h5>
          <ul className="list-disc list-inside pl-3">
            <li>Performance bonus...</li>
          </ul>
        </div>

        {/* Separator */}
        <span className="-ml-25 block w-screen h-0.25 -z-10 bg-gray" />

        {/* Company Details */}
        <div className="pt-10">
          <div className="flex gap-3 mb-6.5">
            <div className="flex items-center gap-3">
              <img src={AtlassianLogo} className="w-8 h-8" />
              <span className="text-[#4F4F4F]">Atlassian</span>
            </div>

            <button
              className={`text-[#003788] font-bold text-xs py-1 px-4 bg-[#E0EBF9] rounded-lg ${styles.btnBoxShadow}`}
            >
              Follow
            </button>
          </div>

          <div className="flex gap-12 text-[#3D3D3D] mb-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h4 className={styles.h4Text}>Company size</h4>
                <p>1k-2k Employees</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className={styles.h4Text}>Sector</h4>
                <p>Information Technology, Infrastructure</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className={styles.h4Text}>Founded in</h4>
                <p>2019</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h4 className={styles.h4Text}>Type</h4>
                <p>Private</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className={styles.h4Text}>Funding</h4>
                <p>Bootstrapped</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className={styles.h4Text}>Founded by</h4>
                <div>
                  <a href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw">
                    Scott Farquhar
                  </a>
                  ,&nbsp;
                  <a href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Mike+Cannon-Brookes&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgJsvrQUWPOKZ8iETJQdvnbU2UFD7BVWUbHmvxqkn_X6fnbX-LLuIjmm9FYDOCdLoN8dDFvHE1HsZUhT6XIGTrbZRGGDIDstquY_yluK6YQX1NkHtmo0wsp8wVD7ouAbjfDvaQHjO4Iyd2AKnCQbPH8-Ah5otgNPwHcJ39HScqiWv6SVxYRXUiznwfdbns6uKnydurua8JyyTlcxFT3lPFMTAfAAzqy-x0DxflUh6aHFtCEgFOChGuNdxmDlND1wruAK7SbM%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAnoECDYQBA">
                    Mike Cannon-Brookes
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Report Button */}
          <button className="text-grayLight underline text-xs mb-14.5">
            Report this listing
          </button>
        </div>
      </div>

      {/* Job Operations And Summary */}
      <div className="w-1/5 border-l border-r border-[#e7e7e7] -mx-1 shadow bg-white z-10 pt-9 pr-3">
        <div className="ml-12">
          {/* Button container */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 flex gap-2.5 justify-center items-center bg-[#FEF4F2] border rounded-lg border-primary py-3 px-6">
              <img src={DeleteIcon} className="w-4" />
              <span className="text-primary">Delete&nbsp;job</span>
            </button>

            <button className="flex-1 flex gap-2.5 justify-center items-center bg-primary rounded-lg border-2 border-[#FED3CA] py-3 px-6">
              <img src={PencilIcon} className="w-4" />
              <span className="text-white">Edit&nbsp;job</span>
            </button>
          </div>

          {/* Properties */}
          <div className="p-3 flex flex-col mb-9">
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex">
                {/* Property Text and Icon */}
                <div className="flex gap-2.5 items-center text-[#4F4F4F] mr-auto">
                  <img src={ApplicantsIcon} className="w-5" />
                  <span className="text-[#4F4F4F] text-sm">Applicants</span>
                </div>
                {/* Property Value */}
                <span className="text-[#3D3D3D]">400</span>
              </div>
              {/* Separator */}
              <span className="w-full block bg-gray h-0.25" />
            </div>

            <div className="flex flex-col gap-4 mb-4">
              <div className="flex">
                {/* Property Text and Icon */}
                <div className="flex gap-2.5 items-center text-[#4F4F4F] mr-auto">
                  <img src={MatchesIcon} className="w-5" />
                  <span className="text-[#4F4F4F] text-sm">Matches</span>
                </div>
                {/* Property Value */}
                <span className="text-[#3D3D3D]">100</span>
              </div>
              {/* Separator */}
              <span className="w-full block bg-gray h-0.25" />
            </div>

            <div className="flex flex-col gap-4 mb-4">
              <div className="flex">
                {/* Property Text and Icon */}
                <div className="flex gap-2.5 items-center text-[#4F4F4F] mr-auto">
                  <img src={MessagesIcon} className="w-5" />
                  <span className="text-[#4F4F4F] text-sm">Messages</span>
                </div>
                {/* Property Value */}
                <span className="text-[#3D3D3D]">147</span>
              </div>
              {/* Separator */}
              <span className="w-full block bg-gray h-0.25" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex">
                {/* Property Text and Icon */}
                <div className="flex gap-2.5 items-center text-[#4F4F4F] mr-auto">
                  <img src={ViewsIcon} className="w-5" />
                  <span className="text-[#4F4F4F] text-sm">Views</span>
                </div>
                {/* Property Value */}
                <span className="text-[#3D3D3D]">800</span>
              </div>
              {/* Separator */}
              <span className="w-full block bg-gray h-0.25" />
            </div>
          </div>
        </div>

        {/* Quotes */}
        <div className="ml-6">
          <blockquote
            className={`flex flex-col gap-12 p-6 rounded-xl font-medium text-xl ${styles.boxShadow}`}
          >
            <p className="">"A quote from a Atlassian."</p>

            <div className="flex item-center gap-4">
              <img src={QuoteAuthorImage} className="w-11 h-11 rounded-full" />
              <cite className="font-medium text-base not-italic flex flex-col gap-0.5">
                <span>Name</span>
                <span className="font-medium text-[#828282]">Description</span>
              </cite>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
export default JobDescription;
