export type FooterProps = {
    copyright: string;
}

export const Footer: React.FC<FooterProps> = (props) => (
    <footer className="footer">
        <p> {props.copyright} </p>
    </footer>
)