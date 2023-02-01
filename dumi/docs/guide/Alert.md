---
toc: content
demo:
  cols: 2
---

## 类型     

`primary`，`success`，`warning`，`danger`


```tsx
import  {Alert}  from 'aui';
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";


export default () =>  (
        <div>
            <div className="mb-5"><Alert type="primary">A simple primary alert - check it out!</Alert></div>
            
            <div className="mb-5"><Alert type="warning">A simple warning alert - check it out!</Alert></div>
            <div className="mb-5"><Alert type="danger">A simple danger alert - check it out!</Alert></div>
            <div className="mb-5"><Alert type="success">A simple success alert - check it out!</Alert></div>
        </div>
	);
```