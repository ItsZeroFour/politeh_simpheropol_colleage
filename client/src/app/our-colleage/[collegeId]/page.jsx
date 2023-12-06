'use client'

export default function Page({ params }) {
	console.log(params)
	return <div>{params.collegeId}</div>
}
