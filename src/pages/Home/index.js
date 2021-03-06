import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div >
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Stand Up 4 Amigos"}
      ></BannerMain>
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]}></Carousel>
      <Carousel category={dadosIniciais.categorias[1]}></Carousel>
      <Footer></Footer>
    </div>
  );
}

export default Home;
