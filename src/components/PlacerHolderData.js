import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';


function PlaceHolderData({data}) {
    let display = '';

    if (typeof data === 'number' && data >= 0){
        display = 'd-none'
    } else if (typeof data === 'string' && !data.includes('undefined')) {
        display = 'd-none'
    }
    return (
        <div className={`border shadow-sm card text-center w-100 px-md-2 py-3 h-100 align-items-center justify-content-center ${display}`}>
        <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={6} />
        </Placeholder>      
        <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={3} />
          </Placeholder>
        </div>
    )
}
export default PlaceHolderData
