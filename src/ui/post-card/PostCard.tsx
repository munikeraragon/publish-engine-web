import { Tags } from './Tags';
import { Title } from './Title';
import { Metadata } from './Metadata';
import { CoverImage } from './CoverImage';

export interface PostCardProps {
    src: string | undefined | null;
    title: string | undefined;
    userName: string | undefined;
    userIcon: string | undefined;
    creationDate: string | undefined;
    readingTime: number | undefined;
    tags: string[];
    className?: string;
}

export const PostCard: React.FC<PostCardProps> = ({
    src,
    title,
    userIcon,
    userName,
    creationDate,
    readingTime,
    tags,
    className = ''
}) => {
    return (
        <div
            style={{ border: '1px solid #f0f8ff', minHeight: 420 }}
            className={`${className} flex flex-col overflow-hidden rounded-lg shadow-bottom hover:shadow-2xl
            transition transform hover:-translate-y-1.5 bg-white`}>
            <div className='flex-shrink-0'>
                <CoverImage src={src} alt='post cover' />
            </div>

            <div className='flex flex-col justify-between flex-1 p-6 pt-5 bg-white'>
                <div className='flex flex-col flex-1'>
                    <Tags
                        tags={tags}
                        size='md'
                        className='text-indigo-600 font-semibold mt-2 mb-4'
                    />
                    <Title title={title} className='text-xl font-semibold' />
                </div>
                <Metadata
                    userIcon={userIcon}
                    userName={userName}
                    creationDate={creationDate}
                    readingTime={readingTime}
                    className='text-sm font-base text-gray-700'
                />
            </div>
        </div>
    );
};
