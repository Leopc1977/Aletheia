import { FC } from 'react'

const links = [
    { name: 'Experiments', href: '#' },
    { name: 'Datasets', href: '#' },
    { name: 'Evaluations', href: '#' },
    { name: 'Playground', href: '#' },
]

export const Sidebar: FC = () => {
    return (
        <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
            <h1 className="text-xl font-bold mb-6">Aletheia</h1>
            <nav className="flex flex-col space-y-2">
                {links.map((link) => (
                    <a key={link.name} href={link.href} className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
                        {link.name}
                    </a>
                ))}
            </nav>
        </aside>
    )
}
