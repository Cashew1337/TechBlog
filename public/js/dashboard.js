const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const blog_body = document.querySelector('#blog-body').value.trim();

    if (title && blog_body) {
        const response = await fetch(`/api/blog`, {
            method: 'POST',
            body: JSON.stringify({ title, blog_body }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blog');
        }
    }
};

document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);

