import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

type WaitlistData = {
  email: string;
  username?: string;
  role?: string;
};

export async function joinWaitlist({
  email,
  username,
  role,
}: WaitlistData) {
  const q = query(
    collection(db, "waitlist"),
    where("email", "==", email.toLowerCase())
  );

  const existing = await getDocs(q);

  if (!existing.empty) {
    throw new Error("EMAIL_EXISTS");
  }

  await addDoc(collection(db, "waitlist"), {
    email: email.toLowerCase(),
    username: username || "",
    role: role || "",
    createdAt: serverTimestamp(),
  });
}