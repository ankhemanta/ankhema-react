/**
Copyright (c) [2025] [ankhemanta]
Filename: Input.tsx
 * 
*/
//forwardRef
import React, { useRef } from "react"; // Fixed useRef import
import useDefaultThemeColors from '../hooks/useDefaultThemeColors'
import { InputStyle, PropsType } from '../types/inputTypes';

// --- COMPONENT ---
const Input = (props: PropsType) => {
  const {
    title = "",
    type = "text",
    value,
    readOnly = false,
    onChange,
    onChangeText,
    style = undefined,
    titleStyle = undefined,
    contrnerStyle = undefined,
    inputStyle = undefined,
    startStyle = undefined,
    themeMode = "light",
    designMode = "awesome",
    onPress, // Destructured onPress
    onKeyDown, // Destructured onKeyDown
    onKeyUp, // Destructured onKeyUp,
    required = false,
    width,
    placeholder,
    ref
  } = props;
  // Merge the array of objects into a single object {}
  //const mergedStyle = Object.assign({}, ...style[0]);


  // Use HTMLInputElement type for the ref
  const inputUseRef = useRef<HTMLInputElement>(ref ?? null);

  // Helper function for handling state/prop changes
  const onChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) {
      throw new Error(`Please give me value proprietary in ankhema-react Input component \n Like this \n <Input \n .... \n --->  value={value} <--- \n onChangeText={(val)=>setValue)}\n ...\n />
    `)
    }
    onChangeText?.(event.target.value);
    onChange?.(event);
  };




  // Calculate default styles based on theme and design mode
  const colors = useDefaultThemeColors(themeMode);
  const defaultStyles = getStyles(
    designMode,
    width,
    colors,
    style
  );


  // Corrected the event type to use the element it's attached to (HTMLDivElement)
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onPress?.(event); // Changed to optional chaining

    // Fixed typo: 'foucs' -> 'focus'
    if (inputUseRef.current) {
      inputUseRef.current.focus();
    }
  };




  return (
    // Use ?? for non-null/undefined check, preferring custom style over default
    <div
      style={contrnerStyle ?? defaultStyles.inputContainer}
      // Attached the corrected handler
      onClick={handleClick}
    >
      {title && (
        <div style={
          titleStyle ??
          defaultStyles.titleStyle

        }>
          <span>{title}</span>
          <span style={startStyle ?? defaultStyles.startStyle}>
            {required && " *"}
          </span>
        </div>
      )
      }

      <input
        readOnly={readOnly}
        type={type}
        // Correctly handles undefined or null value prop
        value={value ?? ""}
        onChange={onChanges}
        style={inputStyle ?? defaultStyles.input}
        // Fixed ref assignment syntax: =() -> ={}
        placeholder={placeholder}
        ref={inputUseRef}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      />
    </div >
  );
};
export default Input;


// The function should return the style object, not assign to a variable.
const getStyles = (
  designMode: "normal" | "awesome" | "forward",
  width: any,
  colors?: any,
  style?: React.CSSProperties
): InputStyle => {

  const { backgroundColor, color, secondryBgColor } = colors;
  const widthMount =
    width === undefined ? "90%" : !isNaN(width) ? width + "px" : width;

  // Define a base style object
  const styles: InputStyle = {
    inputContainer: {
      width: widthMount,
      backgroundColor: backgroundColor,
      padding: "5px",
      overflow: 'hidden',
      ...style
    },
    titleStyle: {
      display: "flex",
      alignItems: "center",
      color,
      gap: "5px",
      fontWeight: "bold",

    },
    startStyle: {
      color: "red",
      fontWeight: "bold"
    },
    input: {
      width: "100%",
      marginTop: "5px",
      fontSize: "15px",
      padding: "6px"
    }
  };

  // Apply designMode modifications (currently just defining the 'normal' mode)
  if (designMode === "normal") {
    styles.inputContainer!.backgroundColor = "transparent";
  } else if (designMode === "awesome") {
    styles.inputContainer!.backgroundColor = style?.backgroundColor ?? backgroundColor;
    styles.inputContainer!.borderRadius = "5px";
    styles.inputContainer!.border = `2px solid ${secondryBgColor}`;

    styles.titleStyle!.paddingLeft = "6px";
    styles.input!.backgroundColor = backgroundColor;
    styles.input!.color = color;
    styles.input!.outline = "none";
    styles.input!.border = "none";
  } else if (designMode === "forward") {
    styles.inputContainer!.backgroundColor = backgroundColor;
  }
  return styles;
};
