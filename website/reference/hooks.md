## Functions

<dl>
<dt><a href="#useAPI">useAPI(url, config)</a> ⇒ <code><a href="#useAPIReturn">useAPIReturn</a></code></dt>
<dd><p>React hook used to make a an API call using axios.</p>
<p>Allows you to pass an axios config object, for complete control of the request being sent.</p>
</dd>
<dt><a href="#useParams">useParams(initialParams, debounceDelay)</a></dt>
<dd><p>React hook to keep query parameters in state, that can be used for the API calls.</p>
<p>Includes the ability the debounce an update, which is useful for delaying API calls while the user is typing.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#useAPIReturn">useAPIReturn</a> : <code>Object</code></dt>
<dd><p>The object returned by the useAPI hook.</p>
</dd>
<dt><a href="#useParamsOutput">useParamsOutput</a> : <code>Object</code></dt>
<dd><p>The object returned by the useParams hook.</p>
</dd>
</dl>

<a name="useAPI"></a>

## useAPI(url, config) ⇒ [<code>useAPIReturn</code>](#useAPIReturn)

Allows you to pass an axios config object, for complete control of the request being sent.

**Kind**: global function
**Returns**: [<code>useAPIReturn</code>](#useAPIReturn) - result

| Param  | Type                | Description                                             |
| ------ | ------------------- | ------------------------------------------------------- |
| url    | <code>string</code> | URL that the API call is made to.                       |
| config | <code>Object</code> | Axios config object passed to the axios.request method. |

<a name="useParams"></a>

## useParams(initialParams, debounceDelay)

Includes the ability the debounce an update, which is useful for delaying API calls while the user is typing.

**Kind**: global function

| Param         | Type                | Default          | Description                                                               |
| ------------- | ------------------- | ---------------- | ------------------------------------------------------------------------- |
| initialParams | <code>Object</code> |                  | The initial parameters to keep in states                                  |
| debounceDelay | <code>number</code> | <code>500</code> | The time to debounce the params update when calling debouncedUpdateParams |

<a name="useAPIReturn"></a>

## useAPIReturn : <code>Object</code>

The object returned by the useAPI hook.

**Kind**: global typedef
**Properties**

| Name             | Type                                          | Description                                 |
| ---------------- | --------------------------------------------- | ------------------------------------------- |
| data             | <code>Object</code> \| <code>undefined</code> | The data attribute from the axios response. |
| response         | <code>Object</code> \| <code>undefined</code> | The axios response.                         |
| error            | <code>Object</code> \| <code>undefined</code> | The axios error object is an error occurs.  |
| result.isLoading | <code>boolean</code>                          | Indicates if their is a pending API call.   |
| result.setData   | <code>function</code>                         | Update the response data object.            |

<a name="useParamsOutput"></a>

## useParamsOutput : <code>Object</code>

The object returned by the useParams hook.

**Kind**: global typedef
**Properties**

| Name      | Type                  | Description                                                                                         |
| --------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| params    | <code>Object</code>   | The current params to be used when making an API call.                                              |
| isStale   | <code>boolean</code>  | Is their a debounced params update waiting to timeout. (Are we waiting for the user to stop typing) |
| setParams | <code>function</code> | Function used to set new parameters                                                                 |
