import { NavLink } from "react-router-dom"
import { ProfileMenuWidget } from "../../../widgets/profile/ProfileMenuWidget"

export const Profile = () => {
    return <section className="h-full">
        <h1 className="font-bold">Profile</h1>
        <div className="flex items-center w-full justify-center">
            <img src="https://th.bing.com/th/id/OIP.8KaWULH9WeQ9MJaoe1oYVQHaHa?rs=1&pid=ImgDetMain" alt="" className="rounded-full w-28" />
        </div>
        <nav className="flex flex-col mt-5 gap-20 w-full p-5">
            <ul className="space-y-3">
                <li><NavLink to="/parking-tickets">
                    <ProfileMenuWidget iconName="fa-solid fa-ticket" label="Parking Tickets" />
                </NavLink></li>
                <li><NavLink to="/wallet">
                    <ProfileMenuWidget iconName="fa-solid fa-wallet" label="Wallet" />
                </NavLink></li>
                <li><NavLink to="/my-vehicles">
                    <ProfileMenuWidget iconName="fa-solid fa-car" label="Manage Vehicles" />
                </NavLink></li>
                <li><NavLink to="/bookings">
                    <ProfileMenuWidget iconName="fa-solid fa-calendar-check" label="Bookings" />
                </NavLink></li>
                <li>
                    <NavLink to="/help"><ProfileMenuWidget iconName="fa-solid fa-question" label="Help" /></NavLink>
                </li>

            </ul>

            <ul className="space-y-2">
                <li><NavLink to="/settings"><ProfileMenuWidget iconName="fa-solid fa-gear" label="Settings" /></NavLink></li>
                <li><NavLink to="/logout"><ProfileMenuWidget iconName="fa-solid fa-right-from-bracket" label="Sign Out" /></NavLink></li>
            </ul>
        </nav>

    </section>
}