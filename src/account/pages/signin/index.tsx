import { useNavigate } from "react-router-dom";
import { Button } from "../../../widgets/Button"
import { FieldValues, useForm } from "react-hook-form"

export const SignIn = () => {
    const navigate = useNavigate()
    const { handleSubmit } = useForm();

    const signIn = (data: FieldValues) => {
        navigate("/explore", {
            replace: true
        })
    }
    return <form onSubmit={handleSubmit(signIn)}>
        <h1>Sign In</h1>

        <Button type="submit" label="Sign In" style="bg-slate-500 w-full rounded-md text-white font-bold py-2" />
    </form>
}