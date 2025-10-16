"use client";
import { useLocation } from "react-router-dom";
import Button from "../components/LiquidGlass/Button";
import { OtpBox } from "../components/otpBox";
import { useRef, useState } from "react";
import { UserEmailVerify } from "../utils/userEmailVerify";
// import type { RefObject } from "react";

export default function VerifyEmail() {
  const otpRef0 = useRef<HTMLInputElement>(null);
  const otpRef1 = useRef<HTMLInputElement>(null);
  const otpRef2 = useRef<HTMLInputElement>(null);
  const otpRef3 = useRef<HTMLInputElement>(null);
  const otpRef4 = useRef<HTMLInputElement>(null);
  const otpRef5 = useRef<HTMLInputElement>(null);

  const [inputError, setInputError] = useState(false);
  const [TypedOtp, setTypedOtp] = useState("");
  const { state } = useLocation();
  const { email } = state;

  const otpStringify = async () => {
    const finalOtp = [
      otpRef0.current?.value,
      otpRef1.current?.value,
      otpRef2.current?.value,
      otpRef3.current?.value,
      otpRef4.current?.value,
      otpRef5.current?.value,
    ].join("");
    if (finalOtp.length == 6) {
      setInputError(false);
      setTypedOtp(finalOtp);
      const res = await UserEmailVerify(email, TypedOtp);
      setInputError(true);
      console.log(res);
    } else {
      setInputError(true);
      setTypedOtp("");
    }
  };
  return (
    <>
      <div className="w-full h-screen bg-blue-50 flex">
        <div className="gradient w-[96%] h-[92%] m-auto rounded-2xl shadow-2xl bg-white flex flex-col">
          {" "}
          <div className="oswald flex-1 mx-[20%] mt-[3%] justify-center items-center flex text-8xl text-gray-700 font-sans">
            Verify your OTP
          </div>
          <div className=" flex-8 mx-[20%] py-[5%] flex items-center justify-center ">
            <OtpBox
              reff={otpRef0}
              nextreff={otpRef1}
              prevreff={null}
              isInputError={inputError}
            ></OtpBox>
            <OtpBox
              reff={otpRef1}
              nextreff={otpRef2}
              prevreff={otpRef0}
              isInputError={inputError}
            ></OtpBox>
            <OtpBox
              reff={otpRef2}
              nextreff={otpRef3}
              prevreff={otpRef1}
              isInputError={inputError}
            ></OtpBox>
            <OtpBox
              reff={otpRef3}
              nextreff={otpRef4}
              prevreff={otpRef2}
              isInputError={inputError}
            ></OtpBox>
            <OtpBox
              reff={otpRef4}
              nextreff={otpRef5}
              prevreff={otpRef3}
              isInputError={inputError}
            ></OtpBox>
            <OtpBox
              reff={otpRef5}
              nextreff={null}
              prevreff={otpRef4}
              isInputError={inputError}
            ></OtpBox>
          </div>
          <div className=" justify-center flex  flex-4 mx-[20%] mb-[1%]">
            <Button
              className={` justify-center items-center flex text-5xl `}
              onClick={async () => {
                await otpStringify();
              }}
            >
              Click to Verify
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
