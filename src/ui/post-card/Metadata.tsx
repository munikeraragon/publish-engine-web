import moment from 'moment';

export interface MetaDataProps {
    userIcon: string | undefined;
    userName: string | undefined;
    creationDate: string | undefined;
    readingTime: number | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const Metadata: React.FC<MetaDataProps> = ({
    userIcon,
    userName,
    creationDate,
    readingTime,
    className = ''
}) => {
    if (!userIcon && !userName && !creationDate && !readingTime)
        return <MetadataEskeleton className={className} />;

    return (
        <div className={`${className} flex items-center mt-6`}>
            <p>{moment(Number(creationDate)).fromNow()}</p>
            <span className='hidden mx-2 sm:inline scale-150'>·</span>
            <p>{readingTime} min read</p>
        </div>
    );
};

export const MetadataEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return (
        <div className={`${className}`}>
            <div className='flex items-center justify-start'>
                <span className='inline-block h-10 w-10 rounded-full bg-gray-300 animate-pulse' />
                <div className='flex flex-col ml-3'>
                    <span className='h-4 w-24 my-1 bg-gray-300 rounded animate-pulse' />
                    <div className='flex'>
                        <span className='h-4 w-16 my-1 bg-gray-300 rounded mr-4 animate-pulse' />
                        <span className='h-4 w-28 my-1 bg-gray-300 rounded animate-pulse' />
                    </div>
                </div>
            </div>
        </div>
    );
};
