import React from "react";
import Logo from "../common/Logo";
import Breadcrumbs from "../common/Breadcrumbs";
import Title from "./Title";
import { IoIosCloudy } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import ZoomIn from "./ZoomIn";
import { useDispatch, useSelector } from "react-redux";
import { setZoomIn } from "../../services/resumeEditor/resumeEditorSlice";
import { selectZoomIn } from "../../services/resumeEditor/resumeEditorSelector";

const EditorNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const zoom = useSelector(selectZoomIn);

  return (
    <div className="border-b-2">
      <div className=" 2xl:max-w-[1800px] mx-auto px-10 2xl:px-0 py-5 ">
        <div className="flex justify-between items-center">
          <div className=" flex justify-start items-center gap-5 xl:gap-10">
            <Logo name={false} />
            <div className=" flex justify-start items-center gap-5 xl:gap-10">
              <Breadcrumbs back="/" label="Home" />
              <Breadcrumbs back="/" label="Resumes" />
              <Title />
              <div className="flex justify-start items-center gap-2 mt-1">
                <IoIosCloudy className=" text-c-primary text-2xl lg:text-3xl" />
                <span className=" font-semibold text-c-dark text-base lg:text-xl">
                  Saved
                </span>
              </div>
            </div>
          </div>
          <ZoomIn
            initialValue={zoom}
            getValue={(data: number) => {
              dispatch(setZoomIn(data));
            }}
          />

          <div className=" flex justify-start items-center gap-5 xl:gap-10">
            <button className=" text-c-dark font-semibold flex justify-start items-center gap-2 px-4 py-1 lg:py-2 bg-gray-100 rounded-full text-base lg:text-xl">
              <FiDownload />
              <span>Download</span>
            </button>
            <button className=" flex justify-start items-center gap-2 px-4 py-1 lg:py-2 bg-c-primary text-white rounded-full text-base lg:text-xl">
              <FiSend />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorNavbar;
