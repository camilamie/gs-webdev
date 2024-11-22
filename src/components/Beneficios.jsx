function Benef({dadosBenef}) {
    return ( 
        <>
            <div className="app-info justify-items-center   ">
                {dadosBenef.map((element, index) =>(
                    <div className="rounded-xl w-[900px]	bg-ve text-cinza-claro m-4 p-4" key={index}>
                        <h3 className="text-[20px] justify-self-center">{element.beneficio}</h3>
                    </div>
                
                ))}
            </div>
        
        </>
     );
}

export default Benef;