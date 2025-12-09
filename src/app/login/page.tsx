'use client'

import { Template, RenderIf, InputText, Button, FieldError, useNotification } from "@/components"
import { useState } from "react"
import { LoginForm, formScheme, validationScheme } from './formScheme'
import { useFormik } from 'formik'
import { userAuth } from "@/resources"
import { useRouter } from 'next/navigation'
import { AccessToken, Credentials, User } from "@/resources/user/user.resource"

export default function Login() {
    const [loading, setLoading] = useState<boolean>(false)
    const [newUserState, setNewUserState] = useState<boolean>(true)

    const auth = userAuth();
    const notification = useNotification();
    const router = useRouter();

    const { values, handleChange, handleSubmit, errors, resetForm } = useFormik<LoginForm>({
        initialValues: formScheme,
        validationSchema: validationScheme,
        onSubmit: onSubmit
    })

    async function onSubmit(values: LoginForm) {
        if(!newUserState){
            const credentials: Credentials = {
                email: values.email,
                password: values.password
            }
            try{
                const accessToken: AccessToken = await auth.authenticate(credentials);
                router.push("/galeria");
            }catch(error : any){
                const message = error?.message;
                notification.notify(message, "error")
            }
        }else{
            const user: User = {
                email: values.email,
                name: values.name,
                password: values.password
            }

            try{
                await auth.save(user);
                notification.notify("Success on saving user.", "success")
                resetForm()
                setNewUserState(false)
            }catch(error: any){
                const message = error?.message;
                notification.notify(message, "error")
            }
        }
    }

    return (
        <Template loading={loading}>            
                <div className="flex-1 flex items-center justify-center px-6 py-10 sm:mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                                {
                                    newUserState ? 'Create new user.' : 'Login to your account.'
                                }
                            </h2>
                        </div>

                        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-3" onSubmit={handleSubmit}>

                                <RenderIf condition={newUserState}>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name: </label>
                                    </div>
                                    <div className="mt-2">
                                        <InputText style="w-full"
                                            id="name"
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                        <FieldError error={errors.name} />
                                    </div>
                                </RenderIf>
                                <RenderIf>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email: </label>
                                    </div>
                                    <div className="mt-4">
                                        <InputText style="w-full"
                                            id="email"
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        <FieldError error={errors.email} />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password: </label>
                                    </div>
                                    <div className="mt-2">
                                        <InputText style="w-full"
                                            type="password"
                                            id="password"
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        <FieldError error={errors.password} />
                                    </div>
                                </RenderIf>

                                <RenderIf condition={newUserState}>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password: </label>
                                    </div>
                                    <div className="mt-2">
                                        <InputText style="w-full"
                                            type="password"
                                            id="passwordMatch"
                                            value={values.passwordMatch}
                                            onChange={handleChange}
                                        />
                                        <FieldError error={errors.passwordMatch} />
                                    </div>
                                </RenderIf>

                                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm pb-6 flex justify-center space-x-4">
                                    <RenderIf condition={newUserState}>
                                        <Button type="submit" style="bg-indigo-700 hover:bg-indigo-400" label="Save" />
                                        <Button type="button" style="bg-red-700 hover:bg-red-400 mx-4" label="Cancel" onClick={event => setNewUserState(false)} />
                                    </RenderIf>

                                    <RenderIf condition={!newUserState}>
                                        <Button type="submit" style="bg-indigo-700 hover:bg-indigo-400" label="Login" />
                                        <Button type="button" style="bg-red-700 hover:bg-red-400 mx-4" label="Sign Up" onClick={event => setNewUserState(true)} />
                                    </RenderIf>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

            </div>
        </Template>
    )
}