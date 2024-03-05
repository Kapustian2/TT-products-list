import React, { ForwardedRef, forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div>
        <input {...props} ref={ref} />
      </div>
    );
  }
);
