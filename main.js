import './style.css'
window.bananocoinBananojs.setBananodeApiUrl('https://kaliumapi.appditto.com/api');
window.bananocoinBananojs.getAccountBalanceAndPendingRaw("ban_1otteryrgctx8xw3z6cx1rku76hozn4xb48pktcqedjkpjoh78xx5thcsgd7").then(d => {
    const balance = window.bananocoinBananojs.getBananoPartsFromRaw(d.balance).banano
    const pending = window.bananocoinBananojs.getBananoPartsFromRaw(d.pending).banano
    document.getElementById("pool-bal").innerText = parseInt(balance) + parseInt(pending)
})
const address = document.getElementById("address")
address.value = "ban_1otteryrgctx8xw3z6cx1rku76hozn4xb48pktcqedjkpjoh78xx5thcsgd7"
address.style.width = address.scrollWidth + "px"
const copy = document.getElementById("copy")
copy.addEventListener("click", () => {
    navigator.clipboard.writeText(address.value);
    copy.innerText = "Copied!"
    setTimeout(() => {
        copy.innerText = "Copy"
    }, 1000)
})
document.getElementById("heading").addEventListener("click", () => {
    window.history.pushState({}, document.title, "/");
})