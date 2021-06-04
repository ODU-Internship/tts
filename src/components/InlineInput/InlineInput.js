import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Element = styled.p(() => ({
  transition: 'border-bottom-color 0.15s ease-in-out',
  padding: '0.25rem 0.5rem',
  display: 'inline-block',
  ':focus': {
    outline: 'none',
  },
  '&:empty:before': {
    content: 'attr(placeholder)',
    pointerEvents: 'none',
    display: 'block',
  },
}));

const InlineInput = forwardRef(({
  tag, onBlur, onKeyDown, onChange, value, isMultiline, allowNonEmpty, disabled,
  trimWhitespace, ...props
}, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  const handleKeyDown = (e) => {
    if (disabled) return;

    if (e.which === 13 && !isMultiline) {
      e.preventDefault();
    }

    if (typeof onKeyDown === 'function') {
      onKeyDown(e);
    }
  };

  const handleBlur = (e) => {
    if (disabled) return;

    const { innerText } = e.target;

    if (!allowNonEmpty && !innerText) {
      inputRef.current.innerText = value;
    }

    if (trimWhitespace) {
      inputRef.current.innerText = inputRef.current.innerText.trim();
    }

    if (typeof onChange === 'function') {
      if (value !== innerText) {
        if (allowNonEmpty || innerText) {
          onChange(e);
        }
      }
    }

    if (typeof onBlur === 'function') {
      onBlur(e);
    }
  };

  return (
    <div style={{ display: 'inline-block' }}>
      {/* These empty characters shield the contenteditable from arbitrary focus */}
      &#8203;
      <Element
        as={tag || 'h3'}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        contentEditable={!disabled}
        spellCheck="false"
        suppressContentEditableWarning
        ref={inputRef}
        {...props}
      >
        {value}
      </Element>
      &#8203;
    </div>
  );
});

InlineInput.propTypes = {
  tag: PropTypes.string,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isMultiline: PropTypes.bool,
  allowNonEmpty: PropTypes.bool,
  disabled: PropTypes.bool,
  trimWhitespace: PropTypes.bool,
};

InlineInput.defaultProps = {
  tag: 'h3',
  onBlur: () => {},
  onKeyDown: () => {},
  onChange: () => {},
  /**
   * By default placeholder is an empty space so that
   * it maintains the height of the input when empty
   */
  placeholder: '\u00a0',
  isMultiline: false,
  allowNonEmpty: true,
  disabled: false,
  trimWhitespace: true,
};

export default InlineInput;

/*
Usage of InlineInput:

InlineInput component props:
- tag: Which tag should be used, defaults to h3
- value: Value of the input

const [value, setValue] = useState("Hello World")

<InlineInput
  tag="h3"
  value={value}
  onChange={e => setValue(e.target.innerText)}
/>
*/
