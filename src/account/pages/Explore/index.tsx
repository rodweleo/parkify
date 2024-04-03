import { Form } from "react-router-dom"
import { Button } from "../../../widgets/Button"
import { TextBox } from "../../../widgets/TextBox"

export const Explore = () => {

    const TYPES_OF_PARKING = [
        {
            name: "Paid Parking"
        },
        {
            name: "Free Parking"
        },
        {
            name: "Covered Parking"
        },
        {
            name: "Open Parking"
        }
    ]




    return <section>
        <div className="bg-slate-600/20 p-5 rounded-md">
            <TextBox label="Search" id="search-box" type="search" placeholder="Search" />
        </div>

        <div className="bg-white rounded-md h-3/4 hidden">
            <div className="flex items-center p-5 h-fit">
                <button className="hover:text-red-500"><i className="fa-solid fa-close"></i></button>
                <h1 className="w-full text-center font-bold text-slate-500">Filter</h1>
            </div>
            <hr className="bg-slate-300 h-[2px]" />
            <Form role="search" className="p-5 flex flex-col justify-between">
                <div className="flex flex-col w-full gap-3">
                    <h2 className="text-slate-400 text-sm">Type of Parking</h2>
                    <ul className="space-y-2">
                        {TYPES_OF_PARKING.map((type, index: number) => (
                            <li key={index}><p className="flex justify-between items-center font-bold text-slate-700">{type.name} <input type="checkbox" name="paid-parking" id={type.name.toLowerCase().replace(" ", "-")} className="w-10 h-5" /></p> </li>
                        ))}

                    </ul>
                </div>

                <Button label="Apply" type="button" style="w-full bg-slate-400 rounded-md py-2 font-bold disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-300" disabled />
            </Form>
        </div>


    </section >
}