const AddToList = () => {
    const [search, setSearch] = useState("");
    const [list, setList] = useState([]);
  
  
    const updateSearch = (e) => {
      setSearch(e.target.value);
      console.log(search);
    };
   
    
    const updateList = () => {
      setList([...list, search]);
      setSearch("");
      console.log(list);
    };
  
    return (
      <div>
        <h1>Welcome on your todolist</h1>
        <br />
        <input type="text" onChange={updateSearch} value={search} />
        <button onClick={updateList}>enter</button>
        <h2>Add to List</h2>
  
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AddToList;
  