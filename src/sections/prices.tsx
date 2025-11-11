import Image from 'next/image'

export default function PricesSection() {
    return (
        <div className="flex flex-col lg:gap-0 gap-10 justify-center py-10 lg-px0 px-5 relative bg-[#10635F]">
            <div className="absolute -top-12 left-0 w-full h-20 lg:h-32">
                <Image src="/images/divider-teal.svg" alt="Divisor" fill />
            </div>
            <div className="text-center flex flex-col gap-1 mt-10 lg:mt-20">
                <span className="text-[50px] lg:text-[100px] font-dynalight text-white my-0 leading-0">
                    Sua Transformação <br />
                </span>
                <span className="text-[43px] text-[#EAA98D] my-0 lg:text-[80px]">
                    começa aqui
                </span>
            </div>
            <div className="flex flex-col gap-3 text-[#502411] lg:flex-row lg:w-3/4 lg:mx-auto justify-center">
                <div className="w-3/4 lg:w-1/4 xl:w-1/5 mx-auto lg:mx-0 bg-[#FFBEA3] rounded-xl p-4 text-center flex flex-col gap-10 2xl:w-1/6">
                    <h3 className="text-[32px] leading-6 font-semibold">
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
                        <span className="text-[22px] uppercase">
                            3 Consultas
                        </span>
                    </div>
                    <div>
                        <span className="text-[12px]">de R$ 750,00</span> <br />
                        <span className="text-[38px] font-semibold">
                            R$ 600,00
                        </span>
                    </div>
                    <button className="rounded-xl py-1 bg-primary text-white mt-auto">
                        Agendar consulta
                    </button>
                </div>
                <div className="w-3/4 mx-auto lg:mx-0 bg-white rounded-xl p-4 text-center flex flex-col gap-10 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
                    <h3 className="text-[32px] leading-6 font-semibold">
                        Pacote Individual
                    </h3>
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
                        <span className="text-[22px] uppercase">
                            1 Consulta
                        </span>
                    </div>
                    <div className="text-[38px] font-semibold mt-auto">
                        R$ 250,00
                    </div>
                    <button className="rounded-xl py-1 bg-primary text-white">
                        Agendar consulta
                    </button>
                </div>
                <span className="text-white text-center text-[16px] font-bold mt-8 lg:hidden">
                    Formas de pagamento: <br />
                    Dinheiro | PIX | Crédito | Débito
                </span>
            </div>
        </div>
    )
}
