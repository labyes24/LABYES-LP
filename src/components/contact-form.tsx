'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { FormMessage } from '@/components/ui/form-message'
import { Input } from '@/components/ui/input'
import { InputError } from '@/components/ui/input-error'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import { submitContact } from '@/app/actions/submit-contact'
import { cn } from '@/lib/utils'
import { ContactData, contactSchema } from '@/schema/contact-schema'
import { useRef, useState } from 'react'

export function ContactForm({ className }: React.ComponentProps<'form'>) {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            linkedin: '',
            github: '',
            findOut: '',
            message: '',
        },
    })

    const [formMessage, setFormMessage] = useState<{
        id: number
        type: 'error' | 'success'
        message: string
    } | null>(null)
    const messageIdRef = useRef(0)

    const nextMessageId = () => {
        messageIdRef.current += 1
        return messageIdRef.current
    }

    const onSubmit = async (data: ContactData) => {
        console.log('chamando onSubmit com dados:', data)

        const coolDownTime = new Promise((resolve) => setTimeout(resolve, 1000))

        try {
            const [result] = await Promise.all([
                submitContact(data),
                coolDownTime,
            ])

            console.log('Resultado do submitContact:', result)

            if (!result.success) {
                setFormMessage({
                    id: nextMessageId(),
                    type: 'error',
                    message:
                        'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.',
                })
            } else {
                reset()

                setFormMessage({
                    id: nextMessageId(),
                    type: 'success',
                    message:
                        'Mensagem enviada com sucesso! Entraremos em contato.',
                })
            }
        } catch (error) {
            console.error('Network or execution error:', error)
            setFormMessage({
                id: nextMessageId(),
                type: 'error',
                message:
                    'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.',
            })
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            id="contact-form"
            className={cn(
                'm-auto flex max-w-[650px] flex-col gap-4',
                className
            )}
        >
            <div className="flex w-full flex-col gap-4 lg:flex-row">
                {/* Name */}
                <div className="flex w-full flex-col gap-1.5">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                        className="min-h-[42px] rounded-full"
                        id="name"
                        autoComplete="name"
                        placeholder="seu nome"
                        {...register('name')}
                        aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    <InputError message={errors.name?.message} />
                </div>

                {/* E-mail */}
                <div className="group/input-group flex w-full flex-col gap-1.5">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                        className="min-h-[42px] rounded-full"
                        placeholder="email@gmail.com"
                        id="email"
                        autoComplete="email"
                        {...register('email')}
                        aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    <InputError message={errors.email?.message} />
                </div>
            </div>

            <div className="flex w-full flex-col gap-4 lg:flex-row">
                {/* Linkedin */}
                <div className="flex w-full flex-col gap-1.5">
                    <Label htmlFor="linkedin">Linkedin</Label>
                    <Input
                        className="min-h-[42px] rounded-full"
                        placeholder="linkedin.com/in/lbys/"
                        id="linkedin"
                        {...register('linkedin')}
                        aria-invalid={errors.linkedin ? 'true' : 'false'}
                    />
                    <InputError message={errors.linkedin?.message} />
                </div>

                {/* Github */}
                <div className="flex w-full flex-col gap-1.5">
                    <Label htmlFor="github">Github ou Portfolio</Label>
                    <Input
                        className="min-h-[42px] rounded-full"
                        placeholder="github.com/seu-usuario "
                        id="github"
                        {...register('github')}
                        aria-invalid={errors.github ? 'true' : 'false'}
                    />
                    <InputError message={errors.github?.message} />
                </div>
            </div>

            {/* where found out */}
            <div className="flex flex-col gap-1.5">
                <Label htmlFor="findOut">Como conheceu o Lab Yes?</Label>
                <Controller
                    name="findOut"
                    control={control}
                    render={({ field, fieldState }) => (
                        <>
                            <Select
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger
                                    aria-invalid={
                                        fieldState.invalid ? 'true' : 'false'
                                    }
                                    className="h-10 w-full rounded-full"
                                    id="findOut"
                                >
                                    <SelectValue placeholder="selecione..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Linkedin">
                                            Linkedin
                                        </SelectItem>
                                        <SelectItem value="Site">
                                            Site
                                        </SelectItem>
                                        <SelectItem value="Indicação">
                                            Indicação
                                        </SelectItem>
                                        <SelectItem value="Outros">
                                            Outros
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <InputError message={fieldState.error?.message} />
                        </>
                    )}
                />
            </div>

            {/* user message */}
            <div className="flex flex-col gap-1.5">
                <Label htmlFor="message">
                    Conta pra gente: em qual faixa você está hoje e o que te
                    motiva a buscar a maestria com a gente?
                </Label>
                <Textarea
                    className="min-h-40 resize-none overflow-y-hidden rounded-[40px] p-6"
                    id="message"
                    maxLength={500}
                    rows={5}
                    placeholder="Conte um pouco sobre você"
                    {...register('message')}
                    aria-invalid={errors.message ? 'true' : 'false'}
                />
                <InputError message={errors.message?.message} />
            </div>

            <FormMessage
                type={formMessage?.type}
                message={formMessage?.message}
                messageId={formMessage?.id}
            />

            <p className="py-2 text-center text-lg font-bold leading-5 text-muted-foreground">
                Estamos prontos para ajudar você a alcançar seus objetivos!
            </p>

            <Button
                className="h-12 rounded-full text-lg font-bold leading-none transition-colors duration-300 disabled:bg-primary disabled:text-ly-dark-azure-800 disabled:opacity-100"
                variant="form"
                size={'lg'}
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
            >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
        </form>
    )
}
