export const ProfileMenuWidget = ({ iconName, label }) => {
    return <div className="flex items-center gap-2">
        <i className={`${iconName} bg-slate-900/20 p-3 rounded-full w-10 flex items-center justify-center text-white`}></i>
        <h2 className="font-bold text-xl text-slate-600">{label}</h2>
    </div>
}