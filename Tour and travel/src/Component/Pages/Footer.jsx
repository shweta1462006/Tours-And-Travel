import React from 'react'

export default function Footer() {
  return (
    <div>
            <section className="mb-12 ">
<div className='ml-20 bg-slate-200 text-blue-700'>

        <h2 className="text-xl font-semibold mb-4">19 Art Portfolio Examples</h2>
        <ul className="list-disc list-inside grid gap-1 sm:grid-cols-2 md:grid-cols-3">
          {[
            'Nathalie Lete', 'Michelle Carlos', 'Carmen & Luisa', 'Kriscoart', 'Alef', 'SMEX',
            'Hira Bar', 'Jessie Maxwell Bearden', 'June Digan', 'Zaria Forman', 'Abang', 'Pedro Campos',
            'Paolo Ventura', 'Ania Hobson', 'Talia Janover', 'Lissa Brandon', 'Jennifer Cartright',
            'Julia Paul', 'Andrew Daik Kim'
          ].map((name, i) => (
            <li key={i} className="text-sm">{name}</li>
          ))}
        </ul>
        </div>
      </section>

    </div>
  )
}
