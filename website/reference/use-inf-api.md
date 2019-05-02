<a name="useInfAPI"></a>

## useInfAPI(url, config, paginator, responseToItems) ⇒ [<code>useInfAPIOutput</code>](#useInfAPIOutput)
React hook used by an infinite scrolling component to make API calls using axios.

Allows you to pass an [axios config object](https://github.com/axios/axios#request-config), for complete control of the request being sent.

By default it will paginate using a query param `offset`, and assumes that the API returns an array of items.

If this is not appropriate for your API, then you will need to provide your own `paginator` and `responseToItems` functions.

**Kind**: global function  
**Returns**: [<code>useInfAPIOutput</code>](#useInfAPIOutput) - output  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  | URL that the API call is made to. |
| config | <code>Object</code> | <code>{}</code> | Axios config object passed to the axios.request method. |
| paginator | [<code>paginatorFunc</code>](#paginatorFunc) | <code>offsetPaginator</code> | Function used to update the config object in order to paginate |
| responseToItems | <code>function</code> | <code>responseToData</code> | Function used to extract an array of items from response object. |

<a name="paginatorFunc"></a>

## paginatorFunc ⇒ <code>Array.&lt;Object&gt;</code>
Paginator function used to alter the axios config object, in order to fetch the next page.

**Kind**: global typedef  
**Returns**: <code>Array.&lt;Object&gt;</code> - output  - Return tuple \[updatedConfig: Object, updatedPaginationState: Object\]  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Axios config object |
| paginationState | <code>Object</code> | Object kept internally to keep track of pagination |

<a name="responseToItemsFunc"></a>

## responseToItemsFunc ⇒ <code>Object</code>
Function used to extract items from the API response.

**Kind**: global typedef  
**Returns**: <code>Object</code> - output  - Return tuple \[items: Object[], hasMore: boolean\]  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>Object</code> | Axios response object |

<a name="useInfAPIOutput"></a>

## useInfAPIOutput : <code>Object</code>
The object returned by the useInfAPI hook.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;Object&gt;</code> | Items provided by the API |
| error | <code>Object</code> \| <code>undefined</code> | The axios error object is an error occurs. |
| isLoading | <code>boolean</code> | Indicates if their is a pending API call for the **first** page of items. |
| isPaging | <code>boolean</code> | Indicates if their is a pending API call for the **any** page of items. |
| setItems | [<code>setItemsFunc</code>](#setItemsFunc) | Set the items being kept in state |
| fetchPage | [<code>responseToItemsFunc</code>](#responseToItemsFunc) | Function called from the component in order to fetch the next page |

<a name="setItemsFunc"></a>

## setItemsFunc : <code>function</code>
`setItems` property of `useInfAPIOutput`

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| newItems | <code>Array.&lt;Object&gt;</code> | New items array that overwrites current data. |

