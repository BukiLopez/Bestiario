import './monster.css';
const targets = document.querySelectorAll('[data-target]')
 const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {
    target.addEventListener('click', () => {
        const t = document.querySelector(target.dataset.target)
        content.forEach(c => {
            c.classList.remove('active')
        })
        t.classList.add('active')
    }
    )
})

function Monster() {
    return (
        <div className="monster">
            <div className='monsterMenu'>
                <p data-target="#inicio">Inicio</p>
                <p data-target="#descripcion">Descripcion</p>
                <p data-target="#debilidades">Debilidades</p>
            </div>
            <div className='content'>
                <div data-content id="inicio">
                    <h1>Inicio</h1>
                </div>
                <div data-content id="descripcion">
                    <h1>Descripcion</h1>
                </div>
                <div data-content id="debilidades">
                    <h1>Debilidades</h1>
                </div>
            </div>
        </div>
        
    );
}

function ShowMonster(){
    return (
        <div></div>
    )
}