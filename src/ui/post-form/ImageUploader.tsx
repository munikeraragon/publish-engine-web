const ImageIcon = () => (
    <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        className='crayons-icon'
        xmlns='http://www.w3.org/2000/svg'
        role='img'
        aria-labelledby='a17qec5pfhrwzk9w4kg0tp62v27qqu9t'>
        <title id='a17qec5pfhrwzk9w4kg0tp62v27qqu9t'>Upload image</title>
        <path d='M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z' />
    </svg>
);

export const ImageUploader = () => {
    return (
        <div className=''>
            <button className='flex hover:bg-gray-100 text-gray-800  rounded py-2 px-2'>
                <ImageIcon />
                Upload Image
            </button>
        </div>
    );
};
