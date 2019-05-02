<a name="useAPI"></a>

## useAPI(url, config) ⇒ [<code>useAPIOutput</code>](#useAPIOutput)
React hook used to make a an API call using axios.

Allows you to pass an [axios config object](https://github.com/axios/axios#request-config), for complete control of the request being sent.

**Kind**: global function  
**Returns**: [<code>useAPIOutput</code>](#useAPIOutput) - output  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  | URL that the API call is made to. |
| config | <code>Object</code> | <code>{}</code> | Axios config object passed to the axios.request method. |

<a name="useAPIOutput"></a>

## useAPIOutput : <code>Object</code>
The object returned by the useAPI hook.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> \| <code>undefined</code> | The data attribute from the axios response. |
| response | <code>Object</code> \| <code>undefined</code> | The axios response. |
| error | <code>Object</code> \| <code>undefined</code> | The axios error object is an error occurs. |
| isLoading | <code>boolean</code> | Indicates if their is a pending API call. |
| setData | [<code>setDataFunc</code>](#setDataFunc) | Set the response data object. |

<a name="setDataFunc"></a>

## setDataFunc : <code>function</code>
`setData` property of `useAPIOutput`

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| newData | <code>Array.&lt;Object&gt;</code> | New data array that overwrites current data. |

