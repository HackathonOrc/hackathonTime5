import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { useState } from 'react';
import PostCard from '../components/postcard/Postcard';
import FormCard from "../components/formCard/FormCard";
import api from '../services/api';

const Home = () => {
    var like = false; //variável que definirá se o coração do like será preenchido ou não

    const [input, setInput] = useState("");
    const [fill, setFill] = useState(like);

    async function Teste() {
        const result = await api.get('/user/');
        const data = result.data;
        console.log(data);
        alert(data[0].email);
    }

    return (
        <div>
            <Input value={input} label="Nome" onChange={e => setInput(e.target.value)} />
            Hello World
            <Button onClick={Teste}>Cadastrar</Button>
            <PostCard titulo="username" texto="tweet aqui" isFilled={fill} onClick={() => { setFill(!fill) }}></PostCard>
            <FormCard image={3}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Button onClick={Teste}>Cadastrar</Button>
                    <Button onClick={Teste}>Cadastrar</Button>
                    <Button onClick={Teste}>Cadastrar</Button>
                    <Button onClick={Teste}>Cadastrar</Button>
                    <Button onClick={Teste}>Cadastrar</Button>
                    <Button onClick={Teste}>Cadastrar</Button>
                </div>
            </FormCard>
        </div >
    )
}

export default Home;