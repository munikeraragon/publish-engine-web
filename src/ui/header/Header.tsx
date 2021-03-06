import { UserMenu } from './UserMenu';
import Link from 'next/link';
import { useGetUserQuery } from '../../generated/apolloComponents';

export interface HeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: (_: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
    const { data } = useGetUserQuery();

    return (
        <header
            className='sticky top-0 border-b bg-white border-gray-200 z-10'
            style={{ boxShadow: '0 .125rem .625rem rgba(90,97,105,.12)' }}>
            <div className='px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16 -mb-px'>
                    {/* Header: Left side */}
                    <div className='flex'>
                        {/* Hamburger button */}
                        <button
                            className='text-gray-500 hover:text-gray-600 md:hidden'
                            aria-controls='sidebar'
                            aria-expanded={sidebarOpen}
                            onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <span className='sr-only'>Open sidebar</span>
                            <svg
                                className='w-6 h-6 fill-current'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'>
                                <rect x='4' y='5' width='16' height='2' />
                                <rect x='4' y='11' width='16' height='2' />
                                <rect x='4' y='17' width='16' height='2' />
                            </svg>
                        </button>
                    </div>

                    {/* Header: Right side */}
                    <div className='flex items-center'>
                        <span className='lg:flex hidden'>
                            <Link href='/dash/new'>
                                <button
                                    className='bg-indigo-600 hover:bg-indigo-700 text-white
                             font-medium py-2 px-4 rounded-md mr-2'>
                                    Create new
                                </button>
                            </Link>
                        </span>
                        {/* <SearchModal />
                        <Notifications />
                        <Help /> */}
                        {/*  Divider */}
                        <hr className='w-px h-6 bg-gray-200 mx-3' />
                        <UserMenu
                            userIcon={data?.getUser.userIcon}
                            userName={data?.getUser.userName}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};
