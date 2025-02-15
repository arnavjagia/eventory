import React from "react";

type Props = {};

const Form = (props: Props) => {
  return (
    <div className="my-7 flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center px-4 py-5 md:px-0">
        <div className="flex flex-col gap-6 md:w-[50%]">
          <h1 className="text-center text-4xl font-bold">
            Let&apos;s address your concerns
          </h1>
          <p className="text-center">
            Got questions or concerns? Let us help you out! We&apos;re here to
            clear up any doubts and provide the answers you need.
          </p>
        </div>
        <form className="mt-7 flex min-w-[90%] flex-col items-center justify-center gap-5 rounded-xl bg-[#D5D6E9] px-4 py-5 md:min-w-[50%] lg:min-w-[35%]">
          <label htmlFor="text" className="self-start">
            Full Name
          </label>
          <input type="text" className="w-full rounded-lg p-4" />
          <label htmlFor="text" className="self-start">
            Email
          </label>
          <input type="text" className="w-full rounded-lg p-4" />
          <label htmlFor="text" className="self-start">
            Message
          </label>
          <textarea rows={7} className="w-full rounded-lg p-4" />
          <button className="w-full rounded-xl bg-[#2E3192] p-4 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
