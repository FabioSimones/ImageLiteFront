'use client'

import { Template, RenderIf, InputText, Button, FieldError } from "@/components"
import { useState } from "react"
import {LoginForm, formScheme, validationScheme} from './formScheme'
import {useFormik} from 'formik'

export default function Login(){
    const [loading, setLoading] = useState<boolean>(false)
    const [newUserState, setNewUserState] = useState<boolean>(true)

    const {values, handleChange, handleSubmit, errors} = useFormik<LoginForm>({
        initialValues: formScheme,
        validationSchema: validationScheme,
        onSubmit: onSubmit
    })

    async function onSubmit(values: LoginForm) {
        console.log(values)
    }
    
    return (
        <Template loading={loading}>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-gray-900">
                        {
                            newUserState ? 'Create new user.' : 'Login to your account.'
                        }
                    </h2>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-3" onSubmit={handleSubmit}>
                        
                        <RenderIf condition={newUserState}>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Name: </label>
                            </div>
                            <div className="mt-2">
                                <InputText style="w-full" 
                                            id="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            />
                                <FieldError error={errors.name}/>
                            </div>
                        </RenderIf>
                        <RenderIf>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Email: </label>
                            </div>
                            <div className="mt-2">
                                <InputText style="w-full" 
                                            id="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            />
                                <FieldError error={errors.email}/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Password: </label>
                            </div>
                            <div className="mt-2">
                                <InputText style="w-full"
                                            type="password" 
                                            id="password"
                                            value={values.password}
                                            onChange={handleChange} 
                                            />
                                <FieldError error={errors.password}/>
                            </div>
                        </RenderIf>

                        <RenderIf condition={newUserState}>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Repeat password: </label>
                            </div>
                            <div className="mt-2">
                                <InputText style="w-full"
                                            type="password" 
                                            id="passwordMatch"
                                            value={values.passwordMatch}
                                            onChange={handleChange} 
                                            />
                                <FieldError error={errors.passwordMatch}/>
                            </div>
                        </RenderIf>  

                        <div>
                            <RenderIf condition={newUserState}>
                                <Button type="submit" style="bg-indigo-700 hover:bg-indigo-400" label="Save"/>
                                <Button type="button" style="bg-red-700 hover:bg-red-400 mx-4" label="Cancel" onClick={event => setNewUserState(false)}/>
                            </RenderIf>

                            <RenderIf condition={!newUserState}>
                                <Button type="submit" style="bg-indigo-700 hover:bg-indigo-400" label="Login"/>
                                <Button type="button" style="bg-red-700 hover:bg-red-400 mx-4" label="Sign Up" onClick={event => setNewUserState(true)}/>
                            </RenderIf>
                        </div>
                    </form>
                </div>
            </div>
        </Template>
    )
}