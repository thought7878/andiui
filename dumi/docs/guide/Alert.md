---
toc: content
demo:
  cols: 2
---

## 类型

### 内置样式

`primary`，`success`，`warning`，`danger`

```tsx
import { Alert } from "aui";

export default () => (
	<div>
		<div className="mb-5">
			<Alert type="primary">A simple primary alert - check it out!</Alert>
		</div>

		<div className="mb-5">
			<Alert type="warning">A simple warning alert - check it out!</Alert>
		</div>
		<div className="mb-5">
			<Alert type="danger">A simple danger alert - check it out!</Alert>
		</div>
		<div className="mb-5">
			<Alert type="success">A simple success alert - check it out!</Alert>
		</div>
	</div>
);
```

### 自定义样式

#### 自定义背景色

```tsx
import { Alert } from "aui";

export default () => (
	<div>
		<div className="mb-5">
			<Alert className="bg-sky-600">自定义背景色: bg-sky-600</Alert>
		</div>
		<div className="mb-5">
			<Alert className="bg-rose-600">自定义背景色: bg-rose-600</Alert>
		</div>
	</div>
);
```

#### 自定义 padding

```tsx
import { Alert } from "aui";

export default () => (
	<div>
		<div className="mb-5">
			<Alert className="px-18 bg-sky-600 py-16">自定义padding</Alert>
		</div>
	</div>
);
```

## 关闭按钮

```tsx
import { Alert } from "aui";

export default () => (
	<div>
		<div className="mb-5">
			<Alert type="primary" closeBtn>
				A simple primary alert - check it out!
			</Alert>
		</div>

		<div className="mb-5">
			<Alert type="warning" closeBtn>
				A simple warning alert - check it out!
			</Alert>
		</div>
		<div className="mb-5">
			<Alert type="danger" closeBtn>
				A simple danger alert - check it out!
			</Alert>
		</div>
		<div className="mb-5">
			<Alert type="success" closeBtn>
				A simple success alert - check it out!
			</Alert>
		</div>
	</div>
);
```

## 位置

### 内置位置

右上/右下，左上/左下

position: "right-top" | "right-bottom" | "left-top" | "left-bottom"

```tsx
import { Alert } from "aui";

export default () => (
	<div>
		<div className="mb-5">
			<Alert type="primary" closeBtn>
				没有设置 postion
			</Alert>
		</div>
		<div className="mb-5">
			<Alert type="primary" closeBtn position="right-top">
				right-top
			</Alert>
		</div>

		<div className="mb-5">
			<Alert type="warning" closeBtn position="right-bottom">
				right-bottom
			</Alert>
		</div>
		<div className="mb-5">
			<Alert type="danger" closeBtn position="left-top">
				left-top
			</Alert>
		</div>
		<div className="mb-5">
			<Alert type="success" closeBtn position="left-bottom">
				left-bottom
			</Alert>
		</div>
	</div>
);
```

### 自定义位置

自定义位置：left-center

```tsx
import { Alert } from "aui";

export default () => (
	<div>
		<div className="mb-5">
			<Alert type="primary" closeBtn className="fixed top-1/2 left-8">
				自定义位置：left-center
			</Alert>
		</div>
	</div>
);
```

## 间隔自动关闭
