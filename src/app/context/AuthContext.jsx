"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { firebaseConfig } from "@/firebase/config";
import { initializeApp } from "@firebase/app";

initializeApp(firebaseConfig);

const AuthContext = createContext({ user: null });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
            console.log('User set:', user);
        } else {
            setUser(null);
            console.log('User not found, set to null');
        }
    });

    return () => unsubscribe();
}, [auth]);


  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
