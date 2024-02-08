# Document: Technical test
Title: Software Engineer
Position: Frontend engineer
Candidate: Achmad Jamaludin

## Q1
Write a Typescript snippet using React framework to achieve the following objectives: Implementation of useCallback and useMemo Implementation of axios Implementation of useState A simple page with the following text inputs Email Password Login button Trigger API POST call to submit email and password to https://www.sample.app/login Create a function to check the validity of the email address prior the API call

### Answer
https://stackblitz.com/~/github.com/amalari/achmad-rushowl-test-fe

## Q2
Write a Typescript snippet to find out the minimum value of the maximum value of each nested array given the following structure

### Answer
```ts
const values: number[][] = [ [1,2,3,4,5], [3,4,5,6,7], [6,7,8,9,10] ]
const answer: number = calculateMinMax(values) // 5

// Answer
const calculateMinMax = (values: number[][]): number {
  const maxValues = values.map(row => Math.max(...row));
  const minMaxValue = Math.min(...maxValues);

  return minMaxValue;
}
```

## Q3
Explain the main difference of React and React Native during runtime.

### Answer
#### Main Differences at Runtime:
React: Renders UI via a virtual DOM, minimizing real DOM manipulations for efficient updates in web browsers.
React Native: Bridges JavaScript and native UI components, directly rendering platform-specific components for mobile apps.

#### Consequence of Runtime Differences based on My Experience:
##### Migrating a React Web App to React Native:
Requires adjustments due to the fundamental change in rendering mechanisms and target environments.
Expect code refactoring and platform-specific considerations for smooth cross-platform functionality.

##### Code Optimization Concerns:
Code optimized for React's web runtime might not translate perfectly to React Native's mobile environment.
Unoptimized code might still function in React but might exhibit performance issues or jankiness in React Native, especially on low-end devices.

##### Additional Notes:
The specific level of adjustments and optimization effort during migration depends on the complexity of your React web app.
Proactive optimization practices across development stages can benefit both web and mobile versions of your app.
