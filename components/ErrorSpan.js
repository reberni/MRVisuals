export default function ErrorSpan( { error, text } ) {
    return (
        <span className={`bg-red-200 transition-colors text-red-600 font-bold p-2 rounded w-80 text-center mb-2 ${!error ? 'hidden' : ''}`}>{text}</span>
    )
}