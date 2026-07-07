import { Copyright, Footer } from "./site-footer.styles";

export function SiteFooter() {
  return (
    <Footer id="news">
      <Copyright>
        © 2026 Балтик Стайл — системная интеграция, поставка и ввод в эксплуатацию сложного
        компьютерного оборудования и слаботочных сетей.
      </Copyright>
      <div>
        <strong>Юридический адрес</strong>
        <span>
          236029, Калининградская обл, г Калининград, ул Гаражная, дом 2-4, корпус ПОМ III,IV,
          офис 301
        </span>
      </div>
      <div>
        <strong>Телефоны</strong>
        <span>+74012 99-11-99</span>
        <span>+74012 99-11-98</span>
      </div>
      <div>
        <strong>Реквизиты</strong>
        <span>ИНН 3905017052, КПП 390601001</span>
        <span>ОГРН 1023900773555</span>
        <span>Еmail: info@balticstyle.ru</span>
      </div>
    </Footer>
  );
}
