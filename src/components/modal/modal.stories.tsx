
import { Modal, ModalProps } from './modal';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import IconifyIcon from '../icon';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Molecule/Modal',
  component: Modal,
  argTypes: {
    
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

// With named export we define component's story
export const Default: StoryObj<ModalProps> = (args: React.JSX.IntrinsicAttributes & ModalProps) => <Modal {...args} />;
// Define default arguments for the Default StoryObj
Default.args = {
  variant: 'sm',
  btnText: 'Open Modal',
  modalTitle: 'Modal Title',
  modalDesc: 'Modal Desc'
};

// ModalMd
export const ModalMd: StoryObj<ModalProps> = (args: React.JSX.IntrinsicAttributes & ModalProps) => (
  <Modal {...args}>
    <div>
      <span>Story that shows Card component with text</span>
    </div>
  </Modal>
);
// Define default arguments for the WithText component and inherit arguments from Default component
ModalMd.args = {
  ...Default.args,
  variant: 'md'
};

export const ModalLg: StoryObj<ModalProps> = (args: React.JSX.IntrinsicAttributes & ModalProps) => (
  <Modal {...args}>
    <div className="flex justify-center items-center p-4 gap-4">
      <p>Hello World</p>
    </div>
  </Modal>
);
// Define default arguments for the WithText component and inherit arguments from Default component
ModalLg.args = {
  ...Default.args,
  variant: 'md'
};



