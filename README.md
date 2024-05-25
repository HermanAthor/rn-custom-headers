# rn-custom-headers

This is a component library that simplifies the creation of headers in React Native applications. It provides a convenient way to build custom headers for your app.

## Installation

```sh
npm install rn-custom-headers
```

## Usage

To use the `CustomHeader` component, import it from the library and use it in your code: expo router based projects

_layout.tsx/(tabs)_

```jsx
import { CustomHeader } from 'rn-custom-headers';



## Example


// Here's an example of how to use the `CustomHeader` component in your code


<Tabs
  screenOptions={{
    headerShown: false,
    tabBarStyle: { backgroundColor: 'transparent', position: 'absolute' },
    tabBarBackground: () => (
      <BlurView
        intensity={80}
        tint="systemMaterialDark"
        style={{ flex: 1, backgroundColor: Colors.dark }}
      ></BlurView>
    ),
  }}
>
  <Tabs.Screen
    name="index"
    options={{
      title: 'Home',
      tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,

      header: () => <CustomHeader />, //Use it here like a any JSX component
      headerTransparent: true,
    }}
  />
</Tabs>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

### Note:

This component is currently used in expo router projects and we strongly recommend to use it only in expo router projects. Incase you want it to work in forexample other projects other than expo router projects. You are free to contribute to this project our submit a feature request. Hopefully we will make it happen. Happy coding!
