```javascript
function calculateReward(amount) {
  if (amount < 0) {
    throw new Error("Amount cannot be negative");
  }
  // ... rest of the reward calculation logic
}
```
In this code, the error handling for negative input is good.  However, it only checks for negative numbers. It does not handle cases like non-numeric input, which would cause a runtime error in the calculation logic.