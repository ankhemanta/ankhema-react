import React, { useRef } from "react"; // Fixed useRef import

// --- TYPE DEFINITIONS ---

interface InputStyle {
    inputContainer?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    input?: React.CSSProperties;
}

// Added correct types for keyboard events
type propsType = {
    title?: string;
    type?: string;
    value?: string;
    readOnly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeText?: (val: string) => void;
    style?: InputStyle;
    themeMode?: "light" | "dark";
    designMode?: "normal" | "awesome" | "forward";
    // Fixed type and made optional
    onPress?: (event: React.MouseEvent<HTMLDivElement>) => void; 
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
};

// --- COMPONENT ---

const Input = (props: propsType) => {
    const {
        title = "",
        type = "text",
        value,
        readOnly = false,
        onChange,
        onChangeText,
        style = {},
        themeMode = "light",
        designMode = "normal",
        onPress, // Destructured onPress
        onKeyDown, // Destructured onKeyDown
        onKeyUp, // Destructured onKeyUp
    } = props;

    // Use HTMLInputElement type for the ref
    const inputUseRef = useRef<HTMLInputElement>(null);

    // Helper function for handling state/prop changes
    const onChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);
        onChangeText?.(event.target.value);
    };

    // Calculate default styles based on theme and design mode
    const defaultStyles = getStyles(themeMode, designMode);
    
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
          style={
            style.inputContainer ?? defaultStyles.inputContainer
          }
          // Attached the corrected handler
          onClick={handleClick} 
        >
            {title && (
                <p style={style.titleStyle ?? defaultStyles.titleStyle}>
                    {title}
                </p>
            )}
            <input
                readOnly={readOnly}
                type={type}
                // Correctly handles undefined or null value prop
                value={value ?? ""} 
                onChange={onChanges}
                style={style.input ?? defaultStyles.input}
                // Fixed ref assignment syntax: =() -> ={}
                ref={inputUseRef} 
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
            />
        </div>
    );
};
export default Input;

// --- Styles and Color Definitions ---
const colors = {
    light: {
        text: "#000",
        backgroundColor: "#f0f0f0"
    },
    dark: {
        text: "#fff",
        backgroundColor: "#333333" 
    }
};

// The function should return the style object, not assign to a variable.
const getStyles = (
    themeMode: "light" | "dark",
    designMode: "normal" | "awesome" | "forward"
): InputStyle => {
    const themeColors = themeMode === "light" ? colors.light : colors.dark;
    const { backgroundColor, text: color } = themeColors;

    // Define a base style object
    let styles: InputStyle = {
        inputContainer: {
            padding: '10px',
            borderRadius: '5px',
        },
        titleStyle: {
            fontSize: '14px',
            marginBottom: '5px',
            color,
        },
        input: {
            padding: '8px',
            borderRadius: '3px',
            border: `1px solid ${color}`,
            backgroundColor,
            color,
            width: '100%',
            boxSizing: 'border-box',
        }
    };

    // Apply designMode modifications (currently just defining the 'normal' mode)
    if (designMode === "normal") {
        // Normal mode uses the base styles
    } else if (designMode === "awesome") {
        // Example: Awesome mode might change border radius or background
        // Added non-null assertion (!) as the base style defines these properties
        styles.inputContainer!.backgroundColor = backgroundColor; 
        styles.inputContainer!.borderRadius = '15px'; 
    } else if (designMode === "forward") {
        // ... more specific styles
    }

    return styles;
};