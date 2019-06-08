const gooseID = 215214;

function findPostsByUserID(uID){
  const  filter    = (p) => p.firstElementChild.firstElementChild.firstElementChild.classList.contains(`userid-${uID}`);
  const  allPosts  = document.querySelectorAll('table.post');
  const  userPosts = [...allPosts].filter(filter);
  return userPosts;
}

function replacePostText(post, newText) {
  post.querySelector('.postbody').textContent = newText;
}
function honkify(post){
  words = post.querySelector('.postbody').textContent.split(' ');
  honks = words.map(w => 'HONK').join(' ');
  replacePostText(post,honks);
}

const geese = findPostsByUserID(gooseID);
console.log('geese', geese);
for(let goose of geese){
  honkify(goose);
}
