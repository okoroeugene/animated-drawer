# Drawer Navigation Animation

This project is based on Expo https://docs.expo.io/versions/v47.0.0 and was written with Typescript.

### Project Description

The navigation was setup using react-navigation, where the parent navigation is the Drawer Navigation and the Tab Navigation and Stack Navigation is nested inside of them.

- Drawer Navigation has a prop named `drawerContent` and it can be used to customize the drawer.
- `DrawerView` component is a wrapper that contains the page content when the drawer is open, making it easy to manipulate the transform (scale, rotate..)

### Animating the Components

- `useDrawerProgress` hooks can be used to get the progress of the drawer when opened/closed.
- We interpolate the value of this progress, by scaling, adding borderRadius and attempting to rotate the view screen when the position of the drawer has changed.

### Optimization

- The use of hooks useCallback to call the `handleToggle` function to toggle the drawer, this prop (useCallback) prevents rerenders when the state changes.
- Also used `memo` (for memoization) in the DrawerView component to prevent unnecessary rerenders when `old state === new state`

## Setbacks

- Wasn't able to get the rotate transform correctly (still WIP)
