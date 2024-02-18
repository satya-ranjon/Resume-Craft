import React, { useEffect } from "react";
import Logo from "../common/Logo";
import Breadcrumbs from "../common/Breadcrumbs";
import Title from "./Title";
import { IoIosCloudy } from "react-icons/io";
// import { TbLoader2 } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import ZoomIn from "./ZoomIn";
import { useSelector } from "react-redux";
import {} from "../../services/resumeEditor/resumeEditorSelector";
import { userHistory } from "../../services/history/historyApi";
import { useAppDispatch } from "../../app/store";
import { selectAllHistory } from "../../services/history/historySelector";

const NavbarCoverLetter: React.FC = () => {
  const appDispatch = useAppDispatch();

  const allHistory = useSelector(selectAllHistory);

  useEffect(() => {
    if (!(allHistory.length > 0)) {
      appDispatch(userHistory());
    }
  }, []);

  return (
    <div className="border-b-2">
      <div className=" 2xl:max-w-[1800px] mx-auto px-10 2xl:px-0 py-5 ">
        <div className="flex justify-between items-center">
          <div className=" flex justify-start items-center gap-5 xl:gap-10">
            <Logo name={false} />
            <div className=" flex justify-start items-center gap-5 xl:gap-10">
              <Breadcrumbs back="/" label="Home" />
              <Breadcrumbs back="/dashboard" label="Cover-Letter" />

              <Title />

              <div className="hidden md:flex justify-start items-center gap-2 mt-1 md:w-28">
                {/* {editor?.isSyncing ? (
                  <TbLoader2 className="animate-spin text-c-primary text-2xl lg:text-2xl" />
                ) : (
                  <IoIosCloudy className=" text-c-primary text-2xl lg:text-3xl" />
                )}

                {editor?.isSyncing ? (
                  <span className=" font-semibold text-c-primary text-base lg:text-xl">
                    Saving..
                  </span>
                ) : (
                  <span className=" font-semibold text-c-dark text-base lg:text-xl">
                    Saved
                  </span>
                )} */}
                <IoIosCloudy className=" text-c-primary text-2xl lg:text-3xl" />
                <span className=" font-semibold text-c-dark text-base lg:text-xl">
                  Saved
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <ZoomIn />
          </div>

          <div className=" flex justify-start items-center gap-5 xl:gap-10">
            <button className=" text-c-dark font-semibold flex justify-start  items-center lg:gap-2 lg:px-4 p-2 lg:py-2 bg-gray-100 rounded-full text-base lg:text-xl">
              <FiDownload />
              <span className=" hidden lg:block">Download</span>
            </button>
            <button className=" flex justify-start items-center lg:gap-2 lg:px-4 p-2  lg:py-2 bg-c-primary text-white rounded-full text-base lg:text-xl">
              <FiSend />
              <span className=" hidden lg:block">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NavbarCoverLetter);
