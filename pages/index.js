import {useState} from 'react';
function Home(){
    return <div>
        Home
        <div>
            <Contador />
        </div>
    </div>
}

function Contador(){
    const [count, setCount] = useState(1);
    function adicionarContagem(){
        setCount(count + 1);
    }
    return(
        <div>
            <div>
                {count}
            </div>
            <button onClick={adicionarContagem}>Adicionar</button>
        </div>
    );
}
export default Home;
