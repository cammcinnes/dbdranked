import Button from '../components/button';
import Search from '../components/search';
import '../index.css';

function Welcome() {
    return(
        <>
        <h1 className='text-3xl font-bold underline'>DBDRanks</h1>
        <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
            <Search/>
            <Button className="mt-10" href="#search"> Search</Button>
        </div>
        </>
    );
};

export default Welcome;