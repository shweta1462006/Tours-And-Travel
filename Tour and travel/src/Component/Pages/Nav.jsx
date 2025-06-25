import React from 'react'

export default function Nav() {
  return (
    <div>
      <nav class="flex justify-center space-x-4 bg-slate-500">
  <a href="/dashboard" class="font-m px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
  <a href="/Destinantion" class="font-m px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Destinantion</a>
  <a href="/projects" class="font-m px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
  <a href="/reports" class="font-m px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
</nav>
    </div>
  )
}
