import { useState } from 'react'
import VmmitContext from './vmmitContext'
const VmmitState = (props) => {
    const host = "https://vmmitsolutions-backend.vercel.app"
    const commentsInitial = [];
    const [usercomments, setUserComments] = useState(commentsInitial);

    const getComments = async () => {
        const response = await fetch(`${host}/api/fetchallcomments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        setUserComments(json);
        // console.log(json);
    }


    const addComment = async (name, email, website, comment, check) => {
        try {
            console.log("In add comment func");
            const response = await fetch(`${host}/api/addcomment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, website, comment, check }),
            });

            if (response.status === 200) {
                const res = await response.json();
                console.log(res);
                setUserComments(usercomments.concat(res.savedcomment));
            } else {
                const errorData = await response.json();
                console.error("Failed to add comment:", errorData);
                alert("Failed to add comment. Please check the input and try again.");
            }
        } catch (error) {
            console.error("Error adding comment:", error);
            alert("An error occurred while adding the comment. Please try again.");
        }
    };

    const deleteComment = async (id) => {
        // console.log("In delete comment");
        const response = await fetch(`${host}/api/delcomment/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const newComments = usercomments.filter((com) => { return com._id !== id })
        setUserComments(newComments);
    }

    return (
        <VmmitContext.Provider value={{ usercomments, addComment, getComments, deleteComment }}>
            {props.children}
        </VmmitContext.Provider>
    )
}
export default VmmitState
