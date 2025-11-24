import { Template, ImageCard } from '@/components'

export default function GaleriaPage(){
    return(
        <Template>
            <section className='grid grid-cols-3 gap-8'>
                <ImageCard nome='Cachoeira' tamanho='10MB' dataUpload='24/11/2025' src='https://blog.venturas.com.br/wp-content/uploads/2016/08/costa-rica-a-opcao-ideal-para-o-turismo-de-natureza-na-america-latina.jpeg'/>
            </section>            
        </Template>
    
    )
}