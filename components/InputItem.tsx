import React from "react";
import styled, { css } from "styled-components";

interface InputItemProps {
  id: string;
  label?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  isTextArea?: boolean;
}

const inputStyle = css`
  padding: 16px 24px;
  background-color: #f3f4f6;
  color: #1f2937;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
  width: 100%;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline-color: #3692ff;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }
`;

const InputField = styled.input`
  ${inputStyle}
`;

const TextArea = styled.textarea`
  ${inputStyle}
  height: 200px;
  resize: none;
`;

function InputItem({
  id,
  label,
  value,
  onChange,
  placeholder,
  onKeyDown,
  isTextArea,
}: InputItemProps) {
  return (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}
      {isTextArea ? (
        <TextArea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <InputField
          id={id}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default InputItem;
