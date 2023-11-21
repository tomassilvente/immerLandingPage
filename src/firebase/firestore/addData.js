import { app } from "../config";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
} from "@firebase/firestore";
import DOMPurify from "dompurify";
import requestIp from "request-ip";

const MAX_EMAILS_PER_IP = 20;
const ipRequestCount = new Map();
const db = getFirestore(app);

export default async function addData(collectionName, id, data, req) {
  const ip = req ? requestIp.getClientIp(req) : null;

  if (
    ip &&
    ipRequestCount.has(ip) &&
    ipRequestCount.get(ip) >= MAX_EMAILS_PER_IP
  ) {
    return {
      result: null,
      error: "This IP has passed the limit of possible emails.",
    };
  }

  const sanitizedData = {
    ...data,
    email: DOMPurify.sanitize(data.email),
    username: DOMPurify.sanitize(data.username),
  };

  let result = null;
  let error = null;

  try {
    if (id) {
      result = await setDoc(doc(db, collectionName, id), sanitizedData, {
        merge: true,
      });
    } else {
      result = await addDoc(collection(db, collectionName), sanitizedData);
    }

    if (ip) {
      ipRequestCount.set(ip, (ipRequestCount.get(ip) || 0) + 1);
    }

    return { result, error };
  } catch (e) {
    error = e;
    return { result, error };
  }
}
