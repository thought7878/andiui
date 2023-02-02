---
toc: content
demo:
  cols: 2
---

## 尺寸

### 预定义

size: "sm" | "md" |"lg"

```tsx
import { Spinner } from "aui";

export default () => (
	<div>
		<Spinner size="sm" type="ring" />
		<Spinner size="md" type="ring" />
		<Spinner size="lg" type="ring" />
	</div>
);
```

### 自定义大小

style: 任意值，如："18px" | "1rem" |"1em"

```tsx
import { Spinner } from "aui";

export default () => (
	<div>
		<Spinner style={{ fontSize: "1rem" }} />
		<Spinner style={{ width: "2rem", height: "2rem" }} />
		<Spinner style={{ fontSize: "28px" }} />
		<Spinner style={{ width: "38px", height: "38px" }} />
	</div>
);
```

## 类型/type

值: ring ｜ dot，默认值：ring

```tsx
import { Spinner } from "aui";

export default () => (
	<div>
		<Spinner size="lg" />
		<Spinner size="md" type="dot" />
	</div>
);
```

## 颜色/color

type：string，
值：颜色值，如：#3b82f6

```tsx
import { Spinner } from "aui";

export default () => (
	<div>
		<Spinner size="lg" color="#3b82f6" />
		<Spinner size="lg" color="#ec4899" />
		<Spinner size="lg" color="#f97316" />
		<Spinner size="md" color="#3b82f6" type="dot" />
		<Spinner size="md" color="#ec4899" type="dot" />
		<Spinner size="md" color="#f97316" type="dot" />
	</div>
);
```
