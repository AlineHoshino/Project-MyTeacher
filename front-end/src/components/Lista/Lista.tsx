/* eslint-disable react/jsx-key */
import { Button } from '@mui/material';
import { Professor } from '../../@types/professor';
import { Foto, ItemLista, ListaStyled, Informacoes, Nome, Valor, Descricao, ListaVazia } from "./Lista.style";

interface ListaProps {
    professores: Professor[]
}

const Lista = (props: ListaProps) => {
    return(
        <div>
            {props.professores.length > 0?(
                        <ListaStyled>
                        {props.professores.map(professor => (
                            <ItemLista key={professor.id}>
                            <Foto src={professor.foto}></Foto>
                            <Informacoes>
                                <Nome>{professor.nome}</Nome>
                                <Valor>{professor.valor_hora.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})} por hora</Valor>
                                <Descricao>{professor.descricao}</Descricao>
                                <Button sx={{ width: '70%'}}>Marcar Aula com Aline</Button>
                            </Informacoes>
                        </ItemLista>
                        ))}
                       </ListaStyled>
            ):(
               <ListaVazia>Nenhum item encontrado</ListaVazia>
            )}
        </div>
    ) 
}

export default Lista