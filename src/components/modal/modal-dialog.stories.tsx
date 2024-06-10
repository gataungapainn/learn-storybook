import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import IconifyIcon from "../icon";
import { ModalDialog, ModalDialogProps } from "./modal-dialog";

// This tells Storybook how to list your stories and provide information
export default {
  title: "Molecule/Modal-Dialog",
  component: ModalDialog,
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof ModalDialog>;

// With named export we define component's story
export const Default: StoryObj<ModalDialogProps> = (
  args: React.JSX.IntrinsicAttributes & ModalDialogProps
) => <ModalDialog {...args} />;
// Define default arguments for the Default StoryObj
Default.args = {
  variant: "success",
  btnText: "Open Modal",
  modalTitle: "Modal Title",
  modalDesc: "Modal Desc",
  icon: "icon-park-outline:check",
};

export const Danger: StoryObj<ModalDialogProps> = (
  args: React.JSX.IntrinsicAttributes & ModalDialogProps
) => <ModalDialog {...args} />;
// Define default arguments for the Default StoryObj
Danger.args = {
  variant: "danger",
  btnText: "Open Modal",
  modalTitle: "Modal Title",
  modalDesc: "Modal Desc",
  icon: "icon-park-outline:check",
};

export const Warning: StoryObj<ModalDialogProps> = (
  args: React.JSX.IntrinsicAttributes & ModalDialogProps
) => <ModalDialog {...args} />;
// Define default arguments for the Default StoryObj
Warning.args = {
  variant: "warning",
  btnText: "Open Modal",
  modalTitle: "Modal Title",
  modalDesc: "Modal Desc",
  icon: "icon-park-outline:check",
};

export const Info: StoryObj<ModalDialogProps> = (
  args: React.JSX.IntrinsicAttributes & ModalDialogProps
) => <ModalDialog {...args} />;
// Define default arguments for the Default StoryObj
Info.args = {
  variant: "success",
  btnText: "Open Modal",
  modalTitle: "Modal Title",
  modalDesc: "Modal Desc",
  icon: "icon-park-outline:check",
};

export const ModalDialogWithComponent: StoryObj<ModalDialogProps> = (
  args: React.JSX.IntrinsicAttributes & ModalDialogProps
) => (
  <ModalDialog {...args}>
    <div className="flex justify-center items-center p-4 gap-4">
      <p>Hello World!</p>
    </div>
  </ModalDialog>
);
// Define default arguments for the WithText component and inherit arguments from Default component
ModalDialogWithComponent.args = {
  variant: "success",
  btnText: "Open Modal",
  modalTitle: "Modal Title",
  modalDesc: "Modal Desc",
  icon: "icon-park-outline:check",
};
