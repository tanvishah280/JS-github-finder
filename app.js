// Intantiate GitHub
const github = new Github;

// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (event) => {
    // Get input text
    const userText = event.target.value;

    if(userText !== '') {
        // Make HTTP call
        github.getUser(userText)
          .then(data => {
            console.log(data);
            if(data.profile.message === 'Not Found') {
                // show alert
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
          })
    } else {
        // clear profile
        ui.clearProfile();
    }
})