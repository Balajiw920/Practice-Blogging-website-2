// Create New Post Button
const createPostBtn = document.querySelector('.create-post-btn');

createPostBtn.addEventListener('click', () => {
  const mainSection = document.querySelector('main section');
  const newPost = document.createElement('article');
  newPost.innerHTML = `
  <h3 >New Post Title</h3>
  <p >New post content goes here.</p>
    <button  class="edit-btn bounce-animation">Edit</button>
    <button class="delete-btn bounce-animation">Delete</button>
  `;
  newPost.classList.add('three-d-color');
  mainSection.insertBefore(newPost, mainSection.firstChild);

  // Add event listeners to new edit and delete buttons
  const editBtn = newPost.querySelector('.edit-btn');
  const deleteBtn = newPost.querySelector('.delete-btn');

  editBtn.addEventListener('click', () => {
    const post = editBtn.parentElement;
    const title = post.querySelector('h3');
    const content = post.querySelector('p');

    // If the button text is "Edit", switch to edit mode
    if (editBtn.innerText === 'Edit') {
      // Replace post content with editable form
      title.innerHTML = `<input type="text" class="edit-title" value="${title.innerText}">`;
      content.innerHTML = `<textarea class="edit-content">${content.innerText}</textarea>`;

      // Replace edit button with save button
      editBtn.innerText = 'Save';
      editBtn.classList.add('save-btn');
      editBtn.classList.remove('edit-btn');
    } 
    // If the button text is "Save", update the post with the edited content
    else if (editBtn.innerText === 'Save') {
      const newTitle = title.querySelector('.edit-title').value;
      const newContent = content.querySelector('.edit-content').value;

      title.innerHTML = newTitle;
      content.innerHTML = newContent;

      editBtn.innerText = 'Edit';
      editBtn.classList.add('edit-btn');
      editBtn.classList.remove('save-btn');
    }
  });

  // Select the rocket element
const rocket = document.querySelector('.rocket');

// Add the "launch" class to the rocket to trigger the animation
rocket.classList.add('launch');

// After the animation finishes, remove the "launch" class to reset the animation
rocket.addEventListener('animationend', () => {
  rocket.classList.remove('launch');
});


  deleteBtn.addEventListener('click', () => {
    const post = deleteBtn.parentElement;
    post.remove();
  });
});
