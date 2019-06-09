# React API Hooks
![](https://img.shields.io/bundlephobia/minzip/react-api-hooks.svg)
![](https://img.shields.io/github/license/abwalters/react-api-hooks.svg)
![](https://img.shields.io/badge/React-%5E16.8.0-green.svg)
![](https://img.shields.io/badge/axios-%5E0.17.1-green.svg)

React hooks to interact with an API from a stateless component using axios.

## Features:
 - Uses axios and allows for complete request control
 - Works with stateless/functional components
 - Ability to filter and paginate API results
 - Ability to delay API calls while the user is typing
 - Works with infinite scroll components
 - Request auto-cancellation for concurrent requests or component unmount

## Examples:
- [Basic](https://react-api-hooks.abwalters.now.sh/examples/basic/)
- [Pagination](https://react-api-hooks.abwalters.now.sh/examples/pagination/)
- [Filtering](https://react-api-hooks.abwalters.now.sh/examples/filter/)
- [Infinite Scroll](https://react-api-hooks.abwalters.now.sh/examples/inf-scroll/)

## Installation:
```
npm i react-api-hooks -s
```

## Basic Usage:
```javascript
import { useAPI } from 'react-api-hooks';

const TestComponent = () => {
  const { data=[], error, isLoading } = useAPI(url);
  
 if (error){
   return <Error />
 }
        
 if (isLoading){
   return <Loading />
 }
    
  return (
      <div>
        {data.map(item => <span key={item.id}>{item.text}</span>)}
      </div>
    )
}
```

## Advanced Usage
```javascript
import { useAPI } from 'react-api-hooks';

const TestComponent = () => {
  const axiosConfig = {
    method: 'POST',
    data: { foo: 'bar' },
    params: { id: '14' }
  };
  const { response, error, isLoading } = useAPI(url, axiosConfig);
  
 if (error){
   return <Error />
 }
        
 if (isLoading){
   return <Loading />
 }
    
  return (
      <div>
        {response.data.map(item => <span key={item.id}>{item.text}</span>)}
      </div>
    )
}
```

## Reference:

- [useAPI](https://react-api-hooks.abwalters.now.sh/reference/use-api/)
- [useParams](https://react-api-hooks.abwalters.now.sh/reference/use-params/)
- [useInfAPI](https://react-api-hooks.abwalters.now.sh/reference/use-inf-api/)
