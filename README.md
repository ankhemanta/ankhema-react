# ankhema-react

## 📜 Introduction
Some Rect Components from for time save.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coveralls-image]][coveralls-url]

___
## 🖥️ Installation

  ```brush
      npm install ankhema-react
      or
      yarn add ankhema-react
  ```

___

> [!NOTE] 
<mark><b>If you want to use all the features of the theme or apply it automatically All components, do this
</b></mark>


## Create Colors Object 

<details>
  <summary>
   <b>
     use in bulid background colors object
   </b>
  </summary>
   
    📜 currently available on colors object 
    
      primary,
      primaryColor,
      mainBgColor,
      pageBg,
      backgroundColor,
      color,
</details>



----
 


<details>
  <summary>
   <b>
     I want use won custom colors object 
   </b>
  </summary>
  

  <mark>
    <b>
      ** if use default color as its then ignore step 1 or 2
   </b>
  </mark>

1. create a folder in 📂 `src` folder

   ```brush
       $ mkdir constants
   ```

2. 📂 `constants` in create object like this

    ```javascript
        export const colors = {
          light : {
            primary : '# won color ' // brand color 
            backgroundColor : '# won color', // base background color 
            pageBg : '# won color ' // for all page PageView components 
            color : '# won color', //  text color 
          },
          dark:{
            // property same but value change 
            // important never use same value 
          },
          system:{
            // property same but value change 
            // important never use same value 
          }
        }
      
    ```
</details>


## 🔌 Theme Provider 

  ```javascript
    // App.js
    // React context like use
    import {AnkThemeProvider} from 'ankhema-react/provider';
    
    // if use  won colors object
    // import { colors } from './constants/colors.js';
    
    const App =  ()=>{
      
      return (
        <AnkThemeProvider
          // colorsObject={colors} if use 
        >
          ...
          
        </AnkThemeProvider>
      )
    }
  ```
  
  [••• Click to See More details >>> ](./RTHEMEProvider.md)
  
  ___
## 🪟 Components 
   1. [**ThemeSwitchButton**](./RCThemeSwitchButtom.md)
   
   2. [**PageView**](./RCPageView.md)
   
   3. [**Input**](./RCInput.md)
   



## 🪝 Hooks

   1. [**useThemeColors**](./RHuseTheColors.md)
   
   3. [**useLocalStorage**](./RHuseLocalStorage.md)
  
   4. [**useWebDimensions**](./RHuseWebDimensions.md)
   
   5. [**useElementDimensions**](./RHuseElementDimensions.md)
   
   6. [**useScrollPosition**](./RHuseScrollPosition.md)
   
   

## 🌈 Contexts

   1. [**AnkThemeContext**](./RCNThemeContext.md)


## 🎡 Core functions

   1 **getRandomUserId,**
   2. **getRandomId,**
   3. **getNumInRange,**
   4. **getRandomText,**
   5. **getRamdomKey**
   6. **emailHideWithSymbol,**
   7. **emailHide,**
   8. **arrayToOneString**
   9. **arrayFindBoolean**
   10. **capatilcapitizeFirstLetter**

    
  [**See details**](https://www.npmjs.com/package/ankhema)

_______

## 🔗 Links 

[👕 Go To Theme Switch Button ](./RCThemeSwitchButton.md)
_____
## PLEASE HELP TO IMPROVE !!
THANKS FOR WATCHING 🙏 
______
  
<details>
  <summary>
  </summary>
  
      ||||||||||||||||| _ ||||_|||||||||||||||||||||||||||
      ||  ____ _____  / /__ / /_  ___  ____ ___  ____   ||
      |  / __ `/ __ \/ //_// __ \/ _ \/ __ `__ \/ __ `/ ||
      | / /_/ / / / / ,<  / / / /  __/ / / / / / /_/ / ||
      | \__,_/_/ /_/_/|_|/_/ /_/\___/_/ /_/ /_/\__,_/  |||
      ||||||||||||||||||||||||||||||||||||||||||||||||||||
      
</details>