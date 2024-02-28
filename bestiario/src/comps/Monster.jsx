import './monster.css';

function Monster ({ monster,description,image }) {
    return (
        <div className="monsterBody">
            <h1>Esto es /Monster</h1>
            <table className='monsterTable'>
                <tr>
                    <th>{monster}</th>
                </tr>
                <tr>
                    <th><img src={image} alt={monster} /></th>
                </tr>
                <tr>
                    <td>{description}</td>
                </tr>
            </table>
        </div>
    );
}
export default Monster;
