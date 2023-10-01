import {RES_LOGO} from '../utils/constants'

const ResList = (props) => {
    const {data} = props;
    return (
        <div className="border-b-2 border-b-gray-200 my-2 p-4 flex justify-between">
            <div className='w-9/12'>
                <div className="text-start font-bold">{data.name}</div>
                <div className="text-start font-medium">₹ {data.price/100 || data.defaultPrice/100}</div>
                <p className='text-start text-xs'>{data.description}</p>
            </div>
            <div className='w-3/12 p-2'>
                <img className="rounded-lg" src={RES_LOGO + data.imageId}></img>
                <button className='absolute bg-white shadow-md p-2 -my-6 -mx-6 w-20 text-center text-sm font-bold rounded-md text-green-600'> Add+ </button>
            </div>
        </div>
    )
}

export default ResList;