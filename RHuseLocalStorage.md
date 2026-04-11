## ankhema-react

### 🪝 useLocalStroge Hook

##How to use
  ```javascript
    const [name, setName, storageError] = useLocalStorage('user_name', 'Guest');
    
    return (
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        {storageError && <p style={{color: 'red'}}>Error: {storageError.message}</p>}
      </div>
    );
  ```