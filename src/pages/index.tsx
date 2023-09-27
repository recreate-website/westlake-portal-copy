import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-westlake py-6 text-5xl text-left font-bold'>Welcome to our Parent/Student Portal</h1>

        <p className='font-bold py-4'>On this portal you can find:</p>
        <ul className='list-disc ml-6 space-y-1'>
          <li>Student contact details - please request changes if incorrect</li>
          <li>School reports</li>
          <li>School fees (parent access only)</li>
          <li>NCEA results summary</li>
          <li>Student timetables and attendance information</li>
          <li>School-related documents</li>
        </ul>
        <p className='font-bold py-4'>Usernames and Passwords</p>
        <ul className='list-disc ml-6 space-y-1'>
          <li><span className='font-bold'>Students</span>: Log in with normal username and password (username <span className='font-bold'>not</span> email)</li>
          <li><span className='font-bold'>Caregivers</span>: Username - same as student; Password - A password has been allocated to you. These will have been emailed to you.</li>
          <li>Forgotten or unknown password - please contact the school at <Link className='text-blue-500' href='mailto:support@westlake.school.nz'>support@westlake.school.nz</Link></li>
        </ul>
      </div>
    </main>
  )
}
