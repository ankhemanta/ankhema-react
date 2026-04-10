## ankhema-react

### 🪝 useThemeColors Hook

> [!NOTE] 
<mark><b>If you want to use this features Most be add AnkThemeProvider
</b></mark>
[see more details ](./RTHEMEProvider.md)
----

  <mark>
    >> useThemeColors is hook 🪝 
  </mark>

___
___
## JavaScript 
  
  ```javascript
      // example.jsx
      import { useThemeColors } from 'ankhema-react';
      
      export default Example =()=>{
        const object = useThemeColors();
        
        // See available value 
        return (
          <p>
           {
             JSON.stringify(object)
           }
          </p>
        )
      }
  ```
___
🔶 USETHEMECOLORS API

🪝  `useThemeColors()`

| name           |  type       | get        | discption |
| ---------------|-------------|------------|-----------|
|`useThemeColors`| `hook`  | `themeMode` , `backgroundColor, color, pageBg` etc | all theme related value  getting  |
_______


[👕 Go To Theme Switch Button ](./RCThemeButton.md)

[⬅️ Go To BACK TO MAIN ](./README.md)