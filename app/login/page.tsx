"use client";
import { useRef, useState } from "react";
import Header from "../components/Header";
import { checkValidate } from "@/app/utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/app/utils/firebase";
import { useAppDispatch } from "@/lib/hooks";
import { setUser } from "../features/auth/authSlice";
import { APP_BACKGROUND } from "../Constant";

export default function Login() {
  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const name = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const emailRef = email.current?.value;
    const passwordRef = password.current?.value;
    const fullName = name.current?.value;

    if (!emailRef || !passwordRef) {
      setErrorMessage("Email and password required");
      return;
    }
    // validate the form data
    const validMessage = checkValidate(emailRef, passwordRef);
    setErrorMessage(validMessage);
    if (validMessage) return;

    if (!isSignInForm) {
      // Sign-Up
      createUserWithEmailAndPassword(auth, emailRef, passwordRef)
        .then((usercredential) => {
          const user = usercredential?.user;
          console.log({ user });
          updateProfile(user, { displayName: fullName }).then(() => {
            const { uid, email, displayName } = auth.currentUser as any;
            dispatch(
              setUser({
                uid: uid,
                email: email,
                displayName: displayName,
              })
            );
          });
        })
        .catch((error) => {
          const errorCode = error?.code;
          const errorMessage = error?.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign-In
      signInWithEmailAndPassword(auth, emailRef, passwordRef)
        .then((userCredentials) => {
          const user = userCredentials?.user;
          console.log({ user });
          // updateProfile(user, { displayName: fullName }).then(() => {
          //   const { uid, email, displayName } = auth.currentUser as any;
          //   dispatch(
          //     setUser({
          //       uid: uid,
          //       email: email,
          //       displayName: displayName,
          //     })
          //   );
          // });
        })
        .catch((error) => {
          const errorCode = error?.code;
          const errorMessage = error?.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={APP_BACKGROUND} alt="bg-logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-8 bg-black w-2/6 my-30 mx-auto right-0 left-0 text-white opacity-85 rounded-lg"
      >
        <h1 className="font-bold py-4">
          {isSignInForm ? "Sign-In" : "Sign-Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-stone-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-stone-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-stone-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-600 w-full rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign-In" : "Sign-Up"}
        </button>
        <p
          className="py-4 font-bold underline underline-offset-8 cursor-pointer w-60"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registerd? Sign In Now"}
        </p>
      </form>
    </div>
  );
}
