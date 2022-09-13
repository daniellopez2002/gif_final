import { useFetchGifs } from "./useFetchGifs.jsx"
import { GifItem } from "./GifItem.jsx"

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category)

	return (
		<>
			<h3>{category}</h3>
			<div className="card-grid">
				{
					images.map((image, key) => {
						return <GifItem key={key} {...image}></GifItem>

					})
				}

			</div>
		</>

	)
}