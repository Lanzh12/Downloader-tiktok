export const getUrl = async (url) => {
    let content = document.getElementById('content');
    let res = await fetch(`/tiktok/api.php?url=${encodeURIComponent(url)}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    let { audio, video } = await res.json();
    
    let buttons = `
        <a href="${audio[0]}" download class='btn'>Unduh Audio</a>
        <a href="${video}" download class='btn'>Unduh Video</a>
    `;
    content.innerHTML = `${buttons}`;
}
