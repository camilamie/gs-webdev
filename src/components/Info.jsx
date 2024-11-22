function Info({dadosInfo}) {
    return ( 
        <>
            <div className="space-y-6">
                {dadosInfo.map((element, index) =>(
                    <div className="bg-green-100 text-gray-800 rounded-xl shadow-md p-6 mx-auto w-full max-w-4xl" key={index}>
                        <h3 className="text-xl font-medium text-green-800 mb-2">{element.recurso}</h3>
                        <p className="text-gray-600">{element.explicacao}</p>
                    </div>
                ))}
            </div>
        
        </>
     );
}

export default Info;
