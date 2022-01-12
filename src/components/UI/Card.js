import './Card.css';

// Card será nosso componente Wrapper(container). Isso só é possível se usarmos o conceito de props, mais especificamente, de props.children
function Card(props){
    // através do props.className temos acesso ao nome de classe colocado onde o componente Card é chamado
    const classStyle = 'card ' + props.className;

    return(
        // props.children permite exibir o conteúdo que está inserido dentro do componente <Card> </Card> mesmo sem sabermos o que foi colocado lá. Então independente se é um <h1> ou se são 3 <p>, podemos retorná-los através do props.children 
        <div className={classStyle}>{props.children}</div>
    )
}

export default Card