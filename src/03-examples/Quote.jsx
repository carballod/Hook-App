

export const Quote = ({author, quote }) => {
    <blockquote className="blockquote text-end">
        <p className="mb-2">{ quote }</p>
        <footer className="blockquote-footer">{ author }</footer>
    </blockquote>
}
