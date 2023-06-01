## Errors

1. MutationObserver is not a constructor

- CRA is using lower version of Jest dom than it's required. that's why

2. findRole with Regex

3) Uncaught Error: Rendered fewer hooks than expected. This may be caused by an accidental early return statement in React Hooks

solution

```
Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.
```
