import Header from './components/Header'
import Footer from './components/Footer'
import ArticleList from './components/ArticleList'
import './App.css'

function App() {

  const articles = [
    {
      "title": "The Future of Artificial Intelligence in Everyday Life",
      "text": "Artificial intelligence (AI) is revolutionizing industries, from healthcare to finance. With advancements in machine learning and automation, AI-driven applications are becoming an integral part of daily life. From smart assistants like Siri and Alexa to self-driving cars, AI continues to shape the future. However, ethical concerns such as data privacy and job displacement must be addressed to ensure a balanced technological evolution."
    },
    {
      "title": "The Importance of Cybersecurity in the Digital Age",
      "text": "As businesses and individuals increasingly rely on digital platforms, cybersecurity has become a crucial concern. Cyber threats such as ransomware, phishing attacks, and data breaches pose significant risks to personal and corporate information. Implementing strong password policies, multi-factor authentication, and regular security updates can help mitigate these risks. Governments and organizations must work together to enhance cybersecurity measures and protect sensitive data."
    },
    {
      "title": "The Rise of Remote Work: Challenges and Opportunities",
      "text": "The COVID-19 pandemic accelerated the shift toward remote work, transforming traditional office structures. While remote work offers flexibility and work-life balance, it also presents challenges such as communication barriers and decreased collaboration. Companies must invest in digital tools, virtual collaboration platforms, and cybersecurity measures to ensure productivity and employee well-being in this new work culture."
    },
    {
      "title": "The Evolution of Renewable Energy and Its Impact on the Environment",
      "text": "Renewable energy sources such as solar, wind, and hydroelectric power are becoming essential in reducing carbon emissions and combating climate change. Governments and businesses worldwide are investing in green energy solutions to transition away from fossil fuels. Innovations in battery storage and energy efficiency are driving the growth of sustainable energy, making it more accessible and cost-effective for consumers."
    },
    {
      "title": "The Role of Blockchain in Financial Transactions and Beyond",
      "text": "Blockchain technology is transforming industries beyond cryptocurrencies. With its decentralized and secure nature, blockchain is being utilized in supply chain management, healthcare, and digital identity verification. Smart contracts are automating transactions, reducing costs, and eliminating intermediaries. As adoption grows, businesses must understand the implications of blockchain and how it can enhance transparency and efficiency in various sectors."
    }
  ]
  

  return (
    <>
      <Header />
      <ArticleList articles={articles}/>
      <Footer />
    </>
  )
}

export default App
