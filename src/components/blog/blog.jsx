import { useState } from 'react';

const Blog = ({blog, handleAddToShoppingcart, remaining}) => {
    const {Cover, title, Desc, Price, Credit, id} = blog;

    const [clickedButtons, setClickedButtons] = useState({});

    const handleButtonClick = () => {
        if (clickedButtons[id] || remaining === 0) return;

        setClickedButtons((prevState) => ({
            ...prevState,
            [id]: prevState[id] === 'Select' ? 'Selected' : 'Select',
        }));

        handleAddToShoppingcart(blog);
    };

    return (
        <div className="p-4 bg-white rounded-xl">
            <img className="w-full" src={Cover} />
            <h2 className="text-lg font-semibold text-[#1C1B1B] pt-4 pb-3">{title}</h2>
            <p className="text-sm leading-6 text-[#1C1B1B99]">{Desc}</p>
            <div className="flex gap-4 pt-4 pb-6">
                <div className="flex gap-3">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 1V23" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span className="font-medium text-[#1C1B1B99]">Price : {Price}</span>
                </div>
                <div className="flex gap-3">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span className="font-medium text-[#1C1B1B99]">Credit : {Credit}</span>
                </div>
            </div>
            <button 
                onClick={handleButtonClick} 
                id={`select-button-${id}`} 
                className={`bg-[#2F80ED] w-full rounded-lg py-2 text-lg font-semibold text-white ${clickedButtons[id] || remaining === 0 ? 'disabled-button' : ''}`}
                disabled={clickedButtons[id] || remaining === 0}
                >
                    {clickedButtons[id] ? 'Selected' : 'Select'}
                </button>
        </div>
    )
}

export default Blog;