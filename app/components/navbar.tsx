import React from 'react'

export default function Navbar() {
    return (
        <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-center px-4 sm:px-6 lg:px-8">
                <nav aria-label="Global">
                    <ul className="flex items-center justify-center gap-6 text-sm text-center">
                        {/* <li>
                            <a
                                className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-white/75"
                                href="#aboutme"
                            >
                                About
                            </a>
                        </li> */}
                       {/* <li>
                            <a
                                className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-white/75"
                                href="#software"
                            >
                                Software Projects
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-white/75"
                                href="#web"
                            >
                                Web Projects
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-white/75"
                                href="#game"
                            >
                                Game Projects
                            </a>
                        </li>
                         <li>
                            <a
                                className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-white/75"
                                href="#contact"
                            >
                                Contact Me
                            </a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
