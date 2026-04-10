# 🔌 Theme Provider 
  ## Javascript
  ```javascript
    // App.js
    // React context like use
    import { AnkThemeProvider } from 'ankhema-react/provider';
    
    // if use  won colors object
    // import { colors } from './constants/colors.js';
    
    export default function App =  () =>{
      
      return (
        <AnkThemeProvider
          // colorsObject={colors} if use 
          colorsObject={colors} // alternative colorsObjectProvide={colors}
          defaultThemeMode="dark" // light or system 
        >
          ...
          
        </AnkThemeProvider>
      )
    }
  ```
  
  
  ## 🔶 API 
------
| Props                  | Type              |   Inner Props and type| description |
|-----------------|------------------|-------|-------:|
|  `colorsObject` or `colorsObjectProvide`   |  object | `light` `dark` `system` all are type object | resevie `object` in side `object` most be `light` ,`dark` ,`system` |
| `defaultThemeMode`         | `string`           | `dark ` , `light`  `system`   default `system` =>`light` | allow to set default theme type |

_____
## 🔗 Links 


[👕 Go To Theme Switch Button ](./RCThemeButton.md)

[👕 Go To  useThemeColors Hook 🪝 ](./RHuseTheColors.md)

[⬅️ Go To BACK TO MAIN ](./README.md)
_____