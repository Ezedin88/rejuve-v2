import Image from 'next/image';
import React from 'react';

type AddModalProps = {
  setAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddCard: React.FC<AddModalProps> = ({ setAddModalOpen }) => {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 inset-0 bg-black/80 flex justify-center min-h-screen w-full items-center z-50">
      <div className="flex min-w-[659px] gap-4 items-start">
        <div className="flex flex-col bg-primaryWhite rounded-lg p-[60px] gap-8 justify-center w-full">
          <h2 className="text-5xl font-bold text-primaryDark">Add card</h2>
          <input
            type="text"
            className="p-5 rounded bg-lightGrayBg"
            placeholder="Card Number"
          />
          <input
            type="text"
            className="p-5 rounded bg-lightGrayBg"
            placeholder="Full Name"
          />
          <div className="flex gap-8 justify-between items-center">
            <input
              type="text"
              className="p-5 rounded bg-lightGrayBg"
              placeholder="Expiry"
            />
            <input
              type="text"
              className="p-5 rounded bg-lightGrayBg"
              placeholder="CVC"
            />
          </div>
          <button
            className="flex bg-primaryGreen px-10 py-5 w-fit text-primaryWhite rounded font-bold self-center"
            disabled
          >
            Add
          </button>
        </div>
        <button onClick={() => setAddModalOpen(false)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path d="M1 11L11.2283 1L1 11Z" fill="#FFF" />
              <path
                d="M1 11L11.2283 1"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M11.2283 11L1 1L11.2283 11Z" fill="#FFF" />
              <path
                d="M11.2283 11L1 1"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AddCard;
