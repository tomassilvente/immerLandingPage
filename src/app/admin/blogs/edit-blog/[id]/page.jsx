"use client";

import withAuth from "@/app/hoc/withAuth";
import React from "react";

function EditBlog({ params }) {
  return (
    // <AuthContextProvider>
      <div>page {params.id}</div>
    // </AuthContextProvider>
  );
}

export default withAuth(EditBlog);
