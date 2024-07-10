import '../index.css';
import logo from '../graphics/logo.svg';

function Footer() {
    return (
        <footer class="bg-white shadow dark:bg-gray-800 fixed bottom-0 w-full">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://viaswebs.cz/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} class="h-8" alt="Flowbite Logo" />
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://github.com/Marty808s" class="hover:underline me-4 md:me-6">GitHub</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="martin.vlnas@viaswebs.cz" class="hover:underline">Marty808</a>. All Rights Reserved.</span>
            </div>
        </footer>


    );
}

export default Footer;