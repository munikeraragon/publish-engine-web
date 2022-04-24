// import  MDEditor from '@uiw/react-md-editor';
import dynamic from 'next/dynamic';
// import '@uiw/react-md-editor/dist/markdown-editor.css';
// import '@uiw/react-markdown-preview/dist/markdown.css';

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then((mod) => mod.default) as any, {
    ssr: false
}) as any

const Markdown = dynamic(
    () => import('@uiw/react-markdown-preview').then((mod) => mod.default) as any,
    { ssr: false }
) as any

export interface EskeletonProps {
    className?: string;
}

export interface BodyProps {
    articleBody: string | undefined;
    className?: string;
}

export const Body: React.FC<BodyProps> = ({ articleBody, className = '' }) => {
    if (!articleBody) return <BodyEskeleton />;

    return (
        <div className={className}>
            <Markdown source={articleBody} className='py-4' />
        </div>
    );
};

export const BodyEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return (
        <div className={className}>
            <div className='border border-gray-200 shadow rounded-md p-4 mx-auto my-6 '>
                <div className='animate-pulse flex space-x-4'>
                    <div className='flex-1 space-y-4 py-1'>
                        <div className='h-4 bg-gray-300 rounded w-3/4' />
                        <div className='h-4 bg-gray-300 rounded' />
                        <div className='h-4 bg-gray-300 rounded w-5/6' />
                        <div className='h-4 bg-gray-300 rounded w-4/6' />
                        <div className='h-4 bg-gray-300 rounded w-2/4' />
                    </div>
                </div>
            </div>
            <div className='border border-gray-200 shadow rounded-md p-4 mx-auto my-4'>
                <div className='animate-pulse flex space-x-4'>
                    <div className='flex-1 space-y-4 py-1'>
                        <div className='h-4 bg-gray-300 rounded w-3/4' />
                        <div className='h-4 bg-gray-300 rounded' />
                        <div className='h-4 bg-gray-300 rounded w-5/6' />
                        <div className='h-4 bg-gray-300 rounded w-4/6' />
                        <div className='h-4 bg-gray-300 rounded w-2/4' />
                    </div>
                </div>
            </div>
        </div>
    );
};
