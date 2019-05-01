## Functions

<dl>
<dt><a href="#useParams">useParams(initialParams, debounceDelay)</a> ⇒ <code><a href="#useParamsOutput">useParamsOutput</a></code></dt>
<dd><p>React hook to keep query parameters in state, that can be used for the API calls.</p>
<p>Includes the ability the debounce an update, which is useful for delaying API calls while the user is typing.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#useParamsOutput">useParamsOutput</a> : <code>Object</code></dt>
<dd><p>The object returned by the useParams hook.</p>
</dd>
</dl>

<a name="useParams"></a>

## useParams(initialParams, debounceDelay) ⇒ [<code>useParamsOutput</code>](#useParamsOutput)
React hook to keep query parameters in state, that can be used for the API calls.Includes the ability the debounce an update, which is useful for delaying API calls while the user is typing.

**Kind**: global function  
**Returns**: [<code>useParamsOutput</code>](#useParamsOutput) - output  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| initialParams | <code>Object</code> |  | The initial parameters to keep in states |
| debounceDelay | <code>number</code> | <code>500</code> | The time to debounce the params update when calling debouncedUpdateParams |

<a name="useParamsOutput"></a>

## useParamsOutput : <code>Object</code>
The object returned by the useParams hook.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | The current params to be used when making an API call. |
| isStale | <code>boolean</code> | Is their a debounced params update waiting to timeout. (Are we waiting for the user to stop typing) |
| setParams | <code>function</code> | Function used to set new parameters |

