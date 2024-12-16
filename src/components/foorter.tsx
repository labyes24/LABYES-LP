import { Mail } from 'lucide-react'
import Image from 'next/image'
import logoLabYes from '../../public/logo-light.svg'
import { Button } from './ui/button'

export function Footer() {
    return (
        <footer className="grid grid-cols-1 grid-rows-3 items-center gap-8 border-muted bg-ly-dark-azure-800 py-16 md:flex md:h-fit md:justify-between md:gap-6 md:px-36 md:py-8">
            <Button
                asChild
                variant={'link'}
                className="row-start-1 mx-auto h-6 w-fit select-none p-0 hover:cursor-pointer hover:bg-transparent md:mx-0 md:h-8"
            >
                <Image
                    src={logoLabYes}
                    priority={true}
                    draggable={false}
                    alt="Logo 'Lab Yes!'"
                    className="rounded-lg object-cover"
                />
            </Button>
            <div className="row-start-3 hidden text-ly-white md:flex">
                Copyright © 2024 Lab Yes! | Todos os direitos reservados.
            </div>
            <div className="row-start-3 mx-auto flex text-ly-white md:hidden">
                Copyright © 2024 Lab Yes!
            </div>
            <div className="row-start-2 flex items-center justify-center gap-2 md:justify-between">
                <Button
                    className="h-8 w-8 rounded-md bg-ly-white transition-colors duration-200 hover:bg-ly-orange-400"
                    variant={'link'}
                >
                    <Mail
                        className="h-8 w-8 text-ly-dark-azure-700"
                        strokeWidth={2.5}
                    />
                </Button>

                <Button
                    className="h-8 w-8 rounded-md bg-ly-white transition-colors duration-200 hover:bg-ly-orange-400"
                    variant={'link'}
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 2.42005C0 1.84284 0.202708 1.36665 0.608108 0.991481C1.01351 0.616295 1.54055 0.428711 2.18919 0.428711C2.82626 0.428711 3.34169 0.613403 3.73552 0.982823C4.14092 1.36378 4.34363 1.86016 4.34363 2.472C4.34363 3.02611 4.14672 3.48786 3.7529 3.85728C3.3475 4.23823 2.81467 4.42871 2.15444 4.42871H2.13707C1.49999 4.42871 0.984562 4.23823 0.590734 3.85728C0.196905 3.47633 0 2.99725 0 2.42005ZM0.225869 17.5716V6.00447H4.08301V17.5716H0.225869ZM6.22008 17.5716H10.0772V11.1127C10.0772 10.7086 10.1236 10.3969 10.2162 10.1776C10.3784 9.78512 10.6245 9.45323 10.9546 9.18195C11.2847 8.91066 11.6988 8.77503 12.1969 8.77503C13.4942 8.77503 14.1429 9.6466 14.1429 11.3897V17.5716H18V10.9395C18 9.23101 17.5946 7.9352 16.7838 7.05208C15.973 6.16897 14.9015 5.72741 13.5695 5.72741C12.0753 5.72741 10.9112 6.3681 10.0772 7.64949V7.68412H10.0598L10.0772 7.64949V6.00447H6.22008C6.24324 6.37387 6.25483 7.52249 6.25483 9.45035C6.25483 11.3782 6.24324 14.0853 6.22008 17.5716Z"
                            fill="#33475B"
                        />
                    </svg>
                </Button>
                <Button
                    className="h-8 w-8 rounded-md bg-ly-white transition-colors duration-200 hover:bg-ly-orange-400"
                    variant={'link'}
                >
                    <svg
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.4388 13.9797L6.37656 13.9038C5.06131 13.8773 3.74279 13.9301 2.45333 13.656C0.491769 13.2465 0.352805 11.2386 0.207394 9.55437C0.00703181 7.18653 0.084598 4.77572 0.462707 2.42764C0.676162 1.11013 1.51619 0.323954 2.81527 0.238403C7.20063 -0.0720714 11.6151 -0.0352769 15.9908 0.109571C16.4529 0.122849 16.9182 0.195425 17.3739 0.278036C19.6232 0.680954 19.678 2.95635 19.8238 4.87181C19.9692 6.80703 19.9078 8.75219 19.6299 10.6742C19.4069 12.2656 18.9803 13.6002 17.1799 13.729C14.9242 13.8975 12.7202 14.0331 10.4581 13.9899C10.4582 13.9797 10.4452 13.9797 10.4388 13.9797ZM8.05058 9.9507C9.75048 8.95329 11.418 7.9725 13.1081 6.98178C11.4051 5.98437 9.74076 5.00358 8.05058 4.01286V9.9507Z"
                            fill="#33475B"
                        />
                    </svg>
                </Button>
            </div>
        </footer>
    )
}
