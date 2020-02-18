import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");
async function promise() {
    let promiseOfModal = new Promise((resolve) => {
        setTimeout(() => {
            resolve(modal.style.display = "block")
        }, (1000 * 60));
    })
    return await promiseOfModal;
}
promise();

modal.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "close":
        case "modal":
            modal.style.display = "none"
            break;
    }
})

const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', () => {
    async function afterHover() {
        let promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(btn.style.backgroundColor = 'pink');
                alert("Continue to subscribe");
            }, 300);
        })
        return await promise;
    }
    afterHover();
})