"use client";

import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const withAuth = (Component) => {
  return (props) => {
    const { user, loading } = useAuth() || {};
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push("/admin/login");
      }
    }, [user, loading]);

    if (user) {
      return <Component {...props} />;
    }

    return null;
  };
};

export default withAuth;
