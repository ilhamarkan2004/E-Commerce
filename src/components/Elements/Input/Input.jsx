const Input = (props) => {
    const{type, placeholder,name} = props
    return (
      <input
        type={type}
        className=" w-full text=sm border py-2 px-3 text-slate-700 placeholder:opacity-50"
        placeholder={placeholder} name={name} id={name}
      />
    );
}
export default Input;