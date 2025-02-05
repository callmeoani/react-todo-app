import { useCallback } from "react";

type InputWithIconTypes = {
  value: string;
  setValue: (value: string) => void;
  error: string;
  title: string;
  placeholder?: string;
  icon?: string;
  label?: string;
};

export default function InputWithIcon({
  value,
  setValue,
  error,
  title,
  placeholder,
  icon,
  label,
}: InputWithIconTypes) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <>
      <label htmlFor={title} className={`text-sm font-semibold`}>
        {label}
      </label>
      <div
        className={` w-full flex items-center  border-red-400 relative ${
          icon && placeholder ? "h-[50px] lg:h-[60px]" : "h-[28px] lg:h-[37px]"
        }`}
      >
        <img src={icon} className="absolute left-[18px] " />
        <input
          placeholder={placeholder}
          title={title}
          value={value}
          onChange={(e) => handleChange(e)}
          className={`text-[1rem] placeholder-[#999999] border-solid border-border-dark border-[1px] w-full h-full p-4 lg:p-8  rounded-lg ${
            label ? "mt-[8px]" : ""
          } ${icon && "pl-[50px] lg:pl-[70px]"} `}
        />
      </div>
      {error[0] && <p>{error}</p>}
    </>
  );
}
