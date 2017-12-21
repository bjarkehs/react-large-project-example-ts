# React Structure

```shell
/src
  /components
    /Button
    /Notifications
      /__tests__
      /components
        /ButtonDismiss
          /__tests__
          /ButtonDismiss.tsx
          /index.ts
          /ButtonDismiss.scss
      /Notifications.tsx
      /index.ts
      /Notifications.scss
  /scenes
    /Home
      /__tests__
      /components
        /ButtonLike
          /ButtonLike.tsx
          /index.ts
      /services
        /processData
      /Home.tsx
      /index.ts
      /Home.scss
    /Sign
      /__tests__
      /components
        /FormField
      /scenes
        /Login
        /Register
          /__tests__
          /Register.tsx
          /index.ts
          /Register.scss
  /services
    /users
      /actions.ts
      /api.ts
      /models.ts
      /reducer.ts
    /auth
      /actions.ts
      /api.ts
      /reducer.ts
    /localStorage (example)
  /App.tsx
  /index.tsx
  /store.ts
```

## Rules

- Component can define nested components or services.
- Scene can define nested scenes, components, or services.
- Service can define nested services.
- Nested features can only use from its parent.

*Note: By parent feature, I mean a parent, grandparent, great-grandparent etc… You cannot use a feature that is a “cousin”, this is not allowed. You will need to move it to a parent to use it.*

## Components

- Basic building blocks
- Root components are shared across whole app
- Nested components can only be used by parent
  - Example:
    - Button can be used anywhere
    - Notifications can be used anywhere
    - ButtonDismiss uses Button but can only be used in Notifications
- Components can contain components, and services

## Scenes

- Pages of the application
- A component
- Scenes can contain scenes, components, and services

## Services

- Not a copmonent
- Self-contained module
- E.g. core business logic
- Api requests should happen through a service

## Tests

- In a folder called `__tests__`
- Located next to the file under test.
  - Example: `/scenes/Home/index.tsx` has tests in `/scenes/Home/__tests__/index.tsx`

Note: Currently there's a warning with React 16

```javascript
console.error node_modules\fbjs\lib\warning.js:33
      Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills
```

## Source

[How to better organize your React applications?](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)
[How to use Redux on highly scalable javascript applications?](https://medium.com/@alexmngn/how-to-use-redux-on-highly-scalable-javascript-applications-4e4b8cb5ef38)
