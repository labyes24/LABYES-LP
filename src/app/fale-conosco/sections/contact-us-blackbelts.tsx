import {
    BeltCard,
    BeltContent,
    BeltDescription,
    BeltIcon,
    BeltTitle,
} from '@/components/belt-card'

export function BlackBeltsSection() {
    return (
        <section className="px-6 pb-16 pt-14 xl:pb-[8.25rem] xl:pt-16">
            <h2 className="text-center text-3xl font-bold text-input xl:text-4xl">
                Black Belts
            </h2>
            <p className="mt-6 text-center text-sm leading-none text-input sm:mx-auto sm:max-w-[600px] xl:mt-12 xl:max-w-[880px] xl:text-base xl:leading-[1.125]">
                No Lab Yes, Black Belts são profissionais que dominaram suas
                disciplinas através de jornada comprovada, impacto mensurável em
                projetos complexos e capacidade de mentoria. O sistema de níveis
                (1–5) reflete não apenas senioridade técnica, mas profundidade
                estratégica e contribuição para evolução da comunidade.
            </p>

            <div
                id="black-belts"
                className="mt-6 flex flex-col gap-2 sm:mx-auto sm:max-w-[600px] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-1.5 xl:mt-12 xl:max-w-[1224px]"
            >
                <BeltCard>
                    <BeltIcon color="white" aria-describedby="faixa-branca" />
                    <BeltContent>
                        <BeltTitle id="faixa-branca">
                            Faixa Branca: O Sobrevivente
                        </BeltTitle>
                        <BeltDescription>
                            O início de tudo, onde o objetivo não é aprender
                            tudo, mas sim caminhar devagar e sempre.
                        </BeltDescription>
                    </BeltContent>
                </BeltCard>

                <BeltCard>
                    <BeltIcon color="blue" aria-describedby="faixa-azul" />
                    <BeltContent>
                        <BeltTitle id="faixa-azul">
                            Faixa Azul: O Coletor de Técnicas
                        </BeltTitle>
                        <BeltDescription>
                            Aqui você começa a se aprimorar, mas geralmente
                            tenta fazer tudo ao mesmo tempo.
                        </BeltDescription>
                    </BeltContent>
                </BeltCard>

                <BeltCard>
                    <BeltIcon color="pink" aria-describedby="faixa-roxa" />
                    <BeltContent>
                        <BeltTitle id="faixa-roxa">
                            Faixa Roxa: O Estrategista
                        </BeltTitle>
                        <BeltDescription>
                            É onde você descobre o seu &quot;jogo&quot;. Você
                            para de reagir e começa a ser mais assertivo.
                        </BeltDescription>
                    </BeltContent>
                </BeltCard>

                <BeltCard>
                    <BeltIcon color="brown" aria-describedby="faixa-marrom" />
                    <BeltContent>
                        <BeltTitle id="faixa-marrom">
                            Faixa Marrom: O Refinador
                        </BeltTitle>
                        <BeltDescription>
                            Você pensa que já sabe quase tudo, mas agora está
                            ajustando a pressão e entendendo que ainda tem muito
                            pela frente.
                        </BeltDescription>
                    </BeltContent>
                </BeltCard>

                <BeltCard>
                    <BeltIcon color="black" aria-describedby="faixa-preta" />
                    <BeltContent>
                        <BeltTitle id="faixa-preta">
                            Faixa Preta: O Eterno Aprendiz
                        </BeltTitle>
                        <BeltDescription>
                            Onde o aprendizado realmente recomeça, mas com uma
                            base sólida.
                        </BeltDescription>
                    </BeltContent>
                </BeltCard>
            </div>
        </section>
    )
}
