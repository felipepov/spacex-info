function Data({ data, name}) {
    let display = 'd-none';
	if (name.length > 0){
		display = ''
    }
    
    function numFormatter(num) {
        if(num > 1000000000){
            return (num/1000000000).toFixed(1) + 'B'; // convert to B for number from > 1 billion 
        } else if(num > 1000000){
            return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
        }else if (num > 1000){
            return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
        }else {
            return num; // if value < 1000, nothing to do
        } 
    }
    return (
        <>
        <div className={`${display} card text-center w-100 px-md-2 py-3 h-100 align-items-center justify-content-center`}>
            <p className="lead">{name}</p>
            <h2>{name === 'Valuation'  ? '$' : ''}{numFormatter(data)}</h2>
        </div>
        </>
    )
}

Data.defaultProps = {
    data: 0,
	name: 'Data',
};

export default Data
