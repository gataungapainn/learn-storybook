import React, { FC, HTMLAttributes } from "react";
import IconifyIcon from "../icon";
export interface ModalDialogProps extends HTMLAttributes<HTMLDivElement> {
  variant: "success" | "danger" | "warning" | 'info';
  btnText: string;
  modalTitle: string;
  modalDesc: string;
  icon: string;
}
export const ModalDialog: FC<ModalDialogProps> = ({
  variant,
  modalTitle,
  modalDesc,
  icon,
  children
}) => {

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
      <div
        className={`relative flex flex-col justify-between shadow-md rounded- p-4 bg-white rounded-md w-[580px] gap-2`}
      >
        <div className="flex justify-items-start items-center gap-2">
          <div className={`w-[40px] h-[40px] rounded-full flex justify-center items-center ${variant === 'success' ? 'bg-success' : variant === 'danger' ? 'bg-[#E90229]' : variant == 'warning' ? 'bg-warning' : 'bg-primary'} text-white`}>
            <IconifyIcon icon={icon} fontSize={20} />
          </div>
          <div className="flex flex-col ">
            <h1 className="font-bold text-[20px]">{modalTitle}</h1>
            <h4 className="text-neutral text-[14px]">{modalDesc}</h4>
          </div>
        </div>
        <div className="border border-dashed border-[#9F67E7] w-full h-10 bg-[#E6CCFFCC] rounded-md flex items-center p-4">
          {children}
        </div>
        <div className="w-full flex justify-end gap-4 mt-4">
          <button className="border border-primary text-primary font-medium bg-[#FEFEFE] rounded-md p-2 w-fit">
            Secondary
          </button>
          <button className={`border border-1 p-2 ${variant === 'success' ? 'bg-primary' : variant === 'danger' ? 'bg-[#E90229]' : variant == 'warning' ? 'bg-warning' : 'bg-primary'} text-white font-medium rounded-md shadow-md`}>
            Primary Action
          </button>
        </div>
      </div>
    </div>
  );
};
