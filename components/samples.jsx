import photos from '../data/photo.json'

export default function Samples() {
    return (
        <section className = 'columns-1 md:columns-2 lg:columns-3 gap-2 my-12'>
            <div>
                <blockquote className = 'text-justify font-extralight text-xs md:pr-12 pb-12'>
                    Stories from streets, abandoned buildings, and the great outdoors.
                    Color fades to black and white. Better touted to be a "storyteller",
                    not a photographer. Queer about people and how they live. A passion
                    that started from daydreams and "kodak" reels. Now followed and even
                    exhibited. Currently based in Calcutta, a myth not place synonymous
                    with my works. Looking to let out some prints and zines soon.
                </blockquote>
            </div>
            {
                photos.map((photo) => (<div>
                    <img key = { photo.id } src = { photo.url } alt = 'masonry__print' />
                </div>))
            }
        </section>
    )
}