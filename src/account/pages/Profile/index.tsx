import { NavLink } from "react-router-dom"
import { ProfileMenuWidget } from "../../../widgets/profile/ProfileMenuWidget"

export const Profile = () => {
    return <section className="h-full">
        <h1 className="font-bold">Profile</h1>
        <nav className="flex flex-col mt-5 h-full justify-between">
            <ul className="space-y-3">
                <li><NavLink to="my-vehicles">
                    <ProfileMenuWidget iconName="fa-solid fa-car" label="My Vehicles" />
                </NavLink></li>
                <li><NavLink to="bookings">
                    <ProfileMenuWidget iconName="fa-solid fa-calendar-check" label="Bookings" />
                </NavLink></li>
                <li>
                    <NavLink to="help"><ProfileMenuWidget iconName="fa-solid fa-question" label="Help" /></NavLink>
                </li>
                <li><NavLink to="settings"><ProfileMenuWidget iconName="fa-solid fa-gear" label="Settings" /></NavLink></li>
            </ul>

            <NavLink to="settings"><ProfileMenuWidget iconName="fa-solid fa-right-from-bracket" label="Sign Out" /></NavLink>
        </nav>

    </section>
}