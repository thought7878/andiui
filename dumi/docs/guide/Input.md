---
toc: content
demo:
  cols: 2
---

## 尺寸

`inputSize`设置 input 大小，支持 lg 或者是 sm

### lg

```tsx
import { Input } from "aui";

export default () => (
	<div style={{ width: 300 }}>
		<Input inputSize="lg" />
	</div>
);
```

### sm

```tsx
import { Input } from "aui";

export default () => (
	<div style={{ width: 300 }}>
		<Input inputSize="sm" />
	</div>
);
```

## 禁用

```tsx
import { Input } from "aui";

export default () => (
	<div style={{ width: 300 }}>
		<Input disabled inputSize="lg" />
		<Input inputSize="lg" />
	</div>
);
```

```tsx
import { Input } from "aui";

export default () => (
	<div style={{ width: 300 }}>
		<Input disabled inputSize="sm" />
		<Input inputSize="sm" />
	</div>
);
```

## 带图标

添加图标，在右侧悬浮添加一个图标，用于提示

```tsx
import { Input } from "aui";
import { BiDownload } from "react-icons/bi";

export default () => (
	<div style={{ width: 300 }}>
		<Input placeholder="icon download" icon={<BiDownload size="16px" />} />
	</div>
);
```

## 前缀

添加前缀 用于配置一些固定组合

```tsx
import { Input } from "aui";

export default () => (
	<div style={{ width: 300 }}>
		<Input placeholder="example@qq.com" type={"email"} prepend="Email:" />
	</div>
);
```

## 后缀

添加后缀 用于配置一些固定组合

```tsx
import { Input } from "aui";

export default () => (
	<div style={{ width: 300 }}>
		<Input placeholder="例如：google" append=".com" />
	</div>
);
```
