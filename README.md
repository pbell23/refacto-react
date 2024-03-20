# Refactoring Kata Test

## Introduction

We have a `FilterDomain` component in `src/components/DomainFilter/DomainFilter.component.tsx` which renders a cluster of 3 select inputs allowing the user to filter by `domain`.

A domain is a string provided by an upstream api (in this example, they are hardcoded into `src/index.tsx`) following the following pattern: {country code}\_{classification}-{sub classification}, the country code, classification and sub classification being strings containing only uppercase letters (no numbers, no punctuation).

Each of the 3 selects allow the user to choose one or multiple values from, respectively, the list of all distinct countries represented in the existing domains, the list of all distinct classifications, and the list of all distinct subclassifications.

## Goal of the exercise

Today, this component contains the logic to compute the three lists of distinct values, and we would like to be able to reuse this logic in another component.

We need to have a way to get those 3 lists in another component, on another page of the application.

## Additional context

There is also a weird warning in the console, that nobody seems to understand.

And there have been reports of bugs by users, but we have not managed to reproduce them.

You can run the project to see this filter component in action

## System Requirements

- Node (Tested with v17.1.0)
- Optionnal : yarn (Tested with 1.22.17)
- Optionnal : [NVM](https://github.com/nvm-sh/nvm) (node version manager to install the right version easily)

## Installation

### Setup node environment

to setup the right version with NVM :

```bash
nvm use
```

### Run the application

```bash
npm install
```

OR

```bash
yarn
```

## Run the application

```bash
npm start
```

OR

```bash
yarn start
```

## Run the tests

```bash
npm test
```

OR

```bash
yarn test
```

## Rules

There are some rules to follow:

- You must commit regularly
- You must not modify code when comments explicitly forbid it

## Deliverables

What do we expect from you:

- the link of the git repository
- several commits, with an explicit message each time
- a file / message / email explaining your process and principles you've followed, and how one developer would go about reusing the feature

**Good luck!**

## Detailed Refactoring Strategy and Usage

### Refactoring Strategy

1. Extracting Logic into Utility Functions: The logic for computing distinct countries, classifications, and subclassifications was extracted from the DomainFilter component into a reusable lib function. This enhances testability and reusability across components.

2. Transition to Functional Components: The DomainFilter was refactored from a class component to a functional component using React hooks, aligning with modern React best practices and simplifying component structure.

3. Hook Integration for State Logic: The FilterDomain component now utilizes custom hooks for improved state management and reusability. The useDomainParts hook abstracts the logic for computing distinct lists of countries, classifications, and subclassifications, making the component cleaner and more modular.

4. Modularization with Subcomponents: To further enhance modularity and readability, FilterDomain has been refactored to include subcomponents for each select input: CountrySelect, ClassificationSelect, and SubclassificationSelect.

### Future Enhancements

Given more time, the following enhancements could further improve the component:

1. In a real world application, domain data should be handled asynchronously as if it was a remote source (HTTP Api, Database call, read from file). This involves managing loading states, handling errors gracefully, and ensuring the component remains responsive and efficient when dealing with asynchronous data. We could use simple `useEffect` and `useState` hooks or specialized libraries like React Query or SWR based on the complexity of what we want to achieve.

2. We might want to customize a bit more the sub components by lifting up their local state (onChange functions) to get back the selected values in the main component.

### Using the Modified Code in Other Components

1. Integrate the hook:

```typescript
import useDomainParts from './hooks/useDomainParts';
```

2. Use this function to process your domain data:

```typescript
const { countries, classifications, subClassifications } =
  useDomainParts(domains);
```
