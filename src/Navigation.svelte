<nav>
    <ul>
        <li>One</li>
        <li>Second Link</li>
        <li>Third is the Word</li>
        <li>4</li>
        <li>Number Five is Alive</li>
    </ul>
</nav>

<style>
    nav {
        width: 100%;
    }
    ul {
        width: 100%;
        display: flex;
        padding: 0;
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
    }
    li {
        font-family: sans-serif;
        font-size: 0.8rem;
        color: white;
        display: inline-block;
        white-space: nowrap;
        background: hsl(200, 95%, 83%);
        padding: 5px 4rem;
        border-radius: 100px;
        scroll-snap-align: start;
    }
</style>