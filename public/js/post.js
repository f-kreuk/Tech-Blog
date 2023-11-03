const updateFormHandler = async (event) => {
    
        if (event.target.hasAttribute('data-id')) {
            event.preventDefault();

            const name = document.querySelector('#post-title').value.trim();
            const description = document.querySelector('#post-description').value.trim();
            const id = event.target.getAttribute('data-id');
            
            if (name && description) {

            const response = await fetch(`/api/projects/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ name, description }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                document.location.replace('/profile');
            } else {
                alert('Failed to update post');
            }
        }
    };
};

    document
        .querySelector('.update-form')
        .addEventListener('submit', updateFormHandler);