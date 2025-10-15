import { Mail, MapPin, Smartphone } from 'lucide-react'

export default function LocationSection() {
    return (
        <div className="flex flex-col lg:gap-0 gap-10 lg:flex-row justify-center py-10 lg-px0 px-5 relative bg-[#FFEFE9]">
            <h3 className="text-[36px]">
                <b className="text-primary">Venha cuidar da sua saúde</b> com
                quem entende de você
            </h3>
            <div className="flex gap-4 items-center">
                <div>
                    <div className="bg-[#C4D392] w-12 h-12 rounded-full flex items-center justify-center">
                        <MapPin size={24} className="text-primary" />
                    </div>
                </div>
                <p>
                    Rua Marechal Deodoro, 294 – Bairro Floresta, Belo Horizonte
                    – MG
                </p>
            </div>
            <div className="flex gap-4 items-center">
                <div>
                    <div className="bg-[#C4D392] w-12 h-12 rounded-full flex items-center justify-center">
                        <Smartphone size={24} className="text-primary" />
                    </div>
                </div>
                <span>(62) 0000-0000</span>
            </div>
            <div className="flex gap-4 items-center">
                <div>
                    <div className="bg-[#C4D392] w-12 h-12 rounded-full flex items-center justify-center">
                        <Mail size={24} className="text-primary" />
                    </div>
                </div>
                <span>
                    Rua Marechal Deodoro, 294 – Bairro Floresta, Belo Horizonte
                    – MG
                </span>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.1492863844865!2d-43.93213272291322!3d-19.91811293794203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699f6ac832509%3A0x19539c5e462e84ca!2sR.%20Mal.%20Deodoro%2C%20294%20-%20Floresta%2C%20Belo%20Horizonte%20-%20MG%2C%2030120-010!5e0!3m2!1spt-BR!2sbr!4v1760554203734!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full rounded-2xl"
            ></iframe>
        </div>
    )
}
