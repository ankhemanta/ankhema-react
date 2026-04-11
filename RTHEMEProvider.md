# 🔌 Theme Provider 
  ## Javascript
  ```javascript
    // App.js
    // React context like use
    import { AnkThemeProvider } from 'ankhema-react/provider';
    
    // if use won colors object like this
    const colors={
      light:{
        primary: "#eee",
        primaryColor: "red", // Theme colour 
        mainBgColor: "#fff", // main background colour 
        backgroundColor: "#f0f0f0",
        secondryBgColor: "#808080",
        pageBg: "#8d8d8d", // page background colour 
        color: "#000", // text colour 
      },
      dark:{
        primary: "#b30303",
        primaryColor: "red",
        mainBgColor: "#009",
        secondryBgColor: "808080",
        pageBg: "#333",
        backgroundColor: "#444",
        color: "#eee",
      }
    }
    
    
    export default function App =  () =>{
      
      return (
        <AnkThemeProvider
          // colorsObject={colors} if use 
          colorsObject={colors} // alternative colorsObjectProvide={colors}, if colorsObject or colorsObjectProvide not provider no problem automatically shift into default colour object 
          defaultThemeMode="dark" // light or system 
        >
          ...
          
        </AnkThemeProvider>
      )
    }
    
  ```
  
  #How to use  [** click to details PageView **](./RCPageView.md)
  
  
  ## 🔶 API 
------
| Props                  | Type              |   Inner Props and type| description |
|-----------------|------------------|-------|-------:|
|  `colorsObject` or `colorsObjectProvide`   |  object | `light` `dark` `system` all are type object | resevie `object` in side `object` most be `light` ,`dark` ,`system` |
| `defaultThemeMode`         | `string`           | `dark ` , `light`  `system`   default `system` =>`light` | allow to set default theme type |

_____
## 🔗 Links 

[Automatic theme Div like component ](./RCPageView.md)

[👕 Go To Theme Switch Button ](./RCThemeButton.md)

[👕 Go To  useThemeColors Hook 🪝 ](./RHuseTheColors.md)

[⬅️ Go To BACK TO MAIN ](./README.md)
_____