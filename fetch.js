document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-list");
  if (!container) return; // nếu ko có product-list, thoát luôn

  fetch("data/products.json")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((products) => {
      products.forEach((p) => {
        const card = document.createElement("div");
        card.className = "col-6 col-md-4 col-lg-3 mb-5";
        card.innerHTML = `<div
                            class="card bg-info bg-opacity-10 shadow-lg border-info h-100 card-hover"
                          >
                         
                            <img src="${p.image}" class="card-img-top" alt="${p.name}" />
                              <div class="card-body">
                                <h5 class="card-title text-center">${p.name}</h5>
                                <p class="card-text text-center mb-2">Xuất xứ: ${p.origin}</p>
                                <h5 class="card-title text-danger text-center fw-semibold">${p.price}</h5>
                              </div>
                              <div class="card-footer text-center">
                                <a
                                  href="${p.link}"
                                  class="btn hover-effect bg-info bg-opacity-50 p-2 fs-4 fs-semibold"
                                  ><i class="fas fa-credit-card me-2"></i>Mua Ngay</a
                                >
                              </div>
                       
                          </div>  `;
        container.appendChild(card);
      });
    })
    .catch((err) => console.error("Lỗi load products.json:", err));
});
// ở trang index
// hàng mới về
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-newItem");
  if (!container) return; // nếu ko có product-list, thoát luôn

  fetch("data/products.json")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((products) => {
      // Lọc sản phẩm có id như bạn muốn
      const selected = products.filter((p) =>
        [11, 10, 13, 12].includes(Number(p.id))
      );
      selected.forEach((p) => {
        const card = document.createElement("div");
        card.className = "col-6 col-md-4 col-lg-3 mb-5";
        card.innerHTML = `<div
                            class="card bg-info bg-opacity-10 shadow-lg border-info h-100 card-hover"                          
                          >
                         
                            <img src="${p.image}" class="card-img-top" alt="${p.name}" />
                              <div class="card-body">
                                <h5 class="card-title text-center">${p.name}</h5>
                                <p class="card-text text-center mb-2">Xuất xứ: ${p.origin}</p>
                                <h5 class="card-title text-danger text-center fw-semibold">${p.price}</h5>
                              </div>
                              <div class="card-footer text-center">
                                <a
                                  href="${p.link}"
                                  class="btn hover-effect bg-info bg-opacity-50 p-2 fs-4 fs-semibold"
                                  ><i class="fas fa-credit-card me-2"></i>Mua Ngay</a
                                >
                              </div>
                       
                          </div>  `;
        container.appendChild(card);
      });
    })
    .catch((err) => console.error("Lỗi load products.json:", err));
});
