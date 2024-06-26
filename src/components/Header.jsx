import styles from "./Header.module.css";
import BriefcaseIcon from "/briefcase-jobs-btn.svg";
import PaymentIcon from "/payment-icon.svg";
import MessagesIcon from "/messages-icon.svg";
import ApplicationIcon from "/application-icon.svg";
import BellIcon from "/bell-icon.svg";
import CaretIcon from "/caret-down.svg";
import AtlassionLogo from "/atlassian-logo.jpg";

function Header() {
  return (
    <header className={`h-28 flex items-center`}>
      <nav className="flex justify-between flex-1">
        <div
          id="logo"
          className="flex items-center bg-gray w-25 py-4 px-6 ml-10"
        >
          <p className="font-bold text-xl text-primary">Logo</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            className={`text-xl bg-primary p-4 rounded-[50px] text-white flex gap-1 ${styles.jobsButton}`}
          >
            <img src={BriefcaseIcon} alt="Briefcase Icon" />
            Jobs
          </button>

          <div
            className={`flex text-xl text-grayLight ${styles.pageChangeButtonContainer} py-5 px-12 gap-19`}
          >
            <button className="flex gap-2 items-center">
              <div className={styles.newMessage}>
                <img src={MessagesIcon} />
              </div>
              Messages
            </button>
            <button className="flex gap-2 items-center">
              <img src={PaymentIcon} />
              Payments
            </button>
            <button className="flex gap-2 items-center">
              <img src={ApplicationIcon} />
              Application
            </button>
          </div>
        </div>

        <div className="mr-6 flex gap-4 items-center p-2.5">
          <div className={styles.newNotification}>
            <img src={BellIcon} alt="Bell Icon" className="w-6" />
          </div>
          <div className="profile flex items-center gap-1.5">
            <img
              src={AtlassionLogo}
              alt="Atlassion Logo"
              className="w-8 h-8 rounded-full"
            />
            <span>
              <img src={CaretIcon} alt="Caret Icon" />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
