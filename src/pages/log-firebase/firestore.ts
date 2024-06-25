// src/firebase/firestore.js
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./Firebase";

export const createUserProfile = (
  userId: string,
  firstName: string,
  lastName: string,
  email: string
) => {
  return setDoc(doc(db, "users", userId), {
    firstName,
    lastName,
    email,
  });
};

export const getUserProfile = (userId: string) => {
  return getDoc(doc(db, "users", userId));
};
