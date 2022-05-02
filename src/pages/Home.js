import './Style.css'
import styled from 'styled-components'
import ImageList from '@mui/material/ImageList';

function Home() {
  const HomeCardContainer = styled.div`
    display: block;
    @medio only screen and (max-width: 600px) {
      display: block;
    }
  `;
  const Card = styled.div`
    display: block;
  `;
  const renderingCard = () => {
    const CardList = [] ;
    for(let i = 0 ; i<16 ; i++){
      const w = 180 + "px";
      const h = Math.floor(Math.random() * 100)+ 100;

      CardList.push(<Card style={{width: w, height: h}} className="Home-card"/>);
    }
    return CardList;
  };

  return(
      <div className = "Home-background">
        <div className = "Home-container">
          <div className = "Home-logo">
            <h1>Laranja Lirico</h1>
            <h4>A maioria das cores pode ser sintetizado ff
            fazendo misturas de cores chamado "primário"</h4>
          </div>
          
          <ImageList variant="masonry" cols={3} gap={8} className = "Home-card-container">

            {renderingCard()}
            
          </ImageList>
        </div>
      </div>
  );
}

export default Home;