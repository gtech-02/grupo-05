import './Options.scss'
export default function Options({categoria, items}){
    
    
        return (
            <label className='labelCheck' htmlFor="">
                <h5 className="categoria">{categoria}</h5>
                 {items.map((item, index) => (
                    <div key={index}>
                        <input className='inputCheck' type="checkbox" name={item.name} id={`option-${index}`} /> {item.name} 
                    </div>
                ))}
            </label>
        );
    }
