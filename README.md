# React API Hooks

React hooks for easily adding API calls to a functional component.

Uses [axios](https://github.com/axios/axios) for making all requests.

Includes two hooks that can be used:

- `useAPI`: Use data returned from an API in your component.
- `useParams`: Hold parameters used for an API in state, and provide methods for immediate and debounced updates to the parameters.

## Usage

### useAPI

Perform an API call and pass the data returned from the API to a UI component.

```javascript
import React from 'react';
import { useAPI } from 'react-api-hooks';

const Component = () => {
  const { isLoading, data, error } = useAPI(url);

  if (error) {
    return <div>An error occured.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <UIComponent data={data} />;
};
```

### useParams

Perform an API call using parameters to filter the results.

`debouncedUpdateParams` can be used to delay the API call until the user has stopped typing for 500ms.
`updateParams` can be used to immediately fire the update API call.

```javascript
const Component = () => {
  const { params, updateParams, debouncedUpdateParams } = useParams();
  const { isLoading, data, error } = useAPI(url, { params });

  if (error) {
    return <div>An error occured.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchInput onChange={e => debouncedUpdateParams({ search: e.target.value })} />
      <CategorySelect onChange={e => updateParams({ category: e.target.value })} />
      <UIComponent data={data} />
    </>
  );
};
```

## Reference

### useAPI

#### Params

```javascript
useAPI(url, (config = {}));
```

##### url: string

`required`

The URL that the API call is made to.

##### config: object

`default: {}`

Axios config object passed directly to the `axios.request` method.

#### Returns

```javascript
{
  data, response, error, isLoading;
}
```

##### data: object

The `response.data` object returned from axios or undefined.

##### response: object

The `response` object returned from axios or undefined.

##### error: object

The `error` object returned by axios or undefined.

##### isLoading: boolean

If there is an active request being made to the UI.

### useParams

#### Params

```javascript
useParams((initialParams = {}), (debounceDelay = 500));
```

##### initialParams: object

`default: {}`

The initial params on first render.

##### debounceDelay=500

`default: 500`

Delay updating the params, in order to prevent calling the API before the user stops typing.

E.g. Wait for the user to stop typing for 500ms, before you make another API call.

#### Returns

```javascript
{
  params, setParams, updateParams, isStale, debouncedSetParams, debouncedUpdateParams;
}
```

##### params: object

The params that should be used in the next API call.

##### setParams: func

Function used to change parameters object. (Wipes old params object.)

##### updateParams: func

Function used to update the parameters object. (Merges with old params object.)

##### isStale: boolean

Has a debounced param update been made? 
If it has then `isStale=true` indicating that the current data is stale/irrelevant and the component is
waiting for the `debounceDelay` to pass before fetching the updated data.

##### debouncedSetParams: func

Debounced call to the `setParams` method.

##### debouncedUpdateParams: func

Debounced call to the `updateParams` method.
