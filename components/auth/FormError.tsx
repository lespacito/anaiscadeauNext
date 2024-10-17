import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import React from "react";

type Props = {
  message?: string | null;
};

const FormError = ({ message }: Props) => {
  if (!message) return null;
  return (
    <div className="flex items-center rounded-md bg-destructive/15 p-3 text-sm text-destructive">
      <ExclamationTriangleIcon />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
