<a name="useParams"></a>

## useParams(initialParams, debounceWait) ⇒ [<code>useParamsOutput</code>](#useParamsOutput)
React hook to keep query parameters in state.

Used in conjunction with the other hooks to filter and paginate APIs.

Includes the ability the debounce an update, which is useful for delaying API calls while the user is typing.

**Kind**: global function  
**Returns**: [<code>useParamsOutput</code>](#useParamsOutput) - output  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| initialParams | <code>Object</code> |  | The initial parameters to keep in states |
| debounceWait | <code>number</code> | <code>500</code> | The time to debounce the params update when calling debouncedUpdateParams |

<a name="useParamsOutput"></a>

## useParamsOutput : <code>Object</code>
The object returned by the useParams hook.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | The current params to be used when making an API call. |
| isStale | <code>boolean</code> | Is their a debounced params update waiting to timeout. (Are we waiting for the user to stop typing) |
| setParams | [<code>setParamsFunc</code>](#setParamsFunc) | Function used to set new parameters |
| updateParams | [<code>updateParamsFunc</code>](#updateParamsFunc) | Function used to update current parameters |
| debouncedSetParams | [<code>setParamsFunc</code>](#setParamsFunc) | Debounced call made to `setParams` |
| debouncedUpdateParams | [<code>updateParamsFunc</code>](#updateParamsFunc) | Debounced call made to `updateParams` |

<a name="setParamsFunc"></a>

## setParamsFunc : <code>function</code>
`setParams` property of `useParamsOutput`

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| newParams | <code>Object</code> | New params object that overwrites the current params. |

<a name="updateParamsFunc"></a>

## updateParamsFunc : <code>function</code>
`updateParams` property of `useParamsOutput`

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| paramsUpdate | <code>Object</code> | Partial update to be merged with current params. |

