# useForm

**Description:** control the value of the components of a from component.


```js
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };
    
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );
```

```html
    <form>
        <input 
            ...
            name="email"
            value={email}
            onChange={ handleInputChange }                    
        />
        ...
    </form>
```