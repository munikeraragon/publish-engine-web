import { useFormStore } from './useFormStore';
import { Article } from '../article/Article';
import { useGetUserQuery } from '../../generated/apolloComponents';
import moment from 'moment';

export const Preview = () => {
    const { title, mainBody, mainImageUrl, tagsString } = useFormStore((state) => state);
    const { data } = useGetUserQuery();

    return (
        <div className='flex-1 flex flex-col bg-white rounded border border-gray-200 px-12 py-6'>
            <Article
                title={title}
                tags={tagsString
                    .split(',')
                    .map((tag) => tag.trim())
                    .filter((tag) => tag)}
                userIcon={data?.getUser.userIcon}
                coverImage={mainImageUrl}
                userName={data?.getUser.userName}
                creationDate={moment().format('MMM Do, YY')}
                readingTime={Math.round(mainBody.split(' ').length / 250)}
                wordsNumber={mainBody.split(' ').length}
                articleBody={mainBody}
                likes={0}
                comments={0}
                saved={0}
                isSaved={false}
                isLiked={false}
                showSidebar={false}
            />
        </div>
    );
};
