console.log('Before');

// Promise based approach

// getUser(1)
//     .then(user=> getRepositories(user.gitHubUsername))
//     .then(repos=>getCommits(repos[0]))
//     .then(commits=> console.log('commits', commits))
//     .catch(err =>console.log('Error', err.message));


// Async and await approach
/**
 * Javascript convert the below code into the promise based approach while executing code
 * In this approach we don't have catch method whereas we use try-catch block
 */

async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos= await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch(err){
        console.log('Error', err.message);
    }
}

displayCommits();

console.log('After');


function getUser(id) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
          }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Calling GitHub API...');
            // resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error('Could not get the repo...'))
          }, 2000);
    })
}

function getCommits(repo) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
          }, 2000);
    });
}