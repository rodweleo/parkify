import { NavLink, Outlet } from "react-router-dom"

export const Parkify = () => {
    return <main className="w-full flex flex-col justify-between items-center h-screen bg-slate-200">
        <section className="w-screen h-full overflow-y-auto p-2.5">
            <Outlet />
        </section>

        <nav className="w-4/5 mb-4 py-3 text-xl rounded-full flex justify-around bg-slate-500/40">
            <NavLink to="explore" className="nav-link"><i className="fa-solid fa-compass"></i></NavLink>
            <NavLink to="notifications" className="nav-link"><i className="fa-solid fa-bell"></i></NavLink>
            <NavLink to="profile" className="nav-link"><i className="fa-solid fa-user"></i></NavLink>
        </nav>
    </main>

}