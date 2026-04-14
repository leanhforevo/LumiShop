export default function HomePage() {
  const menu = [
    { name: 'Espresso', desc: 'Đậm vị, gọn gàng, đánh thức buổi sáng.', price: '45.000đ' },
    { name: 'Cappuccino', desc: 'Foam mịn, cân bằng giữa sữa và cà phê.', price: '55.000đ' },
    { name: 'Cold Brew', desc: 'Mát lạnh, hậu vị êm và sạch.', price: '59.000đ' },
    { name: 'Matcha Latte', desc: 'Mềm vị, thơm béo, dễ uống cả ngày.', price: '58.000đ' },
  ];

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-copy">
          <span className="badge">Lumi Coffee • Freshly Brewed</span>
          <h1>Coffee shop website sẵn sàng để bán hàng</h1>
          <p>
            Không gian ấm, đồ uống chất, menu rõ ràng. Một landing page hiện đại để giới thiệu
            quán, món nổi bật và thu hút khách ghé thăm.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="primaryBtn">Xem menu</a>
            <a href="#about" className="secondaryBtn">Về quán</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="cupGlow" />
          <div className="hero-panel">
            <p className="panelTitle">Best Seller</p>
            <h3>Signature Sea Salt Coffee</h3>
            <p className="panelText">Vị cà phê rang đậm kết hợp lớp kem mặn nhẹ, hợp gu khách trẻ.</p>
            <strong>65.000đ</strong>
          </div>
        </div>
      </section>

      <section className="stats">
        <div><strong>4.9/5</strong><span>Đánh giá khách hàng</span></div>
        <div><strong>15 min</strong><span>Chuẩn bị trung bình</span></div>
        <div><strong>100%</strong><span>Hạt rang chọn lọc</span></div>
      </section>

      <section id="menu" className="menuSection">
        <div className="sectionHead">
          <span className="eyebrow">Menu nổi bật</span>
          <h2>Món bán chạy</h2>
        </div>
        <div className="menuGrid">
          {menu.map((item) => (
            <article key={item.name} className="menuCard">
              <div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="aboutSection">
        <div>
          <span className="eyebrow">Why us</span>
          <h2>Thiết kế tối giản, hợp để chạy quảng cáo và giới thiệu quán</h2>
        </div>
        <p>
          Trang này tối ưu cho việc giới thiệu thương hiệu coffee shop, hiển thị đẹp trên điện thoại,
          load nhanh và dễ mở rộng sau này thành website đặt hàng hoặc tích hợp chatbot.
        </p>
      </section>
    </main>
  );
}
