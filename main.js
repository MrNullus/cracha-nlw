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

function getGituubInfos

changeSocialMediaLinks();