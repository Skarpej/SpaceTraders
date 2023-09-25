import Contract from "./Contract";

export default function Contracts({contracts}) {
    if (!contracts || !contracts.data) {
        return <div>Loading contracts...</div>;
    }
    console.log(contracts)
    return (
        <div className='ml-8 mt-3 usercard'>
            <div>
            {
                contracts.data.map(data => {
                    return <Contract {...data}/>
                })
            }
            </div>
        </div>
    );
}