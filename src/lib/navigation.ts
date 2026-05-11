interface NavLink {
    href: string
    title: string
}

interface Navigation {
    links: NavLink[]
    CTA: NavLink
}

export const navigation: Navigation = {
    links: [
        { href: '/', title: 'Home' },
        { href: '/quemsomos', title: 'Quem somos' },
        { href: '/conexoes', title: 'Conexões' },
        { href: '/produtos', title: 'Produtos' },
    ],
    CTA: { href: '/fale-conosco', title: 'Fale conosco' },
} as const
