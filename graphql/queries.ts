import {gql} from '@apollo/client';

export const GetAllBlogPosts = gql`
	query {
		artGetAllBlogPosts {
			title
			subtitle
			body
			media
			tags
			submission_date
		}
	}
`
