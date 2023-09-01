import React from "react";
import "./TextInput.less";

interface ThisProps {
  type?: string;
  label: string;
  placeholder?: string;
  value?: string | number;
  onChange?: any;
  helpText?: string;
}
const TextInput = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  helpText,
}: ThisProps) => (
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      placeholder={placeholder}
    />
    {helpText && <small className="simple-form-text">{helpText}</small>}
  </div>
);

export default TextInput;
