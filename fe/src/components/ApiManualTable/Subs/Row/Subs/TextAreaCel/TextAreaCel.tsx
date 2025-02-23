import React, { useEffect, useRef, useState } from 'react';
import * as S from './TextAreaCelStyle';
import * as T from '@types';

export default function TextAreaCel({ initialState, fixedWidth, usingFor, readonly, onUpdate }: T.ApiTextCelProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [value, setValue] = useState(initialState || '');
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [isPressingShiftKey, setIsPressingShiftKey] = useState(false);

  useEffect(() => {
    if (textareaRef.current === null) return;

    setValue(initialState);
    const { scrollHeight, style } = textareaRef.current;
    style.height = `${Math.max(scrollHeight, 48)}px`;

    return () => {
      setValue('');
    };
  }, [initialState]);

  useEffect(() => {
    if (isEditingMode && textareaRef.current !== null) textareaRef.current.focus();
  }, [isEditingMode]);

  const handleCelClick = (toggledValue: boolean) => {
    if (textareaRef.current === null || readonly || usingFor === 'issueName' || usingFor === 'description') return;

    if (toggledValue) textareaRef.current.focus();
    else textareaRef.current.blur();

    setIsEditingMode(() => toggledValue);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textareaRef.current === null || readonly || usingFor === 'issueName' || usingFor === 'description') return;

    setValue(e.target.value || '');
    if (textareaRef.current) {
      const { scrollHeight, style } = textareaRef.current;
      style.height = `${Math.max(scrollHeight, 48)}px`;
    }
  };

  const handleKeyboardEventOnEditor = (e: React.KeyboardEvent<HTMLTextAreaElement>, toggledValue: boolean) => {
    if (textareaRef.current === null || readonly || usingFor === 'issueName' || usingFor === 'description') return;

    const { scrollHeight, style } = textareaRef.current;
    const curHeight = Number(style.height.replace('px', ''));

    if (e.key === 'Shift') setIsPressingShiftKey(() => toggledValue);
    if (e.key === 'Backspace' && toggledValue) style.height = `${Math.max(scrollHeight - 16, 48)}px`;
    if ((!isPressingShiftKey && e.key === 'Enter') || e.key === 'Escape') {
      onUpdate({ key: usingFor, value: value });
      handleCelClick(false);
    }
  };

  return (
    <S.TextAreaCel
      ref={textareaRef}
      value={value || ''}
      onChange={handleOnChange}
      onKeyDown={e => handleKeyboardEventOnEditor(e, true)}
      onKeyUp={e => handleKeyboardEventOnEditor(e, false)}
      onFocus={() => handleCelClick(true)}
      onBlur={() => handleCelClick(false)}
      readOnly={readonly || usingFor === 'issueName' || usingFor === 'description'}
      $fixedWidth={fixedWidth}
      $isEditingMode={isEditingMode}
    />
  );
}
