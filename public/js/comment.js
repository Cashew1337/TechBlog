const addComment = async (event) => {
    event.preventDefault();
    console.log('button pressed');

    const comment_body = document.querySelector('#comment-body').value.trim();
    const blog_id = window.location.toString().split('/')[window.location.toString().split('/').length-1];

    if (comment_body) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_body, blog_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment');
        }
    }
    // console.log(comment_body);
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', addComment);