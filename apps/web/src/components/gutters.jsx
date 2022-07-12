import styles from "../styles/components/gutters.module.css";

const GutterContainer = ({ children, className = "" }) =>
    <div className={`${styles.gutterContainer} ${className}`}>
        {children}
    </div>;

const Gutter = ({ percentage, children, className = "" }) =>
    <div style={{width: `${percentage}%`}} className={`${styles.gutter} ${className}`}>
        {children}
    </div>;

const TwoThirdGutter = ({ children }) => <Gutter percentage={67}>{children}</Gutter>

const ThirdGutter = ({ children }) => <Gutter percentage={33}>{children}</Gutter>

const HalfGutter = ({ children, className }) => <Gutter className={className} percentage={50}>{children}</Gutter>

const QuarterGutter = ({ children }) => <Gutter percentage={25}>{children}</Gutter>

const ThreeQuarterGutter = ({ children, className }) => <Gutter className={className} percentage={75}>{children}</Gutter>

export {
    GutterContainer,
    TwoThirdGutter,
    ThirdGutter,
    HalfGutter,
    QuarterGutter,
    ThreeQuarterGutter
}