import React, { useContext } from 'react';
import authorImg from '../images/authoricon.png';
import deleteIcon from '../images/deleteIcon.svg';
import vmmitContext from '../context/vmmitContext';

// Utility function for formatting date
const formatDate = (date) => {
    const monthName = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${monthName} ${day}, ${year} at ${hours}:${minutes}`;
};

export default function CommentItem(props) {
    const context = useContext(vmmitContext);
    const { deleteComment } = context;

    // Convert date from props and format it
    const date = new Date(props.data.date);
    const structuredDate = formatDate(date);

    // Define a handler function for the delete button
    const handleDelete = () => {
        deleteComment(props.data._id);
    };

    return (
        <div className='my-4 px-4'>
            <article className='mb-8'>
                <div className="flex flex-row justify-between mb-2 items-center">
                    <div className="flex items-center gap-4">
                        <img src={authorImg} alt="Author's portrait" className='w-10 rounded-full' />
                        <div className="flex flex-col">
                            <p className='text-blue-700 font-semibold text-lg'>{props.data.name}</p>
                            <a className='text-xs cursor-pointer text-blue-800' href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(props.data.email)}`} target="_blank" rel="noopener noreferrer">
                                {props.data.email}
                            </a>

                        </div>
                    </div>
                    <p className='text-blue-700 font-semibold text-xs'>{structuredDate}</p>
                </div>
                <div className="ps-14 flex flex-col gap-2 mb-2">
                    <p className='text-base '>{props.data.comment}</p>
                    <p className='text-sm font-semibold'>
                        Website:
                        <a href={props.data.website} target="_blank" rel="noopener noreferrer" className='pl-2 text-blue-700 text-sm hover:text-blue-800'>{props.data.website}
                        </a>
                    </p>

                </div>

                <div className="ps-14 flex flex-row justify-between my-4">
                    <button className='border-blue-800 border-[1px] px-2 py-1 text-sm text-blue-700 font-semibold cursor-pointer hover:bg-blue-800 hover:text-white'>
                        Reply
                    </button>
                    <img
                        src={deleteIcon}
                        alt="Delete Comment"
                        className='cursor-pointer'
                        onClick={handleDelete}
                    />
                </div>
            </article>
            <hr />
        </div>
    );
}
