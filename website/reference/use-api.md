## Functions

<dl>
<dt><a href="#useAPI">useAPI(url, config)</a> ⇒ <code><a href="#useAPIOutput">useAPIOutput</a></code></dt>
<dd><p>React hook used to make a an API call using axios.</p>
<p>Allows you to pass an axios config object, for complete control of the request being sent.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#useAPIOutput">useAPIOutput</a> : <code>Object</code></dt>
<dd><p>The object returned by the useAPI hook.</p>
</dd>
</dl>

<a name="useAPI"></a>

## useAPI(url, config) ⇒ [<code>useAPIOutput</code>](#useAPIOutput)
React hook used to make a an API call using axios.Allows you to pass an axios config object, for complete control of the request being sent.

**Kind**: global function  
**Returns**: [<code>useAPIOutput</code>](#useAPIOutput) - output  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL that the API call is made to. |
| config | <code>Object</code> | Axios config object passed to the axios.request method. |

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
| setData | <code>function</code> | Update the response data object. |

