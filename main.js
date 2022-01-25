const linksSocialMedia = {
    github: "dev-gustavo-henrique",
    facebook: "gustavohenrique",
    twitter: "gustavodevstacks",
    youtube: "gustavodevstacks",
    instagram: "gustavo.devstacks",
};

function changeSocialMediaLinks() {
    const socialLinks = document.getElementById("socialLinks");

    for (let li of socialLinks.children) {
        const social = li.getAttribute("class");

        li.children[0].href = `
            https://${social}.com/${linksSocialMedia[social]}
        `;
    }
}

function getGitHubInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`;

    fetch(url)
        .then(response =>  response.json())
        .then(data => {
            UserName.textContent = data.name;
            UserBio.textContent = data.bio;
            UserLink.href = data.html_url;
            UserLogin.textContent =  `@${data.login}`;
            UserImage.src = data.avatar_url;
        });
}

changeSocialMediaLinks();
getGitHubInfos();