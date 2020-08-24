const { getHeapCodeStatistics } = require("v8");

const website = document.querySelector("#website");

const posts = [{title: 'Title #1', body: 'Post body #1'}
{title: 'Title #2', body: 'Post body #2'}
];

//getting data from the DB
function getPost() {
setTimeout(() => {
    let output = '';
    for(const post of posts) {
        //output += `<li>${post.title}: ${post.body}<li>`;
        
        output += "<li>" + post.title + ": " + post.body + "<li>"
        }
    
    website.innerHTML = output;
    }, 3000);
}
function createPost(title, body) {
    return new Promise = ((resolve, reject) =>{
        setTimeout(() =>{
            var error = false;
            post.push({title, body});
            if (error) {
                reject ();
            } else {
                resolve();
                
            }
        },5000);
    });   
}
createPost("title #3", "body #3");
getPost()
console.log(posts);

