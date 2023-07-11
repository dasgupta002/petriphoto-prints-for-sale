import { UilTwitter, UilInstagram } from '@iconscout/react-unicons'

export default function Contact() {
    return (
        <section className = 'flex justify-end gap-4 border-t-[0.4rem] md:border-t-[1rem] border-[#1b3b35] pt-4'>
            <a href = 'https://twitter.com/dasgupta002'>
                <UilTwitter />
            </a>
            <a href = 'https://instagram.com/dasgupta002'>
                <UilInstagram />
            </a>
        </section>
    )
}