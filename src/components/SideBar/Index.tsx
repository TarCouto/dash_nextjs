'use client'

import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Search, SquareStack, Users, Calendar, Box, Menu } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { NavItem } from './NavItem';
import { Profile } from './Profile';
import * as Input from '../input'
import { Button } from '../Button'
import { Logo } from './Logo';

export function Sidebar() {
    return (
        <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">      <div className="flex items-center justify-between">
            <Logo />
            <Collapsible.Trigger asChild className="lg:hidden">
                <Button variant="ghost">
                    <Menu className="h-6 w-6" />
                </Button>
            </Collapsible.Trigger>
        </div>

            <Collapsible.Content
                forceMount
                className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
            >
                <Input.Root>
                    <Input.Prefix>
                        <Search className="h-5 w-5 to-zinc-500" />
                    </Input.Prefix>
                    <Input.Control placeholder="Search" />
                </Input.Root>

                <nav className="space-y-0.5">
                    <NavItem title="Home" icon={Home} />
                    <NavItem title="Alertas" icon={Flag} />
                    <NavItem title="Desempenho" icon={BarChart} />
                    <NavItem title="Adicionar e Gerenciar" icon={Cog} />
                    <NavItem title="Serviços Agendados" icon={Calendar} />
                    <NavItem title="Agendamentos" icon={CheckSquare} />
                    <NavItem title="Estoque" icon={Box} />
                    <NavItem title="Acompanhamento de Máquinas" icon={Search} />
                </nav>
                <div className="mt-auto flex flex-col gap-6">
                    <nav className="space-y-0.2">
                        <NavItem title="Support" icon={LifeBuoy} />

                    </nav>



                    <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

                    <Profile />
                </div>

            </Collapsible.Content>
        </Collapsible.Root>
    )
}
