// counter.mjs
export function Counter() {

    return {
        template: `
            <button id="count-btn">count is 0</button>
        `,

        init: function() {
            let count = 0;
            const countBtn = document.getElementById('count-btn');
            countBtn.addEventListener('click', () => {
                count++;
                countBtn.textContent = `count is ${count}`;
            });
        }
    }
}