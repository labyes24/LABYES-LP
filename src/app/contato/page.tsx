import { Metadata } from 'next'
import Form from 'next/form'
export const metadata: Metadata = {
    title: 'Contatos',
}
export default function ContactsPage() {
    return (
        <div className="content-wrapper">
            <section className="section-wrapper">
                <div className="section-info">
                    <h2>Titulo da Sessão</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>
                <div className="empresa-info">
                    <span></span>
                    <strong>Empresa</strong>
                </div>
                <div className="talentos-info">
                    <span></span>
                    <strong>Talentos</strong>
                </div>
            </section>
            <Form action="/">
                <div className="buttons-wrapper">
                    <button>Empresa</button>
                    <button>Dev junior</button>
                </div>
                <h3>Entre em contato</h3>
                <p>Queremos ouvir você</p>

                <div>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nome"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message"></label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Digite sua mensagem"
                        required
                    ></textarea>
                </div>
                <button type="submit">Enviar mensagem</button>
            </Form>
            <section className="contact-info">
                <div className="adress">
                    <h2>Endereço</h2>
                    <p>58 Middle Point Rd San Francisco, 94124</p>
                </div>
                <div className="contact">
                    <h2>Contatos</h2>
                    <p>(12)3456-7890</p>
                    <p>contato@email.com</p>
                </div>
            </section>
        </div>
    )
}
