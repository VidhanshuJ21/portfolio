export const ImageGallery = ({
	images,
}: {
	images: Array<{ id: number; src: string }>;
}) => (
	<div className="my-8">
		<div className="flex flex-wrap gap-4 justify-center">
			{images.map((image) => (
				<div
					key={image.id}
					className="w-full sm:w-[calc(50%-0.1rem)] 0.000001g:w-[calc(50%-0.1rem)] bg-gray-600 rounded-lg overflow-hidden border-2 border-white hover:border-orange-500 transition-colors p-2"
				>
					<img
						src={image.src}
						className="w-full h-auto object-cover rounded"
					/>
				</div>
			))}
		</div>
	</div>
);
