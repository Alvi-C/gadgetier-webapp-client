import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import axios from 'axios' // Or use your axios instance
import useAxiosPublic from '../../hooks/useAxiosPublic';

const VoteInfo = ({ productId }) => {
	const { user } = useAuth()
	const [hasVoted, setHasVoted] = useState(false)
	const [votes, setVotes] = useState({ upVote: 0, downVote: 0 })
	const axiosPublic = useAxiosPublic()

	useEffect(() => {
		// Fetch the current votes for the product
		const fetchVotes = async () => {
			try {
				const response = await axiosPublic.get(`/product/${productId}`)
				setVotes({
					upVote: parseInt(response.data.upVote, 10),
					downVote: parseInt(response.data.downVote, 10),
				})
			} catch (error) {
				console.error('Error fetching vote data:', error)
			}
		}

		fetchVotes()
	}, [productId, axiosPublic])

	const handleVote = async voteType => {
		if (hasVoted) {
			alert('You have already voted for this product.')
			return
		}

		try {
			await axios.post(`/vote/${productId}`, { userId: user._id, voteType })
			setHasVoted(true)
			// Optimistically update the vote count
			setVotes(prevVotes => ({
				...prevVotes,
				[voteType]: prevVotes[voteType] + 1,
			}))
		} catch (error) {
			console.error('Error in voting:', error)
		}
	}

	return (
		<div className='flex items-center justify-between text-sm text-gray-600 fill-current'>
			<div className='flex items-center'>
				<button
					onClick={() => handleVote('upVote')}
					className='flex items-center hover:bg-green-100 p-1 rounded-md'
				>
					<img
						className='w-5 h-5 -mt-1'
						src='https://img.icons8.com/retro/32/thumb-up.png'
						alt='thumb-up'
					/>
					<span className='ml-1'>{votes.upVote}</span>
				</button>
				<button
					onClick={() => handleVote('downVote')}
					className='flex items-center hover:bg-red-100 p-1 ml-1 rounded-md'
				>
					<img
						className='w-5 h-5 mt-1'
						src='https://img.icons8.com/retro/32/thumbs-down.png'
						alt='thumbs-down'
					/>
					<span className='ml-1'>{votes.downVote}</span>
				</button>
			</div>
		</div>
	)
}

export default VoteInfo
