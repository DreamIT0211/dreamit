import React from "react";
import { Spinner } from "@material-tailwind/react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 z-50">
      <Spinner className="h-12 w-12 text-white" />
    </div>
  );
};

export default Loader;
