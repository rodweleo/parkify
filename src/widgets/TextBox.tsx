export const TextBox = ({ id, type, label, placeholder }) => {
    return <div className="w-full flex flex-col bg-white relative rounded-md px-4" id="text-box">
        <label htmlFor={id} id="input-box-label" className=" hidden absolute top-[20%] left-8 font-bold text-slate-400">{label}</label>
        <div className="flex items-center">
            <i className="fa-solid fa-search text-slate-400"></i>
            <input type={type} id={id} className="bg-transparent py-2 ml-2 text-lg w-full outline-none" placeholder={placeholder} />
            <button type="button"><i className="fa-solid fa-filter text-slate-400 ml-4"></i></button>
        </div>
    </div>
}