// home.mjs
import { Counter } from './counter.mjs';

export function Home() {
    const counter = Counter(); // Counter instance তৈরি

    return {
        template: `
            <div id="home">
                <div id="home-title">
                    <img src="./asset/icons/arow.svg" alt="AROW Icon">
                    <h1>AROW</h1>
                </div>
                <span>a simple <i>chrome extension</i> <b>Framework</b> written in vanilla js</span>
                <br>
                ${counter.template}
            </div>
        `,
    }
}