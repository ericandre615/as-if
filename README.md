# asIf
## for all your conditional logic needs

`asIf` will check your logic and call your function returning it's value if the condition is true

**note**: pairs well with [asFor](https://github.com/ericandre615/as-for)

### Examples

```
const twoPlusTwo = () => 2 + 2;

const notFour = asIf(false, twoPlusTwo);
// undefined

const four = asIf(true, twoPlusTwo);
// 4
```

simple as that
