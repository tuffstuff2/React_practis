function App() {
  return (
    <main>
      <aside>
        <div className="sidebar__log">
          <div className="sidebar__log__img">
            <img src="/Link.svg" alt="" />
          </div>
          <div className="sidebar__log__text">
            <h5>AGENT.UZ</h5>
            <p>selling</p>
          </div>
        </div>
        <nav>
          <ul>
            <li className="sidebar__menu__container">
              <div className="sidebar__menu__item">
                <img src="/home.png" alt="" />
                <p>Главная</p>
              </div>
            </li>
            <li className="sidebar__menu__container">
              <div className="sidebar__menu__item">
                <img src="/clints.png" alt="" />
                <p>Клиенты</p>
              </div>
            </li>
            <li className="sidebar__menu__container">
              <div className="sidebar__menu__item">
                <img src="/products.png" alt="" />
                <p>Продукты</p>
              </div>
            </li>
            <li className="sidebar__menu__container">
              <div className="sidebar__menu__item">
                <img src="/zakaz.png" alt="" />
                <p>Заказы</p>
              </div>
            </li>
            <li className="sidebar__menu__container">
              <div className="sidebar__menu__item">
                <img src="/categoris.png" alt="" />
                <p>Фирмы</p>
              </div>
            </li>
            <li className="sidebar__menu__container">
              <div className="sidebar__menu__item">
                <img src="/Frame.png" alt="" />
                <p>Категории</p>
              </div>
            </li>
          </ul>
        </nav>

        <footer className="sidebar__foot">
          <img src="/Vector.png" alt="Выйти из аккаунта" />
          <p>Log out</p>
        </footer>
      </aside>
      <section>
        <h1>История заказов</h1>
        <div className="section__lfexbox">
          <div className="section__item__container">
            <div className="section__item">
              <img src="/fr.png" alt="" />
            </div>
            <div className="section__item">
              <p>Сумма заказов</p>
              <h3>2.740.000 UZS</h3>
              <p>Из 3х Фирм</p>
            </div>
          </div>
          <div className="section__item__container">
            <div className="section__item">
              <img src="/sc.png" alt="" />
            </div>
            <div className="section__item">
              <p>Количество заказов</p>
              <h3>1.600.00</h3>
              <p>Из 3х Фирм</p>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Оплаченные (3)</h2>
          <table>
            <tbody>
              <tr>
                <td className="table__box">
                  <div className="invoice">
                    <p>1</p>
                  </div>
                  <div className="company">
                    <h4>INV-0325</h4>
                    <p>Coca Cola</p>
                  </div>
                </td>
                <td><h4>1.220.000 UZS</h4></td>
                <td>
                  <h4>Дата заказа</h4>
                  <p>01/02/2024</p>
                </td>
                <td>
                  <h4>Полученно</h4>
                  <p>06/02/2024</p>
                </td>
                <td>
                  <span className="status__paid">ОПЛАЧЕНО</span>
                </td>
                <td className="arrow">
                  <img src="/vectors.png" alt="" />
                </td>
              </tr>
              <tr>
                <td className="table__box">
                  <div className="invoice">
                    <p>1</p>
                  </div>
                  <div className="company">
                    <h4>INV-0325</h4>
                    <p>Coca Cola</p>
                  </div>
                </td>
                 <td><h4>1.220.000 UZS</h4></td>
                <td>
                  <h4>Дата заказа</h4>
                  <p>01/02/2024</p>
                </td>
                <td>
                  <h4>Полученно</h4>
                  <p>06/02/2024</p>
                </td>
                <td>
                  <span className="status__paid">ОПЛАЧЕНО</span>
                </td>
                <td className="arrow">
                  <img src="/vectors.png" alt="" />
                </td>
              </tr>
              <tr>
                <td className="table__box">
                  <div className="invoice">
                    <p>1</p>
                  </div>
                  <div className="company">
                    <h4>INV-0325</h4>
                    <p>Coca Cola</p>
                  </div>
                </td>
                 <td><h4>1.220.000 UZS</h4></td>
                <td>
                  <h4>Дата заказа</h4>
                  <p>01/02/2024</p>
                </td>
                <td>
                  <h4>Полученно</h4>
                  <p>06/02/2024</p>
                </td>
                <td>
                  <span className="status__paid">ОПЛАЧЕНО</span>
                </td>
                <td className="arrow">
                  <img src="/vectors.png" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </section>
      
    </main>
  );
}

export default App;
