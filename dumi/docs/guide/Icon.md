---
toc: content
demo:
  cols: 2
---

## icon

- ⚠️ 注意：该组件依赖 [react-icons](https://github.com/react-icons/react-icons) ，请先安装，再使用！
- ⚠️ 提示：import 时，`Ai*`<--->`react-icons/ai` 或 `Bi*`<--->`react-icons/bi`，如下：

```javascript
import { Ai* } from "react-icons/ai"
import { Bi* } from "react-icons/bi";
```

### 使用 icon 的第一种方式

```tsx
import { Icon } from "aui";
import { AiFillExclamationCircle } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";

export default () => (
	<div className="m-5 flex items-center space-x-5">
		<Icon icon={<BiDownload size="2rem" />} />
		<Icon icon={<AiFillExclamationCircle size="2rem" />} />
	</div>
);
```

### 使用 icon 的第二种方式

```tsx
import { Icon } from "aui";
import { AiFillExclamationCircle } from "react-icons/Ai";
import { BiDownload } from "react-icons/bi";

export default () => (
	<div className="m-5 flex items-center space-x-5">
		<Icon>
			<BiDownload size="2rem" />
		</Icon>
		<Icon>
			<AiFillExclamationCircle size="2rem" />
		</Icon>
	</div>
);
```

## size

size 的值：尺寸单位，px/rem/em，例如：32px/2rem/2em

```tsx
import { Icon } from "aui";
import { BiDownload } from "react-icons/bi";

export default () => (
	<div>
		<div className="m-5 flex items-center space-x-5">
			<Icon icon={<BiDownload size="16px" />} />
			<Icon icon={<BiDownload size="2rem" />} />
			<Icon icon={<BiDownload size="4em" />} />
		</div>
	</div>
);
```

## color

颜色值，例如，#a0d911、rgba(39, 176, 245, 0.8)

```tsx
import { Icon } from "aui";
import { BiDownload } from "react-icons/bi";

export default () => (
	<div>
		<div className="m-5 flex items-center space-x-5">
			<Icon icon={<BiDownload size="32px" color="#a0d911" />} />
			<Icon icon={<BiDownload size="2rem" color="#faad14" />} />
			<Icon icon={<BiDownload size="2em" color="#ff4d4f" />} />
		</div>
		<div className="m-5 flex items-center space-x-5">
			<Icon icon={<BiDownload size="32px" color="rgba(39, 176, 245, 0.8)" />} />
			<Icon icon={<BiDownload size="2rem" color="rgba(108, 245, 39, 0.3)" />} />
			<Icon icon={<BiDownload size="2em" color="rgba(245, 125, 39, 0.8)" />} />
		</div>
	</div>
);
```

## style

自定义 size 和 color

Can overwrite size and color

```tsx
// TODO 待完成
import { Icon } from "aui";
import { BiDownload } from "react-icons/bi";

export default () => (
	<div>
		<div className="m-5 flex items-center space-x-5">
			<Icon icon={<BiDownload size="32px" color="#a0d911" />} />
			<Icon icon={<BiDownload size="2rem" color="#faad14" />} />
			<Icon icon={<BiDownload size="2em" color="#ff4d4f" />} />
		</div>
		<div className="m-5 flex items-center space-x-5">
			<Icon icon={<BiDownload size="32px" color="rgba(39, 176, 245, 0.8)" />} />
			<Icon icon={<BiDownload size="2rem" color="rgba(108, 245, 39, 0.3)" />} />
			<Icon icon={<BiDownload size="2em" color="rgba(245, 125, 39, 0.8)" />} />
		</div>
	</div>
);
```

## className
