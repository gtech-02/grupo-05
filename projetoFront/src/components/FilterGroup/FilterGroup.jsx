import Options from './Opcoes/Options'
import './FilterGroup.scss'
import marca from '../../json/marca.json'
import categoria from '../../json/categoria.json'
import genero from '../../json/genero.json'
import estado from '../../json/estado.json'
export default function FilterGroup(){
    return (
        <>
        <div className="containerFilter">
            <h2 className="subtitle">Filtrar por</h2>
            <span className="linha"></span>
            <div className='options'>
            <Options categoria={"Marca"} items={marca}/>
            <Options categoria={"Categoria"} items={categoria}/>
            <Options categoria={"Gênero"} items={genero}/>
            <Options categoria={"Estado"} items={estado}/>

            </div>


            <div className='content'></div>
        </div>
        </>
    )
}