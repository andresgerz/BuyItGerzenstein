import { Link } from 'react-router-dom';

const Finished = () => {
    return (
        <div>
            <div className="display-4 alert alert-success m-5">Thanks you for your order !!</div>
            <Link className="btn btn-primary m-5" to={'/'} >Back to Home</Link>
        </div>
    );
}
 
export default Finished;