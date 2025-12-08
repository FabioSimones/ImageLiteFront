'use client'

import { Template, RenderIf, InputText, Button } from "@/components"
import { use, useState } from "react"


export default function Login(){
    const [loading, setLoading] = useState<boolean>(false)
    const [newUserState, setNewUserState] = useState<boolean>(true)
    
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
                    <form className="space-y-3">
                        
                        <RenderIf condition={newUserState}>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Name: </label>
                            </div>
                            <div className="mt-2">
                                <InputText style="w-full" 
                                            id="name"
                                             
                                            />
                            </div>
                        </RenderIf>
                        <RenderIf>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Email: </label>
                            </div>
                            <div className="mt-2">
                                <InputText style="w-full" 
                                            id="email"
                                             
                                            />
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Password: </label>
                            </div>
                            <div className="mt-2">
                                <InputText style="w-full"
                                            type="password" 
                                            id="password"
                                             
                                            />
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
                                             
                                            />
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