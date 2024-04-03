import { useNavigate } from "react-router-dom"
import { Button } from "../../../widgets/Button"

export const ParkingSpot = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return <section className="bg-white h-full w-full rounded-md flex flex-col justify-between p-3">
        <div className="flex flex-col space-y-2">
            <button onClick={() => goBack()} className="hover:text-slate-500 flex"><i className="fa-solid fa-arrow-left"></i></button>
            <p className="font-bold">Reserve Booking at ABC Place</p>
            <div>
                <ul className="flex justify-between">
                    <li><i className="fa-solid fa-phone"></i> Call</li>
                    <li><i className="fa-solid fa-directions"></i> Directions</li>
                    <li><i className="fa-solid fa-share"></i> share</li>
                </ul>
            </div>

        </div>
        <section className="w-full">
            <h2 className="font-bold">Weekdays</h2>
            <div className="flex w-full overflow-x-auto gap-4">
                <Button type="button" label="1Hr - 2Hr: KES 200" style="bg-white border border-slate-400 font-bold text-black px-4 py-2 rounded-md focus:border-green-400 w-[200px]" />
            </div>
        </section>

        <div className="flex justify-between">
            <div className="flex items-center">
                <i className="fa-solid fa-car text-green-600 top-0 p-2 bg-green-500/10 border border-green-400 rounded-full"></i>
                <p className="font-bold text-green-600"> 15 Spots Available</p>
            </div>
            <Button type="submit" label="Reserve" style="w-full bg-slate-500 font-bold text-white px-4 rounded-md flex items-center justify-center hover:bg-slate-600" />
        </div>
    </section>
}