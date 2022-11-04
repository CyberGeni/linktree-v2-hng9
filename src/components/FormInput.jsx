import { useState } from "react";
import './forminput.css'
function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div className="w-full ">
        <label className="text-gray-700">{label}</label>
        <input 
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            id={id}
            focused={focused.toString()}
            className="flex border border-gray-400 rounded shadow px-3 py-2 w-full placeholder-slate-400 peer
            default:border-slate-400 focus:outline-none focus:border-sky-500
            invalid:border-red-500 invalid:text-pink-600
            focus:invalid:border-red-500
            focus:ring-1 focus:ring-blue-200"
        />
        <span className="text-red-500 invisible peer-invalid:visible">{errorMessage}</span>
      </div>
    </>
  );
}

export default FormInput;
