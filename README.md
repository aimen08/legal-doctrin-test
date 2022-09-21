# Legal Doctrine Coding challenge

A web app that sloves a coding challenge .

## Stack:

- NextJS(React)
- TypeScript
- tailwindCss
- EeasyPeasy(state management library built on top of Redux,mainly to reduce boilerplate)
- Hosted on Vercel
- Zod (TypeScript-first schema validation with static type inference)
- Prettier and esLint
  <br/>
  <br/>
  <br/>

_Demo_ : *https://legal-doctrin-test.vercel.app/*

## Previews:

![](previews/1.jpeg?raw=true 'Legal Doctrin')
![](previews/2.jpeg?raw=true 'Legal Doctrin')

## Folder Structure:

- 📂 Legal-Doctrin-Test

  - 📂 **public** (Assets and Static files)
    - 📄 [bread.png](public/bread.png)
    - 📄 [butter.png](public/butter.png)
    - 📄 [favicon.ico](public/favicon.ico)
    - 📄 [milk.png](public/milk.png)
  - 📂 **src**
    - 📂 **components** (Functional components)
      - 📄 [AddButton.tsx](src/components/AddButton.tsx)
      - 📄 [CartButton.tsx](src/components/CartButton.tsx)
      - 📄 [CartItem.tsx](src/components/CartItem.tsx)
      - 📄 [Counter.tsx](src/components/Counter.tsx)
      - 📄 [Drawer.tsx](src/components/Drawer.tsx)
      - 📄 [ItemCard.tsx](src/components/ItemCard.tsx)
      - 📄 [Rating.tsx](src/components/Rating.tsx)
      - 📂 **icons** (Svg Icons)
        - 📄 [Cart.tsx](src/components/icons/Cart.tsx)
    - ## 📂 **env**
    - 📂 **pages** (Same as routes)
      - 📄 [\_app.tsx](src/pages/_app.tsx)
      - 📄 [index.tsx](src/pages/index.tsx)
    - 📂 **store** (Store and State)
      - 📄 [hooks.ts](src/store/hooks.ts)
      - 📂 **models** (Seperated for better management)
        - 📄 [cart\-model.ts](src/store/models/cart-model.ts)
        - 📄 [items\-model.ts](src/store/models/items-model.ts)
      - 📄 [store.ts](src/store/store.ts)
    - 📂 **styles** (global styles)
      - 📄 [globals.css](src/styles/globals.css)
    - 📂 **utils** (helper functions)
      - 📄 [helpers.ts](src/utils/helpers.ts)

## PS:

_this repo will become private after a week from 21/09/2022_
