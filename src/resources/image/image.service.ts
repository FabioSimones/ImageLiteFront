import { Image } from './image.resource'
import { userAuth } from '@/resources'

class ImageService{
    baseUrl: string = 'http://localhost:8080/v1/images';
    auth = userAuth();

    async buscar(query: string = "", extension: string = "") : Promise<Image[]>{
        const userSession = this.auth.getUserSession();
        const url = `${this.baseUrl}?query=${query}&extension=${extension}`
        const response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${userSession?.accessToken}`
            }
        });
        return await response.json();
    }

    async salvar(dados: FormData): Promise<string>{
        const userSession = this.auth.getUserSession();
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            body: dados,
            headers: {
                "Authorization": `Bearer ${userSession?.accessToken}`
            }
        });

        return response.headers.get('location') ?? ''
    }
}



export const useImageService = () => new ImageService();