import React from 'react'

export default function Contract(data) {
  return (
    <div>
                    <p className="text-black mb-2">Ongoing contracts</p>
                    <div
  className="block max-w-[22rem] rounded-lg text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
  <div className="p-6">
    <h5
      className="mb-2 text-lg font-medium leading-tight text-neutral-50">
      {data.factionSymbol} - {data.type}
    </h5>
    <p
      className={"text-base  leading-normal text-neutral-200 " + (data.fufilled ? "text-blue-500": data.accepted ? "text-orange-500" : "text-green-500")}>
     {data.fufilled ? "Completed": data.accepted ? "Ongoing" : "Available"}
    </p>
    <p
      className="text-base  leading-normal text-neutral-200">
     Deliver: {data.terms.deliver[0].tradeSymbol.replace(/_/,' ')} {data.terms.deliver[0].unitsFulfilled} / {data.terms.deliver[0].unitsRequired}
    </p>
    <p
      className="text-base  leading-normal text-neutral-200">
     Destination: {data.terms.deliver[0].destinationSymbol}
    </p>
    <p
      className="text-base  leading-normal text-neutral-200">
     Deadline: {new Date(data.terms.deadline).toLocaleString()}
    </p>
    <p
      className="text-base  leading-normal text-neutral-200">
     On accepting: {data.terms.payment.onAccepted} €
    </p>
    <p
      className="text-base  leading-normal text-neutral-200">
     Fufilling: {data.terms.payment.onFulfilled} €
    </p>
    <button className="bg-white p-1 mt-2 hover:bg-gray-400">Accept</button>
  </div>
</div>
    </div>
  )
}
