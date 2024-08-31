import React, { useContext, useEffect, useState } from 'react';
import Home from './Home';
import vmmitContext from '../context/vmmitContext';
import CommentItem from './CommentItem';

export default function AddComment() {
  const context = useContext(vmmitContext);
  const [user, setUser] = useState({
    name: '',
    email: '',
    website: '',
    comment: '',
    check: false,
  });
  const { usercomments, addComment, getComments } = context;

  useEffect(() => {
    getComments();
  },[]); 

  const onSubmitComment = (e) => {
    e.preventDefault();
    addComment(user.name, user.email, user.website, user.comment, user.check);
    // console.log(user);
    setUser({ name: '', email: '', website: '', comment: '', check: false });
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div>
      <div className="flex flex-col justify-center xl:px-60 mb-8">
        <Home />
        <div className="py-4 lg:px-8 bg-white my-auto mx-6 mb-24">
          <h3 className='text-2xl font-semibold m-4'>1 thought on "Hello world!"</h3>
          <hr />
          {usercomments.map((data) => (
            <CommentItem key={data._id} data={data} />
          ))}
          <div className="p-4">
            <form onSubmit={onSubmitComment}>
              <h1 className='font-semibold text-xl mb-6'>Leave a Comment</h1>
              <p className='text-sm text-slate-700 mb-6'>Your email address will not be published. Required fields are marked *</p>
              <textarea
                name="comment"
                id="comment"
                rows="10"
                placeholder='Type here..'
                className='border-2 p-2 rounded w-full max-w-full mb-6'
                value={user.comment}
                onChange={onChange}
                required
              />
              <div className="flex flex-row gap-2 mb-6 flex-wrap justify-between items-center">
                <input
                  type="text"
                  name='name'
                  placeholder='Name*'
                  className='p-3 border-2 xl:w-40'
                  value={user.name}
                  onChange={onChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder='Email*'
                  className='p-3 border-2 xl:w-40'
                  value={user.email}
                  onChange={onChange}
                  required
                />
                <input
                  type="text"
                  name="website"
                  placeholder='Website'
                  className='p-3 border-2 xl:w-40'
                  value={user.website}
                  onChange={onChange}
                  required
                />
              </div>
              <label className='mb-6 flex items-center'>
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  className='mr-2'
                  checked={user.check}
                  onChange={onChange}
                />
                Save my name, email, and website in this browser for the next time I comment.
              </label>
              <button
                type='submit'
                className='px-4 py-2 bg-blue-600 text-white hover:bg-blue-800'
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
