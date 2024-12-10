```javascript
function calculateReward(amount) {
  if (typeof amount !== 'number' || isNaN(amount)) {
    throw new Error("Invalid amount: must be a number");
  }
  if (amount < 0) {
    throw new Error("Amount cannot be negative");
  }
  // ... rest of the reward calculation logic
}
```
The solution enhances the `calculateReward` function by adding a check for non-numeric inputs using `typeof amount !== 'number'` and `isNaN(amount)`.  It ensures the input is both numeric and not `NaN` before proceeding with the calculation.