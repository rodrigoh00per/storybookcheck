interface CardProps {
  title: string
}

const Card: React.FC<CardProps> = ({ title }) => (
  <div>
    Card Title <label style={{ textDecoration: 'underline' }}>{title}</label>
  </div>
)

export default Card
