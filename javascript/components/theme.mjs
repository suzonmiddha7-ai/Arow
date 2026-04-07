export function Theme() {
    let sun = `<i class="fa-solid fa-sun"></i>`;
    let moon = `<i class="fa-solid fa-moon"></i>`;
    return {
        template: `
            <button id="theme-btn">${moon}</button>
            `,

        inif: function() {
            const themeBtn = document.getElementById('theme-btn');
            let isDay = false;

            themeBtn.addEventListener("click", () => {
                if (isDay) {
                    document.body.style.backgroundColor = "var(--dark-body-bg)";
                    document.body.style.color = "var(--dark-body-fg)";
                    themeBtn.innerHTML = moon;
                    isDay = false;
                } else {
                    document.body.style.backgroundColor = "var(--light-body-bg)";
                    document.body.style.color = "var(--light-body-fg)";
                    themeBtn.innerHTML = sun;
                    isDay = true;
                }
            })
        }
    }
}