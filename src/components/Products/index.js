import React from "react";

import productImg from "../../assets/productImg.png";

import "./styles.css";

export default function Products() {
  return (
    <section className="products section">
      <div className="sectionTitle">
        <h1>Produtos</h1>
      </div>

      {/* Produto 1 */}
      <div className="productsData container">
        <img
          src={productImg}
          className="productsImg"
          alt="Demostração do cartão de visita"
        />
        <div className="productInformation">
          <div className="productTitle">
            <h3>Cartão de visita</h3>
            <span>(Small bio)</span>
          </div>
          <div className="ProductDescription">
            <p>
              O <strong>cartão digital</strong>, 100% interativo.
            </p>
            <p>
              Com a sua foto ou logo e com todas as informações necessárias, seu
              cliente terá acesso a todas as suas redes sociais e contato com
              apenas um simples toque na tela do seu celular.
            </p>
          </div>
          <a href="/#" className="productButton">
            Saiba mais
          </a>
        </div>
      </div>

      {/* Produto 2 */}
      <div className="productsData container">
        <img
          src={productImg}
          className="productsImg"
          alt="Demostração do catálogo digital"
        />
        <div className="productInformation">
          <div className="productTitle">
            <h3>Catálogo Digital</h3>
            <span>(Catálogo)</span>
          </div>
          <div className="ProductDescription">
            <p>
              O <strong>catálogo digital</strong>, 100% interativo.
            </p>
            <p>
              Com organização em páginas e conteúdo diagramado como uma revista.
              Em vez de imprimir, a empresa distribui a versão em PDF ou no
              formato de Micro Site.
            </p>
          </div>
          <a href="/#" className="productButton">
            Saiba mais
          </a>
        </div>
      </div>

      {/* Produto 3 */}
      <div className="productsData container">
        <img
          src={productImg}
          className="productsImg"
          alt="Demostração do convite digital"
        />
        <div className="productInformation">
          <div className="productTitle">
            <h3>Convite Digital</h3>
            <span>(Convite)</span>
          </div>
          <div className="ProductDescription">
            <p>
              O <strong>convite digital</strong>, 100% interativo.
            </p>
            <p>
              O convite tem opções onde o seu convidado vai interagir
              confirmando a presença na festa, conhecendo o endereço do local da
              festa, vendo informações para presente, fotos, videos do
              aniversariante, noivos ou do evento.
            </p>
          </div>
          <a href="/#" className="productButton">
            Saiba mais
          </a>
        </div>
      </div>

      {/* Produto 4 */}
      <div className="productsData container">
        <img
          src={productImg}
          className="productsImg"
          alt="Demostração do Micro Site"
        />
        <div className="productInformation">
          <div className="productTitle">
            <h3>Micro Site</h3>
            <span>(Small page)</span>
          </div>
          <div className="ProductDescription">
            <p>
              O Microsite (Small Page) é um tipo de site com apenas uma ou
              poucas páginas, com conteúdos mais objetivos sobre determinado
              assunto.
            </p>
          </div>
          <a href="/#" className="productButton">
            Saiba mais
          </a>
        </div>
      </div>

      {/* Produto 5 */}
      <div className="productsData container">
        <img
          src={productImg}
          className="productsImg"
          alt="Demostração do Cardápio Digital"
        />
        <div className="productInformation">
          <div className="productTitle">
            <h3>Cardápio Digital</h3>
            <span>(Small bio)</span>
          </div>
          <div className="ProductDescription">
            <p>
              O <strong>cardápio digital</strong>, 100% interativo.
            </p>
            <p>
              O cardápio digital é a ferramenta mais recente utilizada em
              restaurantes, bares lanchonetes e demais estabelecimentos. Os
              clientes fazem seus pedidos com mas flexibilidade e autonomia.
              Trazendo mais eficiência e rapidez para seu estabelecimento.
            </p>
          </div>
          <a href="/#" className="productButton">
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}
