import Image from 'next/image'

export function SectionEnd({ variant }: { variant: 'pink' | 'green' }) {
    if (variant === 'pink') {
        return (
            <>
                <Image
                    className="w-full absolute bottom-0"
                    alt=""
                    width={100}
                    height={100}
                    src="/images/divider-pink.svg"
                />
            </>
        )
    }
}
