export default function UserCard({symbol, headquarters, credits, startingFaction}) {
    return (
        <div className='usercard'>
            <p className="text-orange-900">Name</p>
            <p>{symbol}</p>
            <p>Headquarters</p>
            <p>{headquarters}</p>
            <p>Credits</p>
            <p>{credits}</p>
            <p>Faction</p>
            <p>{startingFaction}</p>
        </div>
    );
}