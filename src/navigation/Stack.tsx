import React, { SetStateAction } from 'react';

// --- Type Definitions ---

/**
 * A placeholder type for the Screen component.
 * In a real-world scenario, you would import the actual Screen component's type.
 * We define its props here minimally for type-checking.
 */
interface ScreenProps {
  name: string;
  children: React.ReactNode;
  // Other potential props for Screen would go here
}

// A simple functional component signature for the child "Screen" component.
// This is necessary so we can check child.type against it.
// Note: In a real app, you would import the actual component: import { Screen } from './Screen';

const Screen: React.FC<ScreenProps> & { displayName?: string } = ({ children }) => { children };


Screen.displayName = "Screen"; // Ensure the displayName is set for the validation logic

/**
 * Props for the Stack component.
 */
interface StackProps {
  /** The unique name of the Stack navigator. */
  name: string;
  /** The Screen components defined within the stack. */
  children: React.ReactNode;
}

// A simple structure to hold the processed router data (though it's currently unused/incomplete in the original JS)
interface RouterDetail {
  id: number;
  routerName: string;
  type: "stack";
  totalScreens: number;
  screens: {
    id: number;
    screenName: string;
  }[];
}


// --- Stack Component Implementation ---

const Stack: React.FC<StackProps> = ({ name, children }) => {
  // A Set to store and quickly check for duplicate screen names
  // Explicitly type the Set to only contain strings
  const screenNames: Set<string> = new Set();

  // Note: The original JS logic to build `routerDetails` is flawed/incomplete 
  // (it re-initializes and only stores the last screen), so we'll 
  // initialize it here as an empty array and leave the push logic as-is 
  // to closely match the original intent, though it's likely wrong.
  const routerDetails: RouterDetail[] = [];

  // 1. Stack name prop check
  if (!name) {
    // TypeScript/React components throw an Error, not a string
    throw new Error(`Stack required 'name' prop.`);
  }

  // 2. Process and Validate Children
  React.Children.forEach(children, (child, index) => {
    // A. Element Validity Check
    if (!React.isValidElement(child)) {
      throw new Error(
        `Stack Child at index ${index} is not a valid React element (e.g., received a string or null).`
      );
    }

    // Type assertion for 'child.type' to allow accessing 'displayName' and 'name'
    const childType = child.type as React.ComponentType | { displayName?: string; name?: string };

    // Children Type Name found
    // Compare against the actual imported/defined Screen component function/class, AND/OR the displayName/name string
    const isScreen = child.type === Screen || childType.displayName === "Screen" || childType.name === "Screen";
    const childTypeName = childType.displayName || childType.name || 'Unknown Component';

    // Screen Component validation 
    if (isScreen) {
      // Type assertion to treat child.props as ScreenProps for safe property access
      const screenProps = child.props as ScreenProps;

      // 3. Check for the 'name' prop
      const screenName = screenProps.name;

      if (!screenName) {
        throw new Error(
          `Screen Child at index ${index} is missing the required 'name' prop.`
        );
      }

      // 4. Check for Duplicate 'name' prop
      if (screenNames.has(screenName)) {
        throw new Error(
          `Duplicate Screen name found: '${screenName}'. Screen names within a Stack must be unique.`
        );
      }

      // 5. Add the unique name to the Set
      screenNames.add(screenName);

      // --- Original Incomplete Router Detail Logic (Kept for fidelity to original code) ---
      // This section likely needs a redesign in a real app, as it only collects info but doesn't store it persistently.

      // Initialize/Reset routerDetails for each child (this is the original JS logic flaw)
      const currentRouterDetail: RouterDetail = {
        id: (1 + index),
        routerName: name,
        type: "stack",
        totalScreens: React.Children.count(children), // Use React.Children.count() for correct total
        screens: []
      };

      // screen routerDetails object
      let createObj = {
        id: index,
        screenName: screenName,
      };

      // stor (push to the current child's detail)
      currentRouterDetail.screens.push(createObj);

      // Store the current detail (replaces previous ones if stored in an array like `routerDetails`)
      routerDetails[index] = currentRouterDetail;
      // --- End Original Logic ---
    } else {
      // Optional: Throw an error if a non-Screen child is detected
      console.warn(`Stack received an unexpected child of type: ${childTypeName}. Only 'Screen' components are supported.`);
    }
  });

  // 6. Return children (the actual rendering)
  // In a real router, this component would likely return null or a Provider/Context, 
  // and the actual screen rendering would happen elsewhere.
  return  children ;
};

export default Stack;