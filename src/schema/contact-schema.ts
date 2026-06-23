import * as z from 'zod'

const contactSchema = z.object({
    name: z
        .string()
        .nonempty('Informe seu nome.')
        .min(2, 'O nome deve ter pelo menos 2 caracteres.'),
    email: z
        .string()
        .nonempty('Informe seu e-mail.')
        .email('Digite um e-mail válido.'),
    linkedin: z.string().nonempty('Informe o link do seu LinkedIn.'),
    github: z.string().nonempty('Informe seu GitHub ou portfólio.'),
    findOut: z.string().nonempty('Selecione uma opção.'),
    message: z
        .string()
        .nonempty('Preencha este campo.')
        .pipe(z.string().min(10, 'O texto deve ter no mínimo 10 caracteres.'))
        .pipe(
            z.string().max(500, 'O texto deve ter no máximo 500 caracteres.')
        ),
})

type ContactData = z.infer<typeof contactSchema>

export { contactSchema, type ContactData }
