import { Link } from "react-router-dom"

export const ParkingSpaceCard = () => {
    return <Link to="/parking-spots/hello">
        <div className="rounded-md w-[200px] bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <div className="relative">
                <img src="/images/Parkify-SplashScreen.jpeg" alt="" className="rounded-t-md" width="200px" />
                <span className="absolute font-bold bottom-0 right-0 p-1 bg-slate-200/70 rounded-tl-md">KES 100/hr</span>
            </div>
            <div className="p-2.5">
                <p className="font-bold text-sm text-slate-500">Main Garage</p>
                <h3 className="font-bold w-[200px] ">ABC Parking</h3>
                <p><i className="fa-solid fa-star text-sm text-slate-400"></i> <span className="font-bold text-sm">4.6</span></p>
                <div className="flex justify-between">
                    <p className="text-sm"><i className="fa-solid fa-car text-slate-400"></i> <span className="font-bold text-green-600">52 Available</span></p>
                    <p className="text-sm"><i className="fa-solid fa-location text-slate-400"></i> <span className="font-bold">200 M</span></p>
                </div>
            </div>
        </div>
    </Link>
}