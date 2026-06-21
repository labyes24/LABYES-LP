import * as z from 'zod'

const contactSchema = z.object({
    name: z
        .string()
        .nonempty('O nome é obrigatório')
        .min(3, 'O nome deve conter pelo menos 3 caracteres'),
    email: z
        .string()
        .nonempty('O e-mail é obrigatório')
        .email('E-mail inválido'),
    linkedin: z.string().nonempty('O LinkedIn é obrigatório'),
    github: z.string().nonempty('O Github é obrigatório'),
    findOut: z.string().nonempty('Por favor, informe como conheceu o Lab Yes'),
    message: z
        .string()
        .min(10, 'A resposta deve conter pelo menos 10 caracteres')
        .nonempty('Por favor, conte um pouco sobre você'),
})

type ContactData = z.infer<typeof contactSchema>

export { contactSchema, type ContactData }
