import React, { useState, useEffect } from 'react';

type InputProps = {
  type: string;
  value?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  isError?: boolean;
  isValid?: boolean;
  errorMessage?: string | string[];
};

const Input = ({ type, value, placeholder, className, disabled, isError, isValid, errorMessage }: InputProps) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);
  const [showError, setShowError] = useState(isError);
  const [showValid, setShowValid] = useState(isValid);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    //value값 수정 시 커스텀 화면 제거
    setShowError(false);
    setShowValid(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <div className={`inputBox ${className} ${isFocused && 'focus'} ${showError && 'error'} ${showValid && 'valid'}`}>
        <input
          type={type}
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          className="input"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {/* Error */}
        {showError && (
          <div className="errorMessage">
            {Array.isArray(errorMessage) && errorMessage.map((msg, index) => <p key={index}>{msg}</p>)}
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
