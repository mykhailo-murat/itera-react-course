export type FooterProps = {
    copyright: string;
}

export const Footer: React.FC<FooterProps> = (props) => (
    <footer>
        <p>Footer {props.copyright}</p>
    </footer>
)