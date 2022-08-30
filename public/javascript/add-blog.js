async function newFormHandler(event) {
    event.preventDefault();
  
    // get req data 
    const title = document.querySelector('#blog-title').value;
    const blog_content = document.querySelector('#blog-content').value;
  
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        blog_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);
  