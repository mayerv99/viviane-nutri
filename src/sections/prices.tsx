import Image from 'next/image'

export default function PricesSection() {
    return (
        <div className="flex flex-col lg:gap-0 gap-10 lg:flex-row justify-center py-10 lg-px0 px-5 relative bg-[#10635F]">
            <div className="absolute -top-12 left-0 w-full h-20 lg:h-32">
                <Image src="/images/divider-teal.svg" alt="Divisor" fill />
            </div>
            <div className="text-center flex flex-col gap-1 mt-10">
                <span className="text-[50px] font-dynalight text-white my-0 leading-0">
                    Sua Transformação <br />
                </span>
                <span className="text-[43px] text-[#EAA98D] my-0">
                    começa aqui
                </span>
            </div>
            <div className="flex flex-col gap-3">
                <div className="w-3/4 mx-auto bg-[#FFBEA3] rounded-xl p-4 text-center flex flex-col gap-10">
                    <h3 className="text-[32px] leading-6">
                        Pacote Promocional
                    </h3>
                    <div>
                        <div className="flex justify-center">
                            <div className="w-4 h-4 relative">
                                <Image
                                    src="/images/check-icon.svg"
                                    alt="Icone"
                                    fill
                                />
                            </div>{' '}
                            <div className="w-4 h-4 relative">
                                <Image
                                    src="/images/check-icon.svg"
                                    alt="Icone"
                                    fill
                                />
                            </div>
                            <div className="w-4 h-4 relative">
                                <Image
                                    src="/images/check-icon.svg"
                                    alt="Icone"
                                    fill
                                />
                            </div>
                        </div>
                        <span className="text-[22px]">3 Consultas</span>
                    </div>
                    <div>
                        <span className="text-[12px]">de R$ 750,00</span> <br />
                        <span className="text-[38px]">R$ 600,00</span>
                    </div>
                    <button className="rounded-xl py-1 bg-primary text-white">
                        Agendar consulta
                    </button>
                </div>
                <div className="w-3/4 mx-auto bg-white rounded-xl p-4 text-center flex flex-col gap-10">
                    <h3 className="text-[32px] leading-6">Pacote Individual</h3>
                    <div>
                        <div className="flex justify-center">
                            <div className="w-4 h-4 relative">
                                <Image
                                    src="/images/check-icon.svg"
                                    alt="Icone"
                                    fill
                                />
                            </div>
                        </div>
                        <span className="text-[22px]">1 Consulta</span>
                    </div>
                    <div>
                        <span className="text-[38px]">R$ 250,00</span>
                    </div>
                    <button className="rounded-xl py-1 bg-primary text-white">
                        Agendar consulta
                    </button>
                </div>
                <span className="text-white text-center text-[16px] font-bold mt-8">
                    Formas de pagamento: <br />
                    Dinheiro | PIX | Crédito | Débito
                </span>
            </div>
        </div>
    )
}
