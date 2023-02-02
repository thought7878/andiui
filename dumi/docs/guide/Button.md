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
## icon

```tsx
import  {Button}  from 'aui';
import { BiDownload } from "react-icons/bi";

export default () => <div className="m-5 flex items-center space-x-5">
				<Button leftIcon={<BiDownload size="18px" />} btnType="primary">
					show code
				</Button>
				<Button rightIcon={<BiDownload size="18px" />}>left button</Button>
				<Button leftIcon={<BiDownload size="18px" />} btnType="danger">
					left button
				</Button>
			</div>;
```
## 只有icon

```tsx
import  {Button}  from 'aui';
import { BiDownload } from "react-icons/bi";

export default () => <div className="m-5 flex items-center space-x-5">
                <Button size="sm" >
					<BiDownload size="18px" />
				</Button>
				<Button btnType="primary">
					<BiDownload size="18px" />
				</Button>
				
				<Button btnType="danger" size="lg">
					<BiDownload size="18px" />
				</Button>
			</div>;
```
## loading

```tsx
import  {Button}  from 'aui';

export default () => <div className="m-5 flex items-center space-x-5">
                <Button size="lg" loading >
					加载中...
				</Button>
                 <Button size="lg" loading btnType="primary" >
					加载中...
				</Button>
                 <Button size="lg" loading btnType="danger" >
					加载中...
				</Button>
			
			</div>;
```








