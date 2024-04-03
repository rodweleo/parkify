import moment from "moment"

export const BookingConfirmedReceipt = () => {
    return <div className="absolute flex flex-col justify-around h-fit w-fit bg-white rounded-xl items-center">
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-xl">Booking Confirmed</h1>
            <img src="https://th.bing.com/th?id=OIP.ifa8GFCtfbXfvZVh0HB7SAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" className="w-full h-full" srcSet="" />

            <section className="px-2.5">
                <table>
                    <tr>
                        <th className="text-left p-2">Booking ID: </th>
                        <td className="text-right">##########</td>
                    </tr>
                    <hr />
                    <tr>
                        <th className="text-left p-2">Location: </th>
                        <td className="text-right">First Exit, Matumbato Road, <br />UpperHill, Nairobi Kenya </td>
                    </tr>
                    <hr />
                    <tr>
                        <th className="text-left p-2">Slot Number: </th>
                        <td className="text-right">24 B</td>
                    </tr>
                    <hr />
                    <tr>
                        <th className="text-left p-2">Amount: </th>
                        <td className="text-right">{200}</td>
                    </tr>
                    <hr />
                    <tr>
                        <th className="text-left p-2">Date of Purchase: </th>
                        <td className="text-right">{moment().format("LLL")}</td>
                    </tr>
                </table>
            </section>
        </div>
        <div className="w-full flex justify-between items-center border-dashed border-b-2">
            <div className="h-12 w-12 bg-slate-200 rounded-full -ml-5 " />
            <div className=" border-b-dashed border-slate-200 w-full" />
            <div className="h-12 w-12 bg-slate-200 rounded-full -mr-5" />
        </div>

    </div>
}