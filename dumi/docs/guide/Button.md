---
nav:
    title: Components
    path: /components
toc: content

---


<!-- <code src="../../../src/demos/button.tsx"></code> -->

## btnType

### primary

```tsx
import  {Button}  from 'aui';
export default () => <Button btnType="primary">Hello dumi!</Button>;
```
### default

```tsx
import  {Button}  from 'aui';
export default () => <Button>Hello dumi!</Button>;
```
### danger

```tsx
import  {Button}  from 'aui';
export default () => <Button btnType="danger">Hello dumi!</Button>;
```
### link
```tsx
import  {Button}  from 'aui';

export default () => <Button btnType="link">Hello dumi!</Button>;
```

## 尺寸

### size=sm

```tsx
import  {Button}  from 'aui';
export default () => <div>
<Button btnType="primary" size="sm">Hello dumi!</Button>
<Button  size="sm">Hello dumi!</Button>
<Button btnType="danger" size="sm">Hello dumi!</Button>
<Button btnType="link" size="sm">Hello dumi!</Button>
</div>;
```

### size=default

```tsx
import  {Button}  from 'aui';
export default () => <div>
<Button btnType="primary">Hello dumi!</Button>
<Button >Hello dumi!</Button>
<Button btnType="danger">Hello dumi!</Button>
<Button btnType="link">Hello dumi!</Button>
</div>;
```

### size=lg

```tsx
import  {Button}  from 'aui';
export default () => <div>
<Button btnType="primary" size="lg">Hello dumi!</Button>
<Button  size="lg">Hello dumi!</Button>
<Button btnType="danger" size="lg">Hello dumi!</Button>
<Button btnType="link" size="lg">Hello dumi!</Button>
</div>;
```

## disabled

```tsx
import  {Button}  from 'aui';
export default () => <div>
<Button btnType="primary" disabled>Hello dumi!</Button>
<Button disabled>Hello dumi!</Button>
<Button btnType="danger" disabled>Hello dumi!</Button>
<Button btnType="link" disabled>Hello dumi!</Button>
</div>;
```








