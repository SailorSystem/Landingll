function openTab(tabId, btn) {
    const tabs = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => tab.classList.add("hidden"));
    document.getElementById(tabId).classList.remove("hidden");

    buttons.forEach(btn => btn.classList.remove("text-[#BCAEDC]", "font-bold"));
    if (btn) {
        btn.classList.add("text-[#BCAEDC]", "font-bold");
    }
}
