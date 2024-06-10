import React, { FC, HTMLAttributes, useState } from "react";
import IconifyIcon from "../icon";
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  variant: "sm" | "md" | "lg";
  btnText: string;
  modalTitle: string;
  modalDesc: string;
}
export const Modal: FC<ModalProps> = ({
  variant,
  btnText,
  modalTitle,
  modalDesc,
  children,
  ...rest
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <button
        className="bg-primary p-3 rounded-md text-white font-semibold hover:bg-primary-400"
        onClick={() => setOpenModal(true)}
      >
        {btnText}
      </button>
      {openModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
          <div
            className={`relative flex flex-col justify-between shadow-md rounded- p-4 bg-white rounded-md ${variant === "sm" ? "w-[360px] h-[198px]" : variant === "md" ? "w-[580px] h-[178px]" : "w-[800px] h-[178px] "}`}
          >
            <div>
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{modalTitle}</h4>
                <span
                  className="cursor-pointer text-[#2D2E31]"
                  onClick={() => setOpenModal(false)}
                >
                  <IconifyIcon icon="tabler:x" fontSize={18} />
                </span>
              </div>
              <div>
                <p className="text-[14px] text-neutral">{modalDesc}</p>
              </div>
            </div>
            <div className="border border-dashed border-[#9F67E7] w-full h-10 bg-[#E6CCFFCC] rounded-md flex items-center p-4">
              {children}
            </div>
            <div className="w-full flex justify-end gap-4 mt-4">
              <button className="border border-primary text-primary font-medium bg-[#FEFEFE] rounded-md p-2 w-fit">
                Secondary
              </button>
              <button className="border border-1 p-2 bg-primary text-white font-medium rounded-md shadow-md">
                Primary Action
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
