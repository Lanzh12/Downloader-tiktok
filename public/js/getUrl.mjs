export const getUrl = async (url) => {
    let content = document.getElementById('content');
    let res = await fetch(`/tiktok/api.php?url=${encodeURIComponent(url)}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    if (!res.ok) {
        content.innerHTML = `<p>Gagal mengambil data. Silakan coba lagi.</p>`;
        return;
    }

    let { audio, video } = await res.json();

    if (!audio || !audio.length || !video) {
        content.innerHTML = `<p>Video atau audio tidak ditemukan.</p>`;
        return;
    }

    let buttons = `
        <a href="${audio[0]}" download="audio.mp3" class='btn'>Unduh Audio</a>
        <a href="${video}" download="video.mp4" class='btn'>Unduh Video</a>
    `;
    let videoElement = `
        <video controls autoplay name="media">
            <source src="${video}" type="video/mp4">
            Browser Anda tidak mendukung pemutar video.
        </video>
    `;
    content.innerHTML = `${buttons} ${videoElement}`;
};
