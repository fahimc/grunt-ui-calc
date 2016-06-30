# grunt-ui-calc

This is a grunt plugin to do math calculations on files such as HTML templates.  

It works the same as `calc()` in CSS.

## Syntax  

```
-ui-calc(600 - 4)-
```

## Examples

```
<td width="-ui-calc(400 / 2)-"></td>

<td width="-ui-calc(400 * 0.5)-"></td>

<td width="-ui-calc(400 + 2)-"></td>

<td width="-ui-calc(400 - 6)-"></td>
``` 