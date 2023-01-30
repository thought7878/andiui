---
toc: content
demo:
  cols: 2
---

## 异步     

`inputSize`

```tsx
import  {AutoComplete}  from 'aui';

function fetchSuggestions(keyword: string) {
    return fetch(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) => {
            return res.json();
        })
        .then(({ items }) => {
            return items.slice(0, 10).map((item: { login: any }) => {
                return { value: item.login, ...item };
            });
        });
}

export default () =>  (
        <AutoComplete
            fetchSuggestions={fetchSuggestions}
        />
	);
```