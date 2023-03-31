import { useNavigate } from 'react-router-dom'

const Information = () => {
  const navigate = useNavigate()

  const goToCntact = () => navigate("/contact")

  return (<>
    <h2>Informationです。</h2>
    <button onClick={goToCntact}>お問い合わせページ</button>
  </>)
}

export default Information