---
toc: content
demo:
  cols: 2
---

## 尺寸     

size:
		| "2xs"
		| "xs"
		| "sm"
		| "lg"
		| "xl"
		| "2xl"
		| "1x"
		| "2x"
		| "3x"
		| "4x"
		| "5x"
		| "6x"
		| "7x"
		| "8x"
		| "9x"
		| "10x";


```tsx
import  {Spinner}  from 'aui';

export default () =>  (
        <div>
            <Spinner size="2xs"/>
            <Spinner size="xs"/>
            <Spinner size="sm"/>
            <Spinner size="lg"/>
            <Spinner size="xl"/>
            <Spinner size="2xl"/>
            
        </div>
	);
```

## 类型

```tsx
import  {Spinner}  from 'aui';

export default () =>  (
        <div>
            <Spinner size="lg" type="spinner"/>
            <Spinner size="lg" type="circle-notch"/>
        </div>
	);
```