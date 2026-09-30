import * as z from 'zod'

const contactSchema = z.object({
    name: z
        .string()
        .nonempty('Informe seu nome.')
        .trim()
        .overwrite((v) => v.replace(/\s+/g, ' '))
        .min(2, 'O nome deve ter pelo menos 2 caracteres.')
        .pipe(
            z
                .string()
                .regex(
                    /^[\p{L}\p{M}\s\-_.'`]+$/u,
                    'O nome contém caracteres não permitidos.'
                )
        ),

    email: z
        .string()
        .nonempty('Informe seu e-mail. Ex.: nome@gmail.com')
        .email('Insira um e-mail válido. Ex.: nome@gmail.com'),

    linkedin: z
        .string()
        .nonempty('Insira o link: https://linkedin.com/in/seu-perfil')
        .trim()
        .pipe(z.url('URL inválida. Use https://linkedin.com/in/nome'))
        .pipe(
            z.string().refine(
                (url) => {
                    try {
                        const parsed = new URL(url)
                        return (
                            parsed.protocol === 'https:' &&
                            parsed.hostname.endsWith('linkedin.com') &&
                            parsed.pathname.startsWith('/in/')
                        )
                    } catch {
                        return false
                    }
                },
                { message: 'O link deve ser https://linkedin.com/in/seuperfil' }
                )
        ),

    github: z
        .string()
        .trim()
        .url({
            protocol: /^https?$/,
            message: 'Formato inválido. Use o link com https://',
        })
        .or(z.literal('')),

    findOut: z.string().nonempty('Selecione uma opção.'),
    message: z
        .string()
        .nonempty('Preencha este campo.')
        .pipe(z.string().min(50, 'Mínimo de 50 caracteres.'))
        .pipe(z.string().max(500, 'Limite de 500 caracteres excedido.')),
})

type ContactData = z.infer<typeof contactSchema>

export { contactSchema, type ContactData }
