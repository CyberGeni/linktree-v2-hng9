function FormInput(props) {
  return (
    <>
      <div className="sm:w-full">
        <label htmlFor="">First Name</label>
        <input 
            required
            type={props.type} 
            placeholder={props.placeholder} 
            onChange={e=>props.setUsername(e.target.value)}
            className="flex border invalid:border-red-600 border-gray-400 rounded shadow px-3 py-2 w-full"
        />
      </div>
    </>
  );
}

export default FormInput;
