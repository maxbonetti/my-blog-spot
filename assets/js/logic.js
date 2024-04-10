// query selectors
//function to handle submit - log into localStorage
//submit event listener

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//DARK MODE/LIGHT MODE FUNCTION//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
$(document).ready(function(){
    $('#mode-toggle-btn').click( function() {
        $('body').toggleClass('dark-mode');
        const darkMode = $('body').hasClass('dark-mode');
        if (darkMode) {
            $('#mode-toggle-btn').text('🌞');
            $('#mode-toggle-emoji').text('🌙');
        } else {
            $('#mode-toggle-btn').text('🌙');
            $('#mode-toggle-emoji').text('🌞');
        }

});
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//SUBMIT FORM FUNCTION LOCAL STORAGE//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function handleSubmit(event) {
    event.preventDefault(); 
    const username = $('#username').val();
    const thoughts = $('#thoughts').val();
    const content = $('#content').val();
    localStorage.setItem('username', username);
    localStorage.setItem('thoughts', thoughts);
    localStorage.setItem('content', content);
    $('#username').val('');
    $('#thoughts').val('');
    $('#content').val('');
    $('#form-message').text('Form submitted successfully'); 
}
$('#blog-form').submit(handleSubmit);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// button call //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
if ($('body').hasClass('dark-mode')) {
    $('#mode-toggle-btn').text('🌞');
    $('#mode-toggle-emoji').text('🌙');
} else {
    $('#mode-toggle-btn').text('🌙');
    $('#mode-toggle-emoji').text('🌞');
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// FORM SUBMITION  FUNCTION //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function handleSubmit(event) {
    event.preventDefault();
    const username = $('#username').val();
    const title = $('#title').val();
    const description = $('#description').val();
    const blogPost = { username, title, description };
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    window.location.href = 'blog.html';
}


// $(document).ready(function() {
//     // Retrieve blog post from localStorage
//     const blogPostData = localStorage.getItem('blogPost');
//     if (blogPostData) {
//         const blogPost = JSON.parse(blogPostData);
//         displayBlogPost(blogPost);
//     }
// });

// function displayBlogPost(blogPost) {
//     const blogPostsContainer = $('#blog-posts-container');
//     const blogPostElement = $('<div class="blog-post"></div>');
//     blogPostElement.append(`<h2>${blogPost.title}</h2>`);
//     blogPostElement.append(`<p>Username: ${blogPost.username}</p>`);
//     blogPostElement.append(`<p>Description: ${blogPost.description}</p>`);
//     blogPostsContainer.append(blogPostElement);
// }

// $(document).ready(function() {
//     displayBlogPosts();
// });

function displayBlogPosts() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [{
        name:username,
        title:title,
        content:description
    }];
    const container = $('#blog-posts-container');
    container.empty(); 

    blogPosts.forEach(blogPost => {
        const post = `
            <div class="blog-posts-table">
                <h3>Title:${blogPost.title}</h3>
                <p>Username: ${blogPost.username}</p>
                <p>Description:${blogPost.description}</p>
            </div>
        `;
        container.append(post);
    });
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// back button //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
$(document).ready(function() {
    $('#back-btn').click(function() {
        window.location.href = 'index.html';
    });

    displayBlogPosts();
});