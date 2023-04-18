interface Props {
    src: string,
    width?: number,
    quality?: number
}
export default function imageLoader({ src, width, quality }: Props) {
    const url = process.env.IMAGE_URL + src
    return `${url}?w=${width || 176}&q=${quality || 70}`
}